import Header from "./Header";
import CVDocument from "./CVDocument";
import CVDocumentPage2 from "./CvDocumentPage2";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main CV Display Area */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-cv-heading mb-2 dark:text-white">
              Digital Portfolio & CV
            </h1>
            <p className="text-cv-muted dark:text-white">
              Frequemarf Paculba Jr. - IT Professional & Software Developer
            </p>
            <p className="text-gray-500">
              Click the underlined text for more info
            </p>
          </div>
          
          {/* CV Pages Container */}
          <div className="space-y-8">
            <CVDocument />
            <CVDocumentPage2 />
          </div>
          
          {/* Footer */}
          <footer className="text-center py-8 mt-12 border-t border-gray-200">
            <p className="text-sm text-cv-muted dark:text-white">
              © 2025 Frequemarf Paculba Jr. | 
              <a 
                href="mailto:paculbafrick2@gmail.com" 
                className="cv-link ml-1"
              >
                paculbafrick2@gmail.com
              </a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;