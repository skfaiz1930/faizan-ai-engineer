import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
  isTyping?: boolean;
}

interface ChatbotInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotInterface = ({ isOpen, onClose }: ChatbotInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi! I'm your portfolio assistant. I can help you explore projects, tech stack, and more. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickActions = [
    {
      label: "Show Projects",
      response: "Here are some exciting projects I've worked on:\n\n🚀 **AI-Powered Analytics Platform** - Built a scalable data analytics solution using Python, TensorFlow, and React\n\n💼 **Enterprise Resource Planning System** - Developed a comprehensive ERP system with Django and PostgreSQL\n\n🤖 **Chatbot Framework** - Created an intelligent conversational AI using NLP and machine learning\n\n🔐 **Security Automation Tools** - Implemented automated security scanning and vulnerability assessment tools\n\nWant to know more about any specific project?",
    },
    {
      label: "About",
      response: "I'm a passionate Software Engineer and AI specialist with expertise in building scalable, intelligent systems. My focus areas include:\n\n• Full-stack development with modern frameworks\n• AI/ML implementation and automation\n• Cloud infrastructure and DevOps\n• Security-first architecture\n\nI love merging data, design, and AI to create systems that think for themselves and deliver exceptional user experiences.",
    },
    {
      label: "Contact",
      response: "I'd love to connect with you! Here's how you can reach me:\n\n📧 **Email**: Feel free to use the contact form on this page\n💼 **LinkedIn**: Connect with me professionally\n🐙 **GitHub**: Check out my code and contributions\n\nI'm always open to discussing new opportunities, collaborations, or just chatting about tech!",
    },
    {
      label: "Tech Stack",
      response: "I work with a diverse range of technologies:\n\n**Languages**: Python, JavaScript/TypeScript, Java, Go\n\n**Frontend**: React, Next.js, Tailwind CSS, Vue.js\n\n**Backend**: Django, Node.js, FastAPI, Express\n\n**AI/ML**: TensorFlow, PyTorch, Scikit-learn, OpenAI\n\n**Cloud & DevOps**: AWS, Docker, Kubernetes, CI/CD\n\n**Databases**: PostgreSQL, MongoDB, Redis\n\nI'm always learning and expanding my toolkit!",
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const typeMessage = async (text: string) => {
    setIsTyping(true);
    const words = text.split(" ");
    let currentText = "";

    // Add empty assistant message
    const messageIndex = messages.length;
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "", isTyping: true },
    ]);

    // Type word by word
    for (let i = 0; i < words.length; i++) {
      currentText += (i > 0 ? " " : "") + words[i];
      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === messageIndex
            ? { ...msg, content: currentText }
            : msg
        )
      );
      await new Promise((resolve) => setTimeout(resolve, 30));
    }

    // Mark typing as complete
    setMessages((prev) =>
      prev.map((msg, idx) =>
        idx === messageIndex ? { ...msg, isTyping: false } : msg
      )
    );
    setIsTyping(false);
  };

  const handleQuickAction = async (action: typeof quickActions[0]) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      { role: "user", content: action.label },
    ]);

    // Wait a bit before typing response
    await new Promise((resolve) => setTimeout(resolve, 500));
    await typeMessage(action.response);
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput("");

    // Add user message
    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMessage },
    ]);

    // Wait a bit before typing response
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Generate contextual response
    const response = generateResponse(userMessage);
    await typeMessage(response);
  };

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes("project")) {
      return quickActions[0].response;
    } else if (lowerQuery.includes("about") || lowerQuery.includes("who")) {
      return quickActions[1].response;
    } else if (lowerQuery.includes("contact") || lowerQuery.includes("reach")) {
      return quickActions[2].response;
    } else if (lowerQuery.includes("tech") || lowerQuery.includes("skill") || lowerQuery.includes("stack")) {
      return quickActions[3].response;
    } else if (lowerQuery.includes("experience") || lowerQuery.includes("work")) {
      return "I have extensive experience in software development, AI/ML, and cloud infrastructure. I've worked on various enterprise projects involving scalable architectures, intelligent automation, and security solutions. Would you like to know more about specific areas?";
    } else if (lowerQuery.includes("hello") || lowerQuery.includes("hi")) {
      return "Hello! 👋 Nice to meet you! How can I help you explore my portfolio today?";
    } else {
      return "That's an interesting question! While I'm focused on sharing portfolio information, I'd be happy to tell you about my projects, skills, or how to get in touch. What would you like to know more about?";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm animate-fade-in">
      <div className="container mx-auto h-full max-w-4xl flex flex-col p-4 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-glow">
              <Bot className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Portfolio Assistant</h2>
              <p className="text-sm text-muted-foreground">
                Ask me anything about my work
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-destructive/10 hover:text-destructive"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto mb-6 space-y-4 scroll-smooth">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex gap-3 animate-slide-up",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.role === "assistant" && (
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-3 whitespace-pre-wrap",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border"
                )}
              >
                {message.content}
                {message.isTyping && (
                  <span className="inline-block w-1 h-4 ml-1 bg-current animate-pulse" />
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length === 1 && (
          <div className="mb-4 flex flex-wrap gap-2 animate-fade-in">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleQuickAction(action)}
                disabled={isTyping}
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask me anything..."
            disabled={isTyping}
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!input.trim() || isTyping}
            className="px-6"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotInterface;
