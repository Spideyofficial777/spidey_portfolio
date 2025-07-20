import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ResumeDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const resumeInfo = {
    fileName: 'SPIDEY_OFFICIAL_Resume_2025.pdf',
    fileSize: '2.4 MB',
    lastUpdated: 'January 15, 2025',
    downloadCount: '1,247'
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download process
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create a mock download link
      const link = document.createElement('a');
      link.href = '#'; // In real implementation, this would be the actual PDF URL
      link.download = resumeInfo.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePreview = () => {
    // In real implementation, this would open PDF in new tab
    window.open('#', '_blank');
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-card-foreground mb-2">
          Resume & Credentials
        </h2>
        <p className="text-muted-foreground">
          Download my complete resume with detailed experience, skills, and achievements.
        </p>
      </div>

      {/* Resume Preview Card */}
      <div className="bg-muted/20 rounded-lg border border-border p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
            <Icon name="FileText" size={24} className="text-primary" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-card-foreground mb-1">
              {resumeInfo.fileName}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Icon name="HardDrive" size={14} />
                {resumeInfo.fileSize}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Calendar" size={14} />
                Updated {resumeInfo.lastUpdated}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Download" size={14} />
                {resumeInfo.downloadCount} downloads
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <Button
          onClick={handleDownload}
          loading={isDownloading}
          disabled={isDownloading}
          iconName="Download"
          iconPosition="left"
          className="flex-1"
        >
          {isDownloading ? 'Downloading...' : 'Download Resume'}
        </Button>
        
        <Button
          variant="outline"
          onClick={handlePreview}
          iconName="Eye"
          iconPosition="left"
          className="flex-1"
        >
          Preview
        </Button>
      </div>

      {/* Resume Highlights */}
      <div className="space-y-4">
        <h3 className="font-semibold text-card-foreground">Resume Highlights</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
            <div className="flex items-center justify-center w-8 h-8 bg-success/10 rounded-full">
              <Icon name="Code" size={16} className="text-success" />
            </div>
            <div>
              <p className="font-medium text-card-foreground text-sm">5+ Years</p>
              <p className="text-xs text-muted-foreground">Full-Stack Development</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
              <Icon name="Briefcase" size={16} className="text-primary" />
            </div>
            <div>
              <p className="font-medium text-card-foreground text-sm">50+ Projects</p>
              <p className="text-xs text-muted-foreground">Successfully Delivered</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
            <div className="flex items-center justify-center w-8 h-8 bg-secondary/10 rounded-full">
              <Icon name="Award" size={16} className="text-secondary" />
            </div>
            <div>
              <p className="font-medium text-card-foreground text-sm">15+ Technologies</p>
              <p className="text-xs text-muted-foreground">Expert Proficiency</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
            <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-full">
              <Icon name="Users" size={16} className="text-accent" />
            </div>
            <div>
              <p className="font-medium text-card-foreground text-sm">100% Client</p>
              <p className="text-xs text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex items-start gap-3">
          <Icon name="Info" size={16} className="text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium text-card-foreground mb-1">
              Professional References Available
            </p>
            <p className="text-xs text-muted-foreground">
              Contact information for previous clients and employers available upon request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDownload;