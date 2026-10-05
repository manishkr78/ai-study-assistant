import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import {
  Brain,
  BookOpen,
  Target,
  TrendingUp,
  Calendar,
  MessageSquare,
  Star,
  Check,
  Sparkles,
  Zap,
  Award,
  Users,
} from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#ede9fe] dark:from-[#0f0f1e] dark:via-[#1e1b4b] dark:to-[#312e81] relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px]"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-[#0f0f1e]/80 backdrop-blur-lg border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
              AI Study Assistant
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button onClick={() => navigate("/signup")}>Get Started</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Powered by Advanced AI</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent leading-tight">
              Your Personal AI
              <br />
              Study Partner
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Generate notes, create quizzes, plan your studies, and get personalized AI mentoring. Everything you need to excel in your academics.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => navigate("/signup")}>
                Get Started Free
                <Zap className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="ghost">
                Try Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 relative mx-auto max-w-5xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-20" />
            <div className="relative glass dark:glass-dark rounded-3xl border border-white/20 shadow-2xl overflow-hidden flex flex-col md:flex-row">
              {/* Dashboard Preview Left Nav */}
              <div className="hidden md:block w-48 bg-black/5 dark:bg-white/5 border-r border-white/10 p-4">
                <div className="w-8 h-8 rounded bg-primary/20 mb-8" />
                <div className="space-y-3">
                  <div className="h-4 w-full bg-black/10 dark:bg-white/10 rounded" />
                  <div className="h-4 w-3/4 bg-black/10 dark:bg-white/10 rounded" />
                  <div className="h-4 w-5/6 bg-black/10 dark:bg-white/10 rounded" />
                </div>
              </div>
              {/* Dashboard Preview Content */}
              <div className="flex-1 p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="h-6 w-1/3 bg-black/10 dark:bg-white/10 rounded" />
                  <div className="h-8 w-24 bg-primary/20 rounded-full" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i} 
                      className="h-24 glass dark:glass-dark rounded-xl p-4 flex flex-col justify-between"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20" />
                      <div className="h-3 w-1/2 bg-black/10 dark:bg-white/10 rounded" />
                    </motion.div>
                  ))}
                </div>
                <div className="h-40 glass dark:glass-dark rounded-xl p-4 flex items-center justify-center">
                  {/* Recharts placeholder mockup */}
                  <div className="w-full h-full flex items-end gap-2 px-4">
                    {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                      <motion.div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t-sm"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats below dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 relative z-10">
              <motion.div whileHover={{ y: -5 }}>
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">50K+</p>
                <p className="text-sm text-muted-foreground">Active Students</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }}>
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">1M+</p>
                <p className="text-sm text-muted-foreground">Notes Generated</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }}>
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">98%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }}>
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">4.9★</p>
                <p className="text-sm text-muted-foreground">User Rating</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground">Everything you need to ace your exams</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "AI Notes Generator",
                description: "Transform any topic into comprehensive, well-structured notes instantly",
                gradient: "from-[#6366f1] to-[#8b5cf6]",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Smart Quiz Generator",
                description: "Practice with AI-generated MCQs tailored to your syllabus",
                gradient: "from-[#8b5cf6] to-[#a855f7]",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Study Planner",
                description: "Get personalized study schedules optimized for your learning pace",
                gradient: "from-[#22c55e] to-[#10b981]",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Performance Analytics",
                description: "Track your progress and identify weak areas with detailed insights",
                gradient: "from-[#f59e0b] to-[#f97316]",
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "AI Mentor Chat",
                description: "Get instant answers and explanations from your AI study buddy",
                gradient: "from-[#6366f1] to-[#8b5cf6]",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Weak Area Detection",
                description: "AI identifies topics you struggle with and creates focused practice",
                gradient: "from-[#ec4899] to-[#d946ef]",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/50 dark:bg-[#1e1e2e]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Students Say</h2>
            <p className="text-lg text-muted-foreground">Trusted by thousands of students across India</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "JEE Aspirant",
                content: "This AI assistant helped me improve my Physics score by 40%! The personalized study plans are incredible.",
                rating: 5,
              },
              {
                name: "Rahul Verma",
                role: "Medical Student",
                content: "The AI notes feature saved me hours of study time. I can now focus on understanding rather than note-making.",
                rating: 5,
              },
              {
                name: "Ananya Patel",
                role: "CA Student",
                content: "The quiz generator is amazing! It helped me identify my weak areas and practice specifically on them.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-lg text-muted-foreground">Choose the plan that fits your needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card hover>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="text-5xl font-bold mb-6">₹0<span className="text-lg text-muted-foreground">/month</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  {[
                    "10 AI Notes per month",
                    "20 Quiz questions per day",
                    "Basic study planner",
                    "Limited AI mentor chat",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full" onClick={() => navigate("/signup")}>
                  Get Started
                </Button>
              </div>
            </Card>
            <Card hover className="border-2 border-primary relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white px-3 py-1 rounded-full text-sm">
                Popular
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <div className="text-5xl font-bold mb-6">₹299<span className="text-lg text-muted-foreground">/month</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  {[
                    "Unlimited AI Notes",
                    "Unlimited Quiz questions",
                    "Advanced study planner with AI optimization",
                    "Unlimited AI mentor chat",
                    "Performance analytics",
                    "Weak area detection",
                    "PDF export",
                    "Priority support",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" onClick={() => navigate("/signup")}>
                  Upgrade to Premium
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-white/50 dark:bg-[#1e1e2e]/50 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">AI Study Assistant</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering Indian students with AI-powered learning tools.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2026 AI Study Assistant. Made with ❤️ for Indian Students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
