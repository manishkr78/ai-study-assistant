import { Card } from "../components/Card";
import { StatCard } from "../components/StatCard";
import { TrendingUp, Target, Award, AlertCircle, TrendingDown } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const performanceData = [
  { week: "Week 1", score: 65 },
  { week: "Week 2", score: 72 },
  { week: "Week 3", score: 68 },
  { week: "Week 4", score: 78 },
  { week: "Week 5", score: 85 },
  { week: "Week 6", score: 88 },
];

const subjectData = [
  { subject: "Physics", score: 85, total: 100 },
  { subject: "Chemistry", score: 78, total: 100 },
  { subject: "Mathematics", score: 92, total: 100 },
  { subject: "Biology", score: 68, total: 100 },
];

const weakAreas = [
  { topic: "Thermodynamics", attempts: 5, avgScore: 45, status: "weak" },
  { topic: "Organic Chemistry", attempts: 8, avgScore: 62, status: "moderate" },
  { topic: "Calculus", attempts: 10, avgScore: 88, status: "strong" },
  { topic: "Cell Biology", attempts: 3, avgScore: 52, status: "weak" },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Performance Analytics</h1>
        <p className="text-muted-foreground">Track your progress and identify areas for improvement</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<TrendingUp className="w-6 h-6" />}
          label="Overall Progress"
          value="78%"
          trend="+12% this month"
          gradient="from-[#6366f1] to-[#8b5cf6]"
        />
        <StatCard
          icon={<Target className="w-6 h-6" />}
          label="Quizzes Completed"
          value="42"
          trend="+8 this week"
          gradient="from-[#22c55e] to-[#10b981]"
        />
        <StatCard
          icon={<Award className="w-6 h-6" />}
          label="Average Score"
          value="85%"
          trend="+5% improvement"
          gradient="from-[#f59e0b] to-[#f97316]"
        />
        <StatCard
          icon={<AlertCircle className="w-6 h-6" />}
          label="Weak Areas"
          value="2"
          trend="Need attention"
          gradient="from-[#ef4444] to-[#dc2626]"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-bold mb-6">Weekly Performance Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey="week" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(var(--background), 0.8)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  padding: "12px",
                  color: "var(--foreground)",
                }}
                itemStyle={{ color: "var(--foreground)" }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="url(#colorGradient)"
                strokeWidth={3}
                dot={{ fill: "#6366f1", r: 6 }}
                activeDot={{ r: 8 }}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 rounded-xl bg-accent/10 border border-accent/20">
            <div className="flex items-center gap-2 text-accent">
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">Great progress! Your scores are consistently improving.</span>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-bold mb-6">Subject-wise Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey="subject" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(var(--background), 0.8)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  padding: "12px",
                  color: "var(--foreground)",
                }}
                itemStyle={{ color: "var(--foreground)" }}
              />
              <Bar dataKey="score" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-3 rounded-xl bg-accent/10 text-center">
              <p className="text-sm text-muted-foreground mb-1">Strongest</p>
              <p className="font-bold text-accent">Mathematics (92%)</p>
            </div>
            <div className="p-3 rounded-xl bg-destructive/10 text-center">
              <p className="text-sm text-muted-foreground mb-1">Needs Focus</p>
              <p className="font-bold text-destructive">Biology (68%)</p>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <h2 className="text-xl font-bold mb-6">Topic-wise Analysis</h2>
        <div className="space-y-4">
          {weakAreas.map((area, index) => (
            <div key={index} className={`p-4 rounded-xl border transition-all hover:shadow-md ${
              area.status === "weak"
                ? "bg-destructive/5 border-destructive/20"
                : area.status === "moderate"
                ? "bg-[#f59e0b]/5 border-[#f59e0b]/20"
                : "bg-accent/5 border-accent/20"
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold">{area.topic}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      area.status === "weak"
                        ? "bg-destructive/20 text-destructive"
                        : area.status === "moderate"
                        ? "bg-[#f59e0b]/20 text-[#f59e0b]"
                        : "bg-accent/20 text-accent"
                    }`}>
                      {area.status === "weak" ? "⚠️ Weak" : area.status === "moderate" ? "📊 Moderate" : "✅ Strong"}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span>{area.attempts} attempts</span>
                    <span>Avg Score: {area.avgScore}%</span>
                  </div>
                </div>
                {area.status === "weak" ? (
                  <TrendingDown className="w-6 h-6 text-destructive" />
                ) : (
                  <TrendingUp className={`w-6 h-6 ${area.status === "strong" ? "text-accent" : "text-[#f59e0b]"}`} />
                )}
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    area.status === "weak"
                      ? "bg-gradient-to-r from-destructive to-[#dc2626]"
                      : area.status === "moderate"
                      ? "bg-gradient-to-r from-[#f59e0b] to-[#f97316]"
                      : "bg-gradient-to-r from-accent to-[#10b981]"
                  }`}
                  style={{ width: `${area.avgScore}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-[#6366f1]/10 to-[#8b5cf6]/10 border-primary/20">
        <h2 className="text-xl font-bold mb-4">AI Recommendations</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center flex-shrink-0">
              <span className="text-white">1</span>
            </div>
            <div>
              <p className="font-medium">Focus more on Thermodynamics concepts</p>
              <p className="text-sm text-muted-foreground">Your score is below 50%. Spend 2-3 hours daily on this topic.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center flex-shrink-0">
              <span className="text-white">2</span>
            </div>
            <div>
              <p className="font-medium">Practice more Biology questions</p>
              <p className="text-sm text-muted-foreground">Take at least 2 practice quizzes per day to improve your score.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center flex-shrink-0">
              <span className="text-white">3</span>
            </div>
            <div>
              <p className="font-medium">Great job in Mathematics!</p>
              <p className="text-sm text-muted-foreground">Maintain your current study pattern. Consider helping others to reinforce your knowledge.</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
