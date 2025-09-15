import React, { useState, useRef } from 'react';
import { Camera, Upload as UploadIcon, X, ArrowLeft, Image as ImageIcon, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Upload = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [results, setResults] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    // Filter for image files only
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length !== files.length) {
      alert('Please select only image files (JPG, PNG, WEBP)');
    }

    setSelectedFiles(prev => [...prev, ...imageFiles]);
    
    // Create previews
    imageFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviews(prev => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length > 0) {
      setSelectedFiles(prev => [...prev, ...imageFiles]);
      
      imageFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviews(prev => [...prev, e.target?.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleAnalyze = async () => {
    if (selectedFiles.length === 0) return;
    
    setIsProcessing(true);
    setProcessingProgress(0);
    
    // Simulate AI processing
    const interval = setInterval(() => {
      setProcessingProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return prev;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Simulate API call delay
    setTimeout(() => {
      clearInterval(interval);
      setProcessingProgress(100);
      
      // Mock results
      setTimeout(() => {
        setResults({
          breed: 'Gir Cattle',
          confidence: 94.5,
          characteristics: {
            origin: 'Gujarat, India',
            milkYield: '10-12 liters per day',
            bodyWeight: '350-400 kg',
            features: ['Distinctive curved horns', 'Reddish-brown coat', 'Prominent hump']
          },
          recommendations: [
            'Provide adequate water supply (40-50 liters per day)',
            'Feed high-quality green fodder and concentrates',
            'Regular veterinary checkups recommended',
            'Maintain clean and dry housing conditions'
          ]
        });
        setIsProcessing(false);
      }, 1000);
    }, 3000);
  };

  const resetUpload = () => {
    setSelectedFiles([]);
    setPreviews([]);
    setResults(null);
    setProcessingProgress(0);
    setIsProcessing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => window.location.href = '/'}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Breed Recognition</h1>
                <p className="text-sm text-muted-foreground">Upload images of cattle or buffalo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!results ? (
          <div className="space-y-6">
            {/* Upload Section */}
            <Card className="card-elegant p-6 sm:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Upload Livestock Images</h2>
                <p className="text-muted-foreground">
                  Take clear photos of cattle or buffalo for accurate breed identification
                </p>
              </div>

              {/* Upload Area */}
              <div
                className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full inline-flex">
                    <UploadIcon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-foreground mb-2">
                      Drag & drop images here, or click to browse
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supports JPG, PNG, WEBP up to 10MB each
                    </p>
                  </div>
                </div>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>

              {/* File Previews */}
              {previews.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Selected Images ({previews.length})</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {previews.map((preview, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-24 sm:h-32 object-cover rounded-lg border border-border"
                        />
                        <Button
                          variant="destructive"
                          size="sm"
                          className="absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(index);
                          }}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* Action Buttons */}
            {selectedFiles.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={handleAnalyze}
                  disabled={isProcessing}
                  className="btn-hero px-8 py-3 text-lg"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Analyze Images
                    </>
                  )}
                </Button>
                
                <Button variant="outline" onClick={resetUpload} disabled={isProcessing}>
                  Clear All
                </Button>
              </div>
            )}

            {/* Processing Progress */}
            {isProcessing && (
              <Card className="card-elegant p-6">
                <div className="text-center space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full inline-flex">
                    <Loader2 className="h-8 w-8 text-primary animate-spin" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">AI is analyzing your images...</h3>
                    <p className="text-muted-foreground">This may take a few seconds</p>
                  </div>
                  <div className="max-w-md mx-auto">
                    <Progress value={processingProgress} className="mb-2" />
                    <p className="text-sm text-muted-foreground">{Math.round(processingProgress)}% complete</p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        ) : (
          /* Results Section */
          <div className="space-y-6">
            <Card className="card-elegant p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Analysis Results</h2>
                <Button variant="outline" onClick={resetUpload}>
                  <UploadIcon className="h-4 w-4 mr-2" />
                  Analyze New Images
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Main Result */}
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                    <div className="bg-primary/20 p-3 rounded-full inline-flex mb-4">
                      <ImageIcon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{results.breed}</h3>
                    <Badge variant="default" className="text-lg px-4 py-2">
                      {results.confidence}% Confidence
                    </Badge>
                  </div>

                  {/* Characteristics */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Breed Characteristics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Origin:</span>
                        <span className="font-medium">{results.characteristics.origin}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Milk Yield:</span>
                        <span className="font-medium">{results.characteristics.milkYield}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Body Weight:</span>
                        <span className="font-medium">{results.characteristics.bodyWeight}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features & Recommendations */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {results.characteristics.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Care Recommendations</h4>
                    <div className="space-y-3">
                      {results.recommendations.map((rec: string, index: number) => (
                        <div key={index} className="flex gap-3 p-3 bg-accent/10 rounded-lg">
                          <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                          </div>
                          <span className="text-sm">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;