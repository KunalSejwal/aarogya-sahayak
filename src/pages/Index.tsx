import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChatbotDemo from "@/components/ChatbotDemo";
import HealthInfoCards from "@/components/HealthInfoCards";
import PatientInfo from "@/components/PatientInfo";
import CalendarSection from "@/components/CalendarSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ChatbotDemo />
      <HealthInfoCards />
      <PatientInfo />
      <CalendarSection />
      
      {/* Footer */}
      <footer className="bg-gov-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">आरोग्य सहायक</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              AI-Powered Health Assistant for Rural Healthcare Access and Disease Awareness
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3">Features</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div>Health Information</div>
                <div>Patient Records</div>
                <div>Medicine Tracking</div>
                <div>Appointment Scheduling</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Languages</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div>English • हिंदी</div>
                <div>ଓଡ଼ିଆ • বাংলা</div>
                <div>తెలుగు • தமிழ்</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Emergency</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div>Emergency: 108</div>
                <div>Helpline: 104</div>
                <div>support@health.assistant.in</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-sm text-white/60">
            <p>&copy; 2024 Aarogya Sahayak. All rights reserved. | Developed for accessible healthcare</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;