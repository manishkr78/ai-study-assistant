import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { LoadingAI } from "../components/LoadingAI";
import { AIBadge } from "../components/AIBadge";
import { Sparkles, Download, Copy, BookOpen, Loader2 } from "lucide-react";

export default function NotesGenerator() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState<string | null>(null);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setNotes(`# ${topic}

## Introduction
${topic} is a fundamental concept that plays a crucial role in understanding advanced topics. This comprehensive guide will help you master the key aspects.

## Key Concepts

### 1. Basic Principles
- **Definition**: ${topic} refers to the systematic study and application of core principles
- **Importance**: Essential for building strong foundational knowledge
- **Applications**: Used extensively in real-world scenarios

### 2. Important Formulas & Equations
\`\`\`
E = mc²
F = ma
\`\`\`

### 3. Core Components
1. **Component A**: Primary building block that establishes the framework
2. **Component B**: Secondary element that supports main operations
3. **Component C**: Advanced feature for complex implementations

## Detailed Explanation

The fundamental approach to ${topic} involves understanding the relationship between various elements. When we examine the core principles, we can identify three main areas:

- **Theoretical Framework**: The conceptual basis that guides implementation
- **Practical Applications**: Real-world use cases and examples
- **Problem-Solving Techniques**: Methods to approach complex scenarios

## Important Points to Remember

⚡ **Key Takeaway 1**: Always start with fundamentals before moving to advanced concepts
⚡ **Key Takeaway 2**: Practice is essential for mastery
⚡ **Key Takeaway 3**: Understanding the 'why' is as important as the 'how'

## Common Mistakes to Avoid
- Skipping foundational concepts
- Not practicing enough examples
- Memorizing without understanding

## Practice Questions
1. Explain the basic principle of ${topic}
2. What are the key applications in real-world scenarios?
3. How does this concept relate to other topics?

## Conclusion
Mastering ${topic} requires consistent practice and deep understanding. Use this guide as a reference and supplement it with additional practice problems.`);
      setLoading(false);
    }, 2000);
  };

  const handleCopy = () => {
    if (notes) {
      navigator.clipboard.writeText(notes);
      alert("Notes copied to clipboard!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">AI Notes Generator</h1>
        <p className="text-muted-foreground">Generate comprehensive notes on any topic instantly</p>
      </div>

      <Card>
        <div className="space-y-4">
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <Input
                label="Enter Topic or Syllabus"
                placeholder="e.g., Photosynthesis, Newton's Laws of Motion, Organic Chemistry..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                icon={<BookOpen className="w-5 h-5" />}
              />
            </div>
            <div className="md:pt-7">
              <Button
                onClick={handleGenerate}
                disabled={!topic || loading}
                className="w-full md:w-auto"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Notes
                  </>
                )}
              </Button>
            </div>
          </div>

          {loading && (
            <LoadingAI />
          )}
        </div>
      </Card>

      {notes && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold">Generated Notes</h2>
                <AIBadge />
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={handleCopy}>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
                <Button size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <div className="bg-white/50 dark:bg-black/20 rounded-xl p-8 space-y-4 whitespace-pre-wrap font-sans text-base leading-relaxed border border-white/10 shadow-inner">
                {notes}
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {!notes && !loading && (
        <Card className="border-dashed">
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center opacity-20">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-medium mb-2">No notes generated yet</h3>
            <p className="text-muted-foreground">Enter a topic above and click Generate to create AI-powered notes</p>
          </div>
        </Card>
      )}

      <Card className="bg-gradient-to-br from-[#6366f1]/10 to-[#8b5cf6]/10 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold mb-1">Pro Tip</h3>
            <p className="text-sm text-muted-foreground">
              Be specific with your topic for better results. Instead of "Physics", try "Newton's Laws of Motion" or "Thermodynamics - First Law"
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
