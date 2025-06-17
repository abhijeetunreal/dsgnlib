
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ExternalLink, Camera, FileText, Tag, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

const GOOGLE_FORM_SOURCE_URL = "https://docs.google.com/forms/d/e/1FAIpQLScc45N6obgofcOWOby6vplXZEci7n17GxfrLrZpJdOuHSi0mg/viewform";

const Submit = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4 md:p-6 lg:p-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Submit Your Work</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Share your creative projects with our community. Follow the guidelines below to ensure your submission meets our standards.
            </p>
          </div>

          {/* Submission Button */}
          <div className="flex justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href={GOOGLE_FORM_SOURCE_URL} target="_blank" rel="noopener noreferrer">
                Open Submission Form
                <ExternalLink className="ml-2" />
              </a>
            </Button>
          </div>

          {/* Guidelines Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Image Requirements */}
            <div className="bg-card rounded-lg p-6 border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Image Requirements</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Format:</strong> JPG, PNG, or WebP</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Resolution:</strong> Minimum 1200px width</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Quality:</strong> High resolution, well-lit, professional presentation</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Multiple Images:</strong> Separate URLs with commas (up to 5 images)</p>
                </div>
              </div>
            </div>

            {/* Project Information */}
            <div className="bg-card rounded-lg p-6 border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Project Details</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Title:</strong> Clear, descriptive project name</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Description:</strong> 50-200 words explaining your project</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Student Name:</strong> Your full name as you'd like it displayed</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Email:</strong> Valid email for contact and verification</p>
                </div>
              </div>
            </div>

            {/* Tags and Categories */}
            <div className="bg-card rounded-lg p-6 border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Tag className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Tags & Categories</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Format:</strong> Separate tags with commas</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Examples:</strong> UI/UX, Branding, Web Design, Print, Photography</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Limit:</strong> 3-5 relevant tags maximum</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Be Specific:</strong> Use industry-standard terminology</p>
                </div>
              </div>
            </div>

            {/* Submission Process */}
            <div className="bg-card rounded-lg p-6 border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Submission Process</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Review Time:</strong> 2-3 business days</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Notification:</strong> Email confirmation upon approval</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Publication:</strong> Projects appear in chronological order</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p><strong>Updates:</strong> Contact us for changes after submission</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-4 text-primary">Pro Tips for Better Submissions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p>• Use consistent lighting and backgrounds</p>
                <p>• Show different angles or stages of your project</p>
                <p>• Include process shots if relevant</p>
              </div>
              <div className="space-y-2">
                <p>• Write concise but engaging descriptions</p>
                <p>• Mention tools and techniques used</p>
                <p>• Proofread all text before submitting</p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              By submitting your work, you agree to our community guidelines and give permission 
              to display your project in our digital archive. All rights remain with the original creator.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Submit;
