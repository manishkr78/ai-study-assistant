import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Target, Clock, Trophy, CheckCircle, XCircle, Sparkles } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Which law states F = ma?",
    options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "O2", "H2O2"],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "What is the speed of light in vacuum?",
    options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁹ m/s", "3 × 10⁷ m/s"],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "Which organ is responsible for pumping blood?",
    options: ["Liver", "Kidney", "Heart", "Brain"],
    correctAnswer: 2,
  },
];

export default function Quiz() {
  const [topic, setTopic] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (quizStarted && !showResults && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !showResults) {
      handleSubmit();
    }
  }, [quizStarted, showResults, timeLeft]);

  const handleStartQuiz = () => {
    if (topic) {
      setQuizStarted(true);
      setTimeLeft(300);
    }
  };

  const handleSelectAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    sampleQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (!quizStarted) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">AI Quiz Generator</h1>
          <p className="text-muted-foreground">Test your knowledge with AI-generated quizzes</p>
        </div>

        <Card>
          <div className="space-y-6">
            <Input
              label="Enter Topic or Subject"
              placeholder="e.g., Physics - Thermodynamics, Chemistry - Periodic Table..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              icon={<Target className="w-5 h-5" />}
            />

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-muted/50 text-center">
                <p className="text-2xl font-bold text-primary mb-1">5</p>
                <p className="text-sm text-muted-foreground">Questions</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 text-center">
                <p className="text-2xl font-bold text-primary mb-1">5:00</p>
                <p className="text-sm text-muted-foreground">Duration</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 text-center">
                <p className="text-2xl font-bold text-primary mb-1">MCQ</p>
                <p className="text-sm text-muted-foreground">Question Type</p>
              </div>
            </div>

            <Button onClick={handleStartQuiz} disabled={!topic} className="w-full" size="lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Start Quiz
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / sampleQuestions.length) * 100;

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" className="text-muted/30" strokeWidth="8" />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 283" }}
                  animate={{ strokeDasharray: `${(percentage / 100) * 283} 283` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <Trophy className="w-8 h-8 text-primary mb-1" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2">Quiz Completed!</h1>
            <p className="text-muted-foreground mb-8">Here are your results</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <p className="text-5xl font-bold text-primary mb-2">{score}/{sampleQuestions.length}</p>
                <p className="text-muted-foreground">Correct Answers</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">{percentage}%</p>
                <p className="text-muted-foreground">Score</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">{formatTime(300 - timeLeft)}</p>
                <p className="text-muted-foreground">Time Taken</p>
              </div>
            </div>

            <div className={`inline-block px-6 py-3 rounded-2xl mb-8 ${
              percentage >= 80 ? "bg-accent/20 text-accent" :
              percentage >= 60 ? "bg-[#f59e0b]/20 text-[#f59e0b]" :
              "bg-destructive/20 text-destructive"
            }`}>
              {percentage >= 80 ? "🎉 Excellent!" : percentage >= 60 ? "👍 Good Job!" : "📚 Keep Practicing!"}
            </div>
          </Card>
        </motion.div>

        <Card>
          <h2 className="text-xl font-bold mb-6">Answer Review</h2>
          <div className="space-y-4">
            {sampleQuestions.map((question, index) => {
              const isCorrect = selectedAnswers[index] === question.correctAnswer;
              return (
                <div key={question.id} className={`p-4 rounded-xl border ${
                  isCorrect ? "bg-accent/10 border-accent" : "bg-destructive/10 border-destructive"
                }`}>
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium mb-3">Q{index + 1}. {question.question}</p>
                      <div className="space-y-2">
                        {question.options.map((option, optIndex) => (
                          <div
                            key={optIndex}
                            className={`p-3 rounded-lg text-sm ${
                              optIndex === question.correctAnswer
                                ? "bg-accent/20 border border-accent"
                                : optIndex === selectedAnswers[index] && !isCorrect
                                ? "bg-destructive/20 border border-destructive"
                                : "bg-muted/30"
                            }`}
                          >
                            {option}
                            {optIndex === question.correctAnswer && (
                              <span className="ml-2 text-accent text-xs">✓ Correct Answer</span>
                            )}
                            {optIndex === selectedAnswers[index] && !isCorrect && (
                              <span className="ml-2 text-destructive text-xs">✗ Your Answer</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <div className="flex gap-4">
          <Button onClick={() => {
            setQuizStarted(false);
            setCurrentQuestion(0);
            setSelectedAnswers([]);
            setShowResults(false);
            setTopic("");
          }} className="flex-1">
            Take Another Quiz
          </Button>
        </div>
      </div>
    );
  }

  const question = sampleQuestions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-sm flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Question {currentQuestion + 1} of {sampleQuestions.length}</h1>
          <p className="text-sm text-muted-foreground">{topic}</p>
        </div>
        <motion.div 
          animate={timeLeft <= 60 ? { scale: [1, 1.05, 1], color: ["#ef4444", "#dc2626", "#ef4444"] } : {}}
          transition={{ duration: 1, repeat: timeLeft <= 60 ? Infinity : 0 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl ${timeLeft <= 60 ? 'bg-destructive/10' : 'bg-primary/10 text-primary'}`}
        >
          <Clock className="w-5 h-5" />
          <span className="font-mono font-bold text-lg">{formatTime(timeLeft)}</span>
        </motion.div>
      </div>

      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
        />
      </div>

      <Card>
        <h2 className="text-xl font-medium mb-6">{question.question}</h2>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.01, x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelectAnswer(index)}
              className={`w-full p-4 rounded-xl text-left transition-all border ${
                selectedAnswers[currentQuestion] === index
                  ? "bg-gradient-to-r from-primary/10 to-secondary/10 border-primary shadow-md"
                  : "bg-muted/50 hover:bg-muted border-transparent hover:border-border"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswers[currentQuestion] === index
                    ? "border-white bg-white"
                    : "border-muted-foreground"
                }`}>
                  {selectedAnswers[currentQuestion] === index && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-3 h-3 rounded-full bg-primary" />
                  )}
                </div>
                <span className={selectedAnswers[currentQuestion] === index ? "font-medium text-foreground" : ""}>{option}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </Card>

      <div className="flex gap-4">
        <Button
          variant="ghost"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        <div className="flex-1" />
        {currentQuestion < sampleQuestions.length - 1 ? (
          <Button onClick={handleNext} disabled={selectedAnswers[currentQuestion] === undefined}>
            Next
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={selectedAnswers[currentQuestion] === undefined}>
            Submit Quiz
          </Button>
        )}
      </div>

      <Card className="bg-muted/30">
        <div className="flex gap-2 flex-wrap">
          {sampleQuestions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-10 h-10 rounded-lg font-medium transition-all ${
                index === currentQuestion
                  ? "bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] text-white"
                  : selectedAnswers[index] !== undefined
                  ? "bg-accent text-white"
                  : "bg-background border border-border"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
