import { useState } from "react";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Calendar, Clock, BookOpen, Target, Plus, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const studyPlan = [
  {
    id: 1,
    subject: "Physics",
    topic: "Thermodynamics - Laws & Applications",
    time: "9:00 AM - 10:30 AM",
    duration: "1h 30m",
    completed: true,
    color: "from-[#6366f1] to-[#8b5cf6]",
  },
  {
    id: 2,
    subject: "Chemistry",
    topic: "Organic Chemistry - Hydrocarbons",
    time: "11:00 AM - 12:30 PM",
    duration: "1h 30m",
    completed: false,
    color: "from-[#22c55e] to-[#10b981]",
  },
  {
    id: 3,
    subject: "Mathematics",
    topic: "Calculus - Integration Techniques",
    time: "2:00 PM - 3:30 PM",
    duration: "1h 30m",
    completed: false,
    color: "from-[#f59e0b] to-[#f97316]",
  },
  {
    id: 4,
    subject: "Biology",
    topic: "Cell Biology - Mitosis & Meiosis",
    time: "4:00 PM - 5:30 PM",
    duration: "1h 30m",
    completed: false,
    color: "from-[#8b5cf6] to-[#a855f7]",
  },
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const currentMonth = "April 2026";

const generateCalendarDays = () => {
  const days = [];
  for (let i = 1; i <= 30; i++) {
    days.push({
      day: i,
      hasTask: i % 3 === 0 || i % 5 === 0,
      isToday: i === 27,
    });
  }
  return days;
};

export default function StudyPlanner() {
  const [selectedDate, setSelectedDate] = useState(27);
  const calendarDays = generateCalendarDays();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Study Planner</h1>
          <p className="text-muted-foreground">AI-generated personalized study schedule</p>
        </div>
        <Button>
          <Plus className="w-5 h-5 mr-2" />
          Add Task
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">{currentMonth}</h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-xs text-muted-foreground font-medium py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((date) => (
                <button
                  key={date.day}
                  onClick={() => setSelectedDate(date.day)}
                  className={`aspect-square rounded-lg text-sm font-medium transition-all relative ${
                    date.isToday
                      ? "bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] text-white shadow-lg"
                      : selectedDate === date.day
                      ? "bg-primary/10 text-primary border-2 border-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  {date.day}
                  {date.hasTask && !date.isToday && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-[#6366f1]/10 to-[#8b5cf6]/10 border border-primary/20">
              <div className="flex items-center gap-2 text-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="font-medium">AI Optimized Schedule</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Your study plan is optimized based on your performance and learning patterns
              </p>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold">Today's Schedule</h2>
                <p className="text-sm text-muted-foreground">Monday, April 27, 2026</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted text-sm">
                <Clock className="w-4 h-4" />
                <span>6h scheduled</span>
              </div>
            </div>

            <div className="space-y-4">
              {studyPlan.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01, x: 5 }}
                  className={`relative overflow-hidden rounded-xl border transition-all hover:shadow-lg ${
                    task.completed ? "bg-muted/30 border-transparent opacity-75" : "bg-white dark:bg-[#1e1e2e] border-border/50"
                  }`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${task.color}`} />
                  <div className="p-4 pl-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${task.color} flex items-center justify-center`}>
                            <BookOpen className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold">{task.subject}</h3>
                            <p className="text-sm text-muted-foreground">{task.topic}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground ml-13">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {task.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <Target className="w-4 h-4" />
                            {task.duration}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {task.completed ? (
                          <div className="px-3 py-1.5 rounded-lg bg-accent/20 text-accent text-sm font-medium">
                            ✓ Completed
                          </div>
                        ) : (
                          <Button size="sm" variant="ghost">
                            Mark Done
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold mb-1">4</p>
              <p className="text-sm text-muted-foreground">Tasks Today</p>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#22c55e] to-[#10b981] flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold mb-1">6h</p>
              <p className="text-sm text-muted-foreground">Study Time</p>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#f97316] flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold mb-1">85%</p>
              <p className="text-sm text-muted-foreground">Weekly Goal</p>
            </Card>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} className="glass dark:glass-dark rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold mb-1 flex items-center gap-2">
                  AI Tip for Today
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Based on your performance, focus extra time on Thermodynamics. Take short breaks every 45 minutes for better retention.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
