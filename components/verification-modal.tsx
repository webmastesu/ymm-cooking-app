"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface VerificationModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void // Added onSuccess callback prop
}

const questions = [
  {
    question: "Myanmar လို့ အဖြေဘောက်ထဲမှာ Myanmar စာလုံးဖြင့်ရေးပါ",
    answer: "မြန်မာ",
  },
  {
    question: "ကြက်ကန်း___ ကျန်တဲ့ စကားပုံကိုရေးပါ",
    answer: "ဆန်အိုးတိုး",
  },
  {
    question: "ချိမ့်ကေကို ရဲ့ နာမည်ပြောင်ကို မြန်မာလိုရေးပါ",
    answer: "ငှက်ပျောသီး",
  },
  {
    question: "မြန်မာနိုင်ငံရဲ့ လွတ်လတ်ရေးရသည့် ခုနှစ်ကို မြန်မာလိုရေးပါ",
    answer: "၁၉၄၈",
  },
  {
    question: "ဘဝမှာ အချစ်ရဆုံးသူတစ်ယောက် နာမည်ရေးထည့်ပါ မြန်မာလို",
    answer: "special", // Special case - any Myanmar text is accepted
  },
]

export default function VerificationModal({ isOpen, onClose, onSuccess }: VerificationModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = () => {
    const question = questions[currentQuestion]
    let correct = false

    if (question.answer === "special") {
      // For question 5, accept any Myanmar text (check if contains Myanmar characters)
      const myanmarRegex = /[\u1000-\u109F\u1040-\u1049\uAA60-\uAA7F]/
      correct = myanmarRegex.test(userAnswer.trim()) && userAnswer.trim().length > 0
    } else {
      correct = userAnswer.trim() === question.answer
    }

    setIsCorrect(correct)
    setShowResult(true)

    if (correct) {
      setTimeout(() => {
        onSuccess?.()
        onClose()
        resetModal()
      }, 1500)
    } else {
      setTimeout(() => {
        setShowResult(false)
        setIsCorrect(null)
        setUserAnswer("")
      }, 2000)
    }
  }

  const resetModal = () => {
    setCurrentQuestion(Math.floor(Math.random() * questions.length))
    setUserAnswer("")
    setIsCorrect(null)
    setShowResult(false)
  }

  const handleClose = () => {
    onClose()
    resetModal()
  }

  // Set random question when modal opens
  if (isOpen && currentQuestion === 0 && !showResult) {
    setCurrentQuestion(Math.floor(Math.random() * questions.length))
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Human Verification</span>
            <Button variant="ghost" size="sm" onClick={handleClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {!showResult ? (
            <>
              <div className="text-sm text-muted-foreground">ကျေးဇူးပြု၍ အောက်ပါမေးခွန်းကို ဖြေကြားပါ</div>

              <div className="p-4 bg-muted rounded-lg">
                <p className="font-medium text-foreground">{questions[currentQuestion]?.question}</p>
              </div>

              <Input
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="အဖြေရေးထည့်ပါ..."
                className="w-full"
                onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
              />

              <Button onClick={handleSubmit} className="w-full" disabled={!userAnswer.trim()}>
                စစ်ဆေးမည်
              </Button>
            </>
          ) : (
            <div className="text-center py-8">
              {isCorrect ? (
                <div className="space-y-4">
                  <div className="text-green-600 text-lg font-semibold">✅ မှန်ကန်ပါသည်!</div>
                  <div className="text-sm text-muted-foreground">အောင်မြင်စွာ စစ်ဆေးပြီးပါပြီ...</div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-red-600 text-lg font-semibold">❌ မှားယွင်းပါသည်</div>
                  <div className="text-sm text-muted-foreground">ကျေးဇူးပြု၍ ထပ်မံကြိုးစားပါ...</div>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
