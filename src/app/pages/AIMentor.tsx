import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Send, Bot, User, Sparkles, Lightbulb, BookOpen, Target } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestions = [
  { icon: <Sparkles className="w-4 h-4" />, text: "Explain photosynthesis in simple terms" },
  { icon: <Lightbulb className="w-4 h-4" />, text: "Give me revision tips for exams" },
  { icon: <BookOpen className="w-4 h-4" />, text: "Help me understand Newton's laws" },
  { icon: <Target className="w-4 h-4" />, text: "Create a study plan for Chemistry" },
];

export default function AIMentor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Hello! I'm your AI Study Mentor. I'm here to help you with your studies, answer questions, explain concepts, and guide you through difficult topics. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: generateAIResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes("photosynthesis")) {
      return "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to produce oxygen and energy in the form of sugar (glucose).\n\n**Key Points:**\n- Occurs in chloroplasts containing chlorophyll\n- Equation: 6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂\n- Two stages: Light-dependent and Light-independent reactions\n\nWould you like me to explain any specific part in more detail?";
    } else if (lowerQuestion.includes("newton")) {
      return "**Newton's Three Laws of Motion:**\n\n1. **First Law (Inertia):** An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force.\n\n2. **Second Law (F=ma):** The acceleration of an object depends on the force applied and its mass. Formula: F = ma\n\n3. **Third Law (Action-Reaction):** For every action, there is an equal and opposite reaction.\n\nWhich law would you like to explore further?";
    } else if (lowerQuestion.includes("study plan") || lowerQuestion.includes("revision")) {
      return "Here are some effective study tips:\n\n✅ **Pomodoro Technique:** Study for 25 mins, break for 5 mins\n✅ **Active Recall:** Test yourself regularly\n✅ **Spaced Repetition:** Review material at increasing intervals\n✅ **Practice Problems:** Solve past papers and sample questions\n✅ **Teach Others:** Explaining concepts reinforces your understanding\n\nWhat subject are you focusing on? I can create a personalized study plan for you!";
    } else {
      return `I understand you're asking about "${question}". Let me help you with that!\n\nThis is a great question that touches on important concepts. To give you the best answer:\n\n1. First, let's break down the core concept\n2. Then we'll look at practical applications\n3. Finally, I'll give you some practice problems\n\nCould you be more specific about which aspect you'd like me to focus on? This will help me provide the most relevant explanation for your needs.`;
    }
  };

  const handleSuggestionClick = (text: string) => {
    setInputValue(text);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-5xl mx-auto h-[calc(100vh-12rem)]">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">AI Mentor</h1>
          <p className="text-muted-foreground">Get instant help with your studies</p>
        </div>

        <Card className="flex-1 flex flex-col overflow-hidden glass dark:glass-dark p-0 border-white/10 shadow-xl">
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex gap-4 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${message.role === "user"
                    ? "bg-gradient-to-br from-accent to-[#10b981]"
                    : "bg-gradient-to-br from-primary to-secondary"
                    }`}>
                    {message.role === "user" ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div className={`flex-1 ${message.role === "user" ? "text-right" : "text-left"}`}>
                    <div className={`inline-block max-w-[80%] p-4 rounded-2xl shadow-sm ${message.role === "user"
                      ? "bg-gradient-to-br from-accent to-[#10b981] text-white rounded-tr-sm"
                      : "bg-white dark:bg-[#1e1e2e] border border-border/50 text-foreground rounded-tl-sm"
                      }`}>
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 px-2">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="inline-block p-4 rounded-2xl rounded-tl-sm bg-white dark:bg-[#1e1e2e] border border-border/50 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-6 pb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {suggestions.map((suggestion, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleSuggestionClick(suggestion.text)}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-white/10 hover:border-primary/50 text-left transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 text-white">
                      {suggestion.icon}
                    </div>
                    <span className="text-sm font-medium">{suggestion.text}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-border p-4">
            <div className="flex gap-3">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about your studies..."
                rows={1}
                className="flex-1 px-5 py-4 rounded-2xl bg-white dark:bg-[#1e1e2e] border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none resize-none shadow-inner custom-scrollbar"
              />
              <Button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="px-6"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              AI can make mistakes. Always verify important information.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
