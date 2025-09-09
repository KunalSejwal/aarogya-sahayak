import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User, Mic, Languages } from "lucide-react";
import chatbotAvatar from "@/assets/chatbot-avatar.jpg";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  language?: string;
}

const ChatbotDemo = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "नमस्ते! मैं आपका स्वास्थ्य सहायक हूं। मैं आपकी स्वास्थ्य संबंधी जानकारी में मदद कर सकता हूं। आप मुझसे क्या पूछना चाहते हैं?",
      sender: 'bot',
      timestamp: new Date(),
      language: 'hindi'
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sampleQuestions = [
    "What are the symptoms of dengue fever?",
    "When should I get vaccinated?",
    "How to prevent malaria?",
    "डेंगू के लक्षण क्या हैं?"
  ];

  const botResponses = [
    "Dengue symptoms include high fever, severe headache, muscle pain, and rash. Please consult a doctor immediately if you experience these symptoms.",
    "Vaccination schedules vary by age. Children should receive vaccines as per the national immunization schedule. Adults may need boosters for certain diseases.",
    "To prevent malaria: Use mosquito nets, eliminate stagnant water, use repellents, and maintain cleanliness around your home.",
    "डेंगू के मुख्य लक्षण हैं: तेज बुखार, सिरदर्द, मांसपेशियों में दर्द, और त्वचा पर चकत्ते। यदि ये लक्षण दिखें तो तुरंत डॉक्टर से संपर्क करें।"
  ];

  const handleSendMessage = (text: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Interactive Health Assistant
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience our AI-powered health chatbot that provides instant answers in multiple languages
          </p>
        </div>

        <Card className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-health-primary to-health-secondary text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={chatbotAvatar} 
                alt="Health Assistant" 
                className="h-10 w-10 rounded-full border-2 border-white/30"
              />
              <div>
                <h3 className="font-semibold">स्वास्थ्य सहायक</h3>
                <p className="text-xs text-white/80">Online • Multilingual Support</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Languages className="h-5 w-5" />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white to-muted/20">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-2 rounded-full ${message.sender === 'user' ? 'bg-health-primary' : 'bg-muted'}`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-health-primary" />
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-health-primary text-white'
                        : 'bg-white border border-border shadow-sm'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-full bg-muted">
                    <Bot className="h-4 w-4 text-health-primary" />
                  </div>
                  <div className="bg-white border border-border shadow-sm p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-health-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-health-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-health-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          <div className="p-4 bg-muted/30 border-t">
            <p className="text-sm font-medium text-muted-foreground mb-3">Quick Questions:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {sampleQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSendMessage(question)}
                  className="text-xs hover:bg-health-primary hover:text-white"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t flex items-center space-x-3">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your health question..."
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && inputMessage.trim() && handleSendMessage(inputMessage)}
            />
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-health-primary">
              <Mic className="h-5 w-5" />
            </Button>
            <Button 
              variant="chat" 
              size="icon"
              onClick={() => inputMessage.trim() && handleSendMessage(inputMessage)}
              disabled={!inputMessage.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ChatbotDemo;