import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Users, Globe } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-health-primary via-health-secondary to-health-accent text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI-Driven Health 
              <span className="block text-health-accent">Assistant</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Empowering rural and semi-urban communities with instant access to healthcare information, 
              disease awareness, and vaccination schedules through multilingual AI chatbot technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="health" 
                size="xl" 
                className="shadow-2xl"
                onClick={() => document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Start Health Chat
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Shield className="h-8 w-8 mb-2 text-health-accent" />
                <span className="text-sm font-medium">80% Accuracy</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 mb-2 text-health-accent" />
                <span className="text-sm font-medium">Rural Focus</span>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="h-8 w-8 mb-2 text-health-accent" />
                <span className="text-sm font-medium">Multilingual</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-health-accent to-health-secondary rounded-3xl blur opacity-30"></div>
              <img 
                src={heroImage} 
                alt="Healthcare Technology" 
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;