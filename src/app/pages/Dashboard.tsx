import { motion } from "motion/react";
import { StatCard } from "../components/StatCard";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { AIBadge } from "../components/AIBadge";
import {
  TrendingUp,
  Target,
  BookOpen,
  Calendar,
  Clock,
  Award,
  ArrowRight,
  Flame,
  Lightbulb,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, Student! 👋</h1>
          <p className="text-muted-foreground">Here's your learning progress today</p>
        </div>
      </div>

      {/* AI Insight Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="glass dark:glass-dark rounded-2xl p-6 border-l-4 border-l-primary flex flex-col md:flex-row items-start md:items-center gap-4 shadow-lg shadow-primary/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold">AI Insight</h3>
              <AIBadge />
            </div>
            <p className="text-muted-foreground">
              You are struggling with <strong className="text-foreground">Physics: Thermodynamics</strong>. 
              We recommend reviewing the latest notes and taking a targeted quiz.
            </p>
          </div>
          <Button variant="primary" size="sm">
            Review Now
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<TrendingUp className="w-6 h-6" />}
          label="Overall Progress"
          value="78%"
          trend="+12% from last week"
          gradient="from-[#6366f1] to-[#8b5cf6]"
        />
        <StatCard
          icon={<Flame className="w-6 h-6" />}
          label="Study Streak"
          value="14 days"
          trend="Keep it up!"
          gradient="from-[#f59e0b] to-[#f97316]"
        />
        <StatCard
          icon={<Target className="w-6 h-6" />}
          label="Tests Taken"
          value="42"
          trend="+5 this week"
          gradient="from-[#22c55e] to-[#10b981]"
        />
        <StatCard
          icon={<Award className="w-6 h-6" />}
          label="Avg Score"
          value="85%"
          trend="+3% improvement"
          gradient="from-[#8b5cf6] to-[#a855f7]"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Today's Study Plan</h2>
            <Calendar className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            {[
              { subject: "Physics", topic: "Thermodynamics", time: "9:00 AM - 10:30 AM", status: "completed" },
              { subject: "Chemistry", topic: "Organic Chemistry", time: "11:00 AM - 12:30 PM", status: "in-progress" },
              { subject: "Mathematics", topic: "Calculus", time: "2:00 PM - 3:30 PM", status: "pending" },
              { subject: "Biology", topic: "Cell Biology", time: "4:00 PM - 5:30 PM", status: "pending" },
            ].map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-xl border transition-all ${
                  task.status === "completed"
                    ? "bg-accent/10 border-accent"
                    : task.status === "in-progress"
                    ? "bg-primary/10 border-primary"
                    : "bg-muted border-border hover:border-primary"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-2 h-2 rounded-full ${
                        task.status === "completed"
                          ? "bg-accent"
                          : task.status === "in-progress"
                          ? "bg-primary animate-pulse"
                          : "bg-muted-foreground"
                      }`} />
                      <span className="font-medium">{task.subject}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{task.topic}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {task.time}
                    </div>
                  </div>
                  {task.status === "completed" && (
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Activity</h2>
            <BookOpen className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            {[
              { action: "Completed Quiz", subject: "Physics - Kinematics", score: "9/10", time: "2 hours ago" },
              { action: "Generated Notes", subject: "Chemistry - Periodic Table", score: null, time: "5 hours ago" },
              { action: "Completed Quiz", subject: "Mathematics - Algebra", score: "8/10", time: "Yesterday" },
              { action: "AI Chat Session", subject: "Biology - Photosynthesis", score: null, time: "Yesterday" },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{activity.action}</p>
                  <p className="text-sm text-muted-foreground truncate">{activity.subject}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                {activity.score && (
                  <div className="text-sm font-medium text-accent">{activity.score}</div>
                )}
              </motion.div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card hover className="bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] text-white border-0">
          <BookOpen className="w-12 h-12 mb-4 opacity-80" />
          <h3 className="text-xl font-bold mb-2">Generate Notes</h3>
          <p className="text-white/80 mb-4">Create AI-powered notes instantly</p>
          <Button variant="ghost" className="bg-white/20 text-white border-white/20 hover:bg-white/30">
            Start Now <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Card>

        <Card hover className="bg-gradient-to-br from-[#8b5cf6] to-[#a855f7] text-white border-0">
          <Target className="w-12 h-12 mb-4 opacity-80" />
          <h3 className="text-xl font-bold mb-2">Take a Quiz</h3>
          <p className="text-white/80 mb-4">Test your knowledge with AI quizzes</p>
          <Button variant="ghost" className="bg-white/20 text-white border-white/20 hover:bg-white/30">
            Start Now <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Card>

        <Card hover className="bg-gradient-to-br from-[#22c55e] to-[#10b981] text-white border-0">
          <Calendar className="w-12 h-12 mb-4 opacity-80" />
          <h3 className="text-xl font-bold mb-2">Study Planner</h3>
          <p className="text-white/80 mb-4">Get your personalized study plan</p>
          <Button variant="ghost" className="bg-white/20 text-white border-white/20 hover:bg-white/30">
            Start Now <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
