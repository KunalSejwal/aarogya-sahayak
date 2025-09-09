import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  FileText, 
  Activity, 
  Calendar,
  Pill,
  AlertCircle,
  TrendingUp,
  Clock
} from "lucide-react";

const PatientInfo = () => {
  const patientData = {
    name: "राम कुमार",
    age: 45,
    gender: "Male",
    location: "Village Patna",
    id: "PID001234"
  };

  const medicalHistory = [
    {
      date: "2024-01-15",
      condition: "Diabetes Type 2",
      status: "Ongoing",
      doctor: "Dr. Singh",
      severity: "moderate"
    },
    {
      date: "2024-01-10",
      condition: "Hypertension",
      status: "Controlled",
      doctor: "Dr. Sharma",
      severity: "mild"
    },
    {
      date: "2023-12-20",
      condition: "Common Cold",
      status: "Recovered",
      doctor: "Dr. Patel",
      severity: "mild"
    }
  ];

  const currentTreatments = [
    {
      medicine: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      duration: "Ongoing",
      purpose: "Diabetes control"
    },
    {
      medicine: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      duration: "3 months",
      purpose: "Blood pressure"
    }
  ];

  const vitalStats = [
    { label: "Blood Pressure", value: "130/85", unit: "mmHg", status: "elevated" },
    { label: "Blood Sugar", value: "142", unit: "mg/dL", status: "high" },
    { label: "Weight", value: "72", unit: "kg", status: "normal" },
    { label: "BMI", value: "24.2", unit: "", status: "normal" }
  ];

  return (
    <section id="info" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Patient Information & History
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive patient records and ongoing treatment monitoring
          </p>
        </div>

        {/* Patient Basic Info */}
        <Card className="mb-8 bg-gradient-to-r from-health-primary to-health-secondary text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <User className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{patientData.name}</h3>
                  <p className="text-white/80">{patientData.age} years • {patientData.gender} • {patientData.location}</p>
                  <p className="text-sm text-white/70">Patient ID: {patientData.id}</p>
                </div>
              </div>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <FileText className="h-4 w-4 mr-2" />
                View Full Record
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Vital Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-health-primary" />
                Vital Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {vitalStats.map((vital, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{vital.label}</p>
                    <p className="text-xs text-muted-foreground">{vital.unit}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{vital.value}</p>
                    <Badge 
                      variant={vital.status === 'normal' ? 'default' : vital.status === 'elevated' ? 'secondary' : 'destructive'}
                      className="text-xs"
                    >
                      {vital.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Medical History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-health-secondary" />
                Medical History
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {medicalHistory.map((record, index) => (
                <div key={index} className="p-3 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">{record.condition}</h4>
                    <Badge 
                      variant={record.status === 'Ongoing' ? 'destructive' : record.status === 'Controlled' ? 'secondary' : 'default'}
                      className="text-xs"
                    >
                      {record.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">Dr: {record.doctor}</p>
                  <p className="text-xs text-muted-foreground">{record.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Current Treatments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Pill className="h-5 w-5 mr-2 text-health-accent" />
                Current Treatments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {currentTreatments.map((treatment, index) => (
                <div key={index} className="p-3 bg-gradient-to-r from-muted/30 to-transparent rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">{treatment.medicine}</h4>
                    <Badge variant="outline" className="text-xs">
                      {treatment.duration}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{treatment.dosage} • {treatment.frequency}</p>
                  <p className="text-xs text-health-primary font-medium">{treatment.purpose}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Alerts */}
        <Card className="mt-8 border-health-warning">
          <CardHeader>
            <CardTitle className="flex items-center text-health-warning">
              <AlertCircle className="h-5 w-5 mr-2" />
              Recent Health Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-health-warning/10 rounded-lg">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-health-warning" />
                  <div>
                    <p className="font-medium text-sm">Blood Sugar Elevated</p>
                    <p className="text-xs text-muted-foreground">Recorded on Jan 18, 2024</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-health-secondary/10 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-health-secondary" />
                  <div>
                    <p className="font-medium text-sm">Medication Reminder</p>
                    <p className="text-xs text-muted-foreground">Next dose in 2 hours</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Mark Taken
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PatientInfo;