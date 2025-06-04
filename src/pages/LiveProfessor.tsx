import { useState } from "react"
import { ArrowLeft, Bell, Settings, Send } from "lucide-react"
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
}

const sampleQAs: QAItem[] = [
    {
        id: "1",
        user: "티키 01",
        timestamp: "2025.00.00 오전 00:00",
        question: "안녕하세요 교수님!\n방금 설명에서 예시로 나온 책 제목을 잘 번 더 말씀해 주실 수 있을까요?",
        answer: "교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용",
    },
    {
        id: "2",
        user: "티키 01",
        timestamp: "2025.00.00 오전 00:00",
        question: "책 제목 다시 말씀해 주세요!",
    },
    {
        id: "3",
        user: "티키 01",
        timestamp: "2025.00.00 오전 00:00",
        question: "수업 내용 중 예시 다시 설명해 주세요!",
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

    const handleSendAnswer = () => {
        if (!answerInput.trim() || !selectedQuestionId) return

        setQAs((prev) => prev.map((qa) => (qa.id === selectedQuestionId ? { ...qa, answer: answerInput } : qa)))
        setAnswerInput("")
        setSelectedQuestionId(null)
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-8 py-4 w-full">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="p-2">
                            <ArrowLeft className="h-6 w-6" />
                        </Button>
                        <h1 className="text-xl font-medium text-gray-900">커뮤니케이션디자인 1분반</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="p-2">
                            <Bell className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2">
                            <Settings className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-base px-4">
                            로그아웃
                        </Button>
                    </div>
                </div>
            </header>

            {/* Toggle Button */}
            <div className="w-full px-8 py-6">
                <Button onClick={handleToggleView} className="mb-4 px-6 py-2 text-base">
                    {showWithQuestions ? "질문 없는 상태 보기" : "질문 있는 상태 보기"}
                </Button>
            </div>

            {/* Main Content */}
            <main className="flex-grow w-full px-8 pb-32">
                {qas.length === 0 ? (
                    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                        <p className="text-2xl text-gray-600 mb-8">아직 올라온 질문이 없어요 😶</p>
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {qas.map((qa) => (
                                <div key={qa.id} className="space-y-4">
                                    {/* Question */}
                                    <div className="flex gap-4">
                                        <Avatar className="h-12 w-12 bg-gray-300 flex-shrink-0">
                                            <AvatarFallback className="text-base font-medium">{qa.user.slice(-2)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="font-medium text-gray-900 text-base">{qa.user}</span>
                                                <span className="text-sm text-gray-500">{qa.timestamp}</span>
                                            </div>
                                            <Card className="border border-gray-300">
                                                <CardContent className="p-5">
                                                    <p className="text-gray-900 whitespace-pre-line text-base leading-relaxed">{qa.question}</p>
                                                </CardContent>
                                            </Card>
                                            {!qa.answer && (
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="mt-3 px-4 py-2"
                                                    onClick={() => setSelectedQuestionId(qa.id)}
                                                >
                                                    답변 달기
                                                </Button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Answer */}
                                    {qa.answer && (
                                        <div className="ml-16 pl-4 border-l-2 border-gray-200">
                                            <div className="bg-gray-100 rounded-lg p-5">
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

            {/* Bottom Input */}
            {selectedQuestionId && (
                <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex gap-4">
                            <Input
                                value={answerInput}
                                onChange={(e) => setAnswerInput(e.target.value)}
                                placeholder="선택한 질문에 대한 답변을 입력해주세요"
                                className="flex-1 rounded-full border-gray-300 px-6 py-4 text-base"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSendAnswer()
                                }}
                            />
                            <Button
                                onClick={handleSendAnswer}
                                size="sm"
                                className="rounded-full px-6 py-4"
                                disabled={!answerInput.trim()}
                            >
                                <Send className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
