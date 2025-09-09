import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Pill, 
  UserCheck,
  MapPin,
  Bell,
  Plus,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const CalendarSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const appointments = [
    {
      id: 1,
      title: "Dr. Singh Consultation",
      date: "2024-01-20",
      time: "10:00 AM",
      type: "checkup",
      location: "Community Health Center",
      status: "confirmed"
    },
    {
      id: 2,
      title: "Blood Test",
      date: "2024-01-22",
      time: "9:00 AM",
      type: "test",
      location: "Lab Center",
      status: "pending"
    },
    {
      id: 3,
      title: "Diabetes Review",
      date: "2024-01-25",
      time: "2:00 PM",
      type: "followup",
      location: "District Hospital",
      status: "confirmed"
    }
  ];

  const medicineSchedule = [
    {
      medicine: "Metformin",
      times: ["8:00 AM", "8:00 PM"],
      taken: [true, false],
      color: "health-primary"
    },
    {
      medicine: "Lisinopril",
      times: ["9:00 AM"],
      taken: [true],
      color: "health-secondary"
    },
    {
      medicine: "Vitamin D",
      times: ["10:00 AM"],
      taken: [false],
      color: "health-accent"
    }
  ];

  const upcomingReminders = [
    {
      title: "Take Evening Medicine",
      time: "8:00 PM",
      type: "medicine",
      priority: "high"
    },
    {
      title: "Check Blood Pressure",
      time: "Tomorrow 9:00 AM",
      type: "monitoring",
      priority: "medium"
    },
    {
      title: "Doctor Appointment",
      time: "Jan 20, 10:00 AM",
      type: "appointment",
      priority: "high"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'checkup': return <UserCheck className="h-4 w-4" />;
      case 'test': return <Pill className="h-4 w-4" />;
      case 'followup': return <Clock className="h-4 w-4" />;
      default: return <CalendarIcon className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'checkup': return 'health-primary';
      case 'test': return 'health-secondary';  
      case 'followup': return 'health-accent';
      default: return 'default';
    }
  };

  return (
    <section id="calendar" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Health Calendar & Schedules
          </h2>
          <p className="text-muted-foreground text-lg">
            Manage appointments, medicine schedules, and health monitoring reminders
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendar Overview */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2 text-health-primary" />
                  Appointments Calendar
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="font-medium">January 2024</span>
                  <Button variant="ghost" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Upcoming Appointments */}
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-muted/30 to-transparent rounded-lg border border-border">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full bg-${getTypeColor(appointment.type)}/20`}>
                          {getTypeIcon(appointment.type)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{appointment.title}</h4>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                            <span className="flex items-center">
                              <CalendarIcon className="h-3 w-3 mr-1" />
                              {appointment.date}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {appointment.time}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {appointment.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {appointment.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Schedule New Appointment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Medicine Schedule & Reminders */}
          <div className="space-y-6">
            {/* Today's Medicine Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Pill className="h-5 w-5 mr-2 text-health-secondary" />
                  Today's Medicines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {medicineSchedule.map((med, index) => (
                  <div key={index} className="p-3 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">{med.medicine}</h4>
                    <div className="space-y-2">
                      {med.times.map((time, timeIndex) => (
                        <div key={timeIndex} className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{time}</span>
                          <Badge 
                            variant={med.taken[timeIndex] ? 'default' : 'outline'}
                            className="text-xs"
                          >
                            {med.taken[timeIndex] ? 'Taken' : 'Pending'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Reminders */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-health-accent" />
                  Reminders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingReminders.map((reminder, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-muted/20 to-transparent rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{reminder.title}</p>
                      <p className="text-xs text-muted-foreground">{reminder.time}</p>
                    </div>
                    <Badge 
                      variant={reminder.priority === 'high' ? 'destructive' : 'secondary'}
                      className="text-xs"
                    >
                      {reminder.priority}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Pill className="h-4 w-4 mr-2" />
                  Log Medicine Taken
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Bell className="h-4 w-4 mr-2" />
                  Set Reminder
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;