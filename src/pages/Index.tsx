import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChatbotDemo from "@/components/ChatbotDemo";
import HealthInfoCards from "@/components/HealthInfoCards";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ChatbotDemo />
      <HealthInfoCards />
      
      {/* Footer */}
      <footer className="bg-gov-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Government of Odisha</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Department of Electronics & IT in collaboration with Health & Family Welfare Department
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div>Health Information</div>
                <div>Vaccination Centers</div>
                <div>Emergency Services</div>
                <div>Feedback</div>
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
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div>Emergency: 108</div>
                <div>Helpline: 104</div>
                <div>support@health.odisha.gov.in</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-sm text-white/60">
            <p>&copy; 2024 Government of Odisha. All rights reserved. | Developed for rural health awareness</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;