import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Shield, 
  Thermometer, 
  Stethoscope, 
  AlertTriangle, 
  Calendar,
  Pill,
  Activity
} from "lucide-react";

const HealthInfoCards = () => {
  const healthCategories = [
    {
      icon: Heart,
      title: "Disease Prevention",
      description: "Learn about preventive measures for common diseases in rural areas",
      topics: ["Malaria Prevention", "Dengue Awareness", "Water-borne Diseases", "Hygiene Practices"],
      color: "health-primary"
    },
    {
      icon: Calendar,
      title: "Vaccination Schedule",
      description: "Stay updated with vaccination schedules for all age groups",
      topics: ["Child Immunization", "Adult Vaccines", "Seasonal Vaccines", "Booster Shots"],
      color: "health-secondary"
    },
    {
      icon: Thermometer,
      title: "Symptom Checker",
      description: "Identify common symptoms and when to seek medical help",
      topics: ["Fever Management", "Cold & Flu", "Digestive Issues", "Skin Problems"],
      color: "health-accent"
    },
    {
      icon: AlertTriangle,
      title: "Health Alerts",
      description: "Real-time alerts about disease outbreaks and health advisories",
      topics: ["Outbreak Alerts", "Weather Health", "Seasonal Warnings", "Safety Measures"],
      color: "destructive"
    }
  ];

  const quickStats = [
    { label: "Health Queries Answered", value: "50,000+", icon: Stethoscope },
    { label: "Villages Reached", value: "2,500+", icon: Heart },
    { label: "Languages Supported", value: "8+", icon: Shield },
    { label: "Accuracy Rate", value: "85%", icon: Activity }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Making Healthcare Accessible
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Real-time health information and support for rural communities across Odisha
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {quickStats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-muted/30 hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 text-health-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Health Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-muted/20 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${category.color} to-${category.color}/80 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-health-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-2 mb-6">
                  {category.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="text-xs bg-muted/50 rounded-full px-3 py-1 text-muted-foreground">
                      {topic}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-health-primary group-hover:text-white group-hover:border-health-primary transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Section */}
        <Card className="mt-12 bg-gradient-to-r from-destructive to-destructive/80 text-white border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <AlertTriangle className="h-12 w-12 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold mb-4">Medical Emergency?</h3>
            <p className="text-white/90 mb-6 text-lg">
              For immediate medical assistance, contact emergency services or visit your nearest health center
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-destructive hover:bg-white/90">
                <Pill className="h-5 w-5 mr-2" />
                Emergency Helpline: 108
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Find Nearest Hospital
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HealthInfoCards;