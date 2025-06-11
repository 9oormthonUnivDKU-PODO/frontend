import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface QAItem {
    id: string
    user: string
    timestamp: string
    question: string
    answer?: string
    liked?: boolean
    likeCount?: number
    curious?: boolean
    curiousCount?: number

}

const sampleQAs: QAItem[] = [
    {
        id: "1",
        user: "티키 01",
        timestamp: "2025.00.00 오전 00:00",
        question: "안녕하세요 교수님!\n방금 설명에서 예시로 나온 책 제목을 잘 번 더 말씀해 주실 수 있을까요?",
        answer: "교수님내용...",
        liked: false,
        likeCount: 2,
        curious: false,
        curiousCount: 4,
    },

    {
        id: "2",
        user: "티키 01",
        timestamp: "2025.00.00 오전 00:00",
        question: "책 제목 다시 말씀해 주세요!",
        liked: false,
        likeCount: 0,
        curious: false,
        curiousCount: 4,
    },
    {
        id: "3",
        user: "티키 01",
        timestamp: "2025.00.00 오전 00:00",
        question: "수업 내용 중 예시 다시 설명해 주세요!",
        liked: false,
        likeCount: 0,
        curious: false,
        curiousCount: 4,
    },
]

export default function LiveProfessor() {
    const [qas, setQAs] = useState<QAItem[]>([])
    const [showWithQuestions, setShowWithQuestions] = useState(false)
    const [answerInput, setAnswerInput] = useState("")
    const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null)

    const handleToggleView = () => {
        if (showWithQuestions) {
            setQAs([])
            setShowWithQuestions(false)
        } else {
            setQAs(sampleQAs)
            setShowWithQuestions(true)
        }
    }

    const handleSelectQuestion = (id: string) => {
        setSelectedQuestionId((prev) => (prev === id ? null : id)) // 토글 형식
    }

    const handleToggleCurious = (id: string) => {
        setQAs(prev =>
            prev.map(qa =>
                qa.id === id
                    ? {
                        ...qa,
                        curious: !qa.curious,
                        curiousCount: qa.curious ? (qa.curiousCount || 0) - 1 : (qa.curiousCount || 0) + 1,
                    }
                    : qa
            )
        )
    }


    const handleToggleLike = (id: string) => {
        setQAs(prev =>
            prev.map(qa =>
                qa.id === id
                    ? {
                        ...qa,
                        liked: !qa.liked,
                        likeCount: qa.liked ? (qa.likeCount || 0) - 1 : (qa.likeCount || 0) + 1,
                    }
                    : qa
            )
        )
    }


    const handleSendAnswer = () => {
        if (!answerInput.trim() || !selectedQuestionId) return

        setQAs((prev) => prev.map((qa) => (qa.id === selectedQuestionId ? { ...qa, answer: answerInput } : qa)))
        setAnswerInput("")
        setSelectedQuestionId(null)
    }

    return (
        <div className="absolute top-0 left-0 w-full min-h-screen flex flex-col bg-[#F2F6F9]">
            <header className="bg-[#F2F6F9] px-8 py-4 w-full">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                    </div>

                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon">
                            <img src="/bellIcon.png" alt="bell" className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <img src="/settingIcon.png" alt="setting" className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" className="p-3 h-auto">
                            <img src="/logoutIcon.png" alt="logout" className="h-8 w-auto" />
                        </Button>
                    </div>

                </div>
            </header>


            <div className="w-full px-8 py-6">
                <Button onClick={handleToggleView} className="mb-4 px-6 py-2 text-base">
                    {showWithQuestions ? "질문 없는 상태 보기" : "질문 있는 상태 보기"}
                </Button>
            </div>

            <main className="w-full max-w-full flex-1">
                {qas.length === 0 ? (
                    <div className="flex flex-1 items-center justify-center text-center px-8">
                        <p className="text-2xl font-semibold text-gray-600">아직 올라온 질문이 없어요 🥲</p>
                    </div>

                ) : (
                    <div className="px-8">
                        <div className="space-y-8">
                            {qas.map((qa) => (
                                <div key={qa.id} className="space-y-4">
                                    {/* Question */}
                                    <div className="flex gap-4">
                                        <Avatar className="h-12 w-12 bg-gray-300 flex-shrink-0">
                                            <AvatarFallback className="text-base font-medium">{qa.user.slice(-2)}</AvatarFallback>
                                        </Avatar>
                                        <div className="custom-answer-input flex-1 min-w-0">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="font-medium text-gray-900 text-base">{qa.user}</span>
                                                <span className="text-sm text-gray-500">{qa.timestamp}</span>
                                            </div>
                                            <Card
                                                className={`group cursor-pointer ${selectedQuestionId === qa.id
                                                    ? 'border-[#3B6CFF] ring-1 ring-[#3B6CFF]'
                                                    : 'border border-gray-300'
                                                    }`}
                                                onClick={() => handleSelectQuestion(qa.id)}
                                            >
                                                <CardContent className="p-5 pb-3">
                                                    <p className="text-gray-900 whitespace-pre-line text-base leading-relaxed">
                                                        {qa.question}
                                                    </p>
                                                    <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                        <button
                                                            className="flex items-center gap-1 px-2 py-1 rounded-md bg-white border border-gray-300 shadow-sm hover:bg-blue-100 text-sm"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                handleToggleLike(qa.id)
                                                            }}
                                                        >
                                                            <img src="/likeIcon.png" alt="bell" className="h-6 w-6" />
                                                            {qa.likeCount ?? 0}
                                                        </button>

                                                        <button
                                                            className="flex items-center gap-1 px-2 py-1 rounded-md bg-white border border-gray-300 shadow-sm hover:bg-blue-100 text-sm"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                handleToggleCurious(qa.id)
                                                            }}
                                                        >
                                                            <img src="/wonderIcon.png" alt="curious" className="h-6 w-6" />
                                                            {qa.curiousCount ?? 0}
                                                        </button>
                                                    </div>
                                                </CardContent>
                                            </Card>

                                        </div>
                                    </div>

                                    {qa.answer && (//dkdk
                                        <div className="ml-16 pl-4 border-l-2 bg-white">
                                            <div className="rounded-lg p-5">
                                                <p className="text-gray-900 leading-relaxed text-base">{qa.answer}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            {selectedQuestionId && (
                <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6 px-8">
                    <div className="flex gap-4">
                        <Input
                            value={answerInput}
                            onChange={(e) => setAnswerInput(e.target.value)}
                            placeholder="답변을 입력해주세요"
                            className="custom-foc flex-1 rounded-full border border-gray-300 px-6 py-4 text-base"
                        />
                        <Button
                            variant="ghost"
                            onClick={handleSendAnswer}
                            disabled={!answerInput.trim()}
                        >
                            <img src="/sendIcon.png" alt="setting" className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}