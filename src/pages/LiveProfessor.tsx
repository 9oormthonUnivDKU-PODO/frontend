import { useState } from "react"
import { ArrowLeft, Bell, Settings, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/Footer"

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
        answer:
            "교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용교수님내용",
    },
    {
        id: "2",
        user: "티키 01",
        timestamp: "2025.00.00 오전 00:00",
        question: "안녕하세요 교수님!\n방금 설명에서 예시로 나온 책 제목을 잘 번 더 말씀해 주실 수 있을까요?",
    },
    {
        id: "3",
        user: "티키 01",
        timestamp: "2025.00.00 오전 00:00",
        question: "안녕하세요 교수님!\n방금 설명에서 예시로 나온 책 제목을 잘 번 더 말씀해 주실 수 있을까요?",
    },
]

export default function QASystem() {
    const [qas, setQAs] = useState<QAItem[]>([])
    const [showWithQuestions, setShowWithQuestions] = useState(false)
    const [answerInput, setAnswerInput] = useState("")

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
        if (answerInput.trim()) {
            console.log("답변 전송:", answerInput)
            setAnswerInput("")
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-4 py-3">
                <div className="flex items-center justify-between max-w-4xl mx-auto">
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="p-1">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <h1 className="text-lg font-medium text-gray-900">커뮤니케이션디자인 1분반</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="p-2">
                            <Bell className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2">
                            <Settings className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-sm">
                            로그아웃
                        </Button>
                    </div>
                </div>
            </header>

            {/* Toggle Button for Demo */}
            <div className="max-w-4xl mx-auto p-4">
                <Button onClick={handleToggleView} className="mb-4">
                    {showWithQuestions ? "질문 없는 상태 보기" : "질문 있는 상태 보기"}
                </Button>
            </div>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 pb-24">
                {qas.length === 0 ? (
                    /* Empty State */
                    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                        <p className="text-xl text-gray-600 mb-8">아직 올라온 질문이 없어요 😶</p>
                    </div>
                ) : (
                    /* Questions and Answers */
                    <div className="space-y-6">
                        {qas.map((qa) => (
                            <div key={qa.id} className="space-y-4">
                                {/* Question */}
                                <div className="flex gap-3">
                                    <Avatar className="h-10 w-10 bg-gray-300">
                                        <AvatarFallback className="text-sm font-medium">{qa.user.slice(-2)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-medium text-gray-900">{qa.user}</span>
                                            <span className="text-sm text-gray-500">{qa.timestamp}</span>
                                        </div>
                                        <Card className="border border-gray-300">
                                            <CardContent className="p-4">
                                                <p className="text-gray-900 whitespace-pre-line">{qa.question}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                {/* Answer */}
                                {qa.answer && (
                                    <div className="ml-13 pl-3 border-l-2 border-gray-200">
                                        <div className="bg-gray-100 rounded-lg p-4">
                                            <p className="text-gray-900 leading-relaxed">{qa.answer}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* Bottom Input */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex gap-3">
                        <Input
                            value={answerInput}
                            onChange={(e) => setAnswerInput(e.target.value)}
                            placeholder={
                                qas.length === 0
                                    ? "답변을 입력해주세요"
                                    : "답변입력답변입력답변입력답변입력답변입력답변입력답변입력답변입력답변입력"
                            }
                            className="flex-1 rounded-full border-gray-300 px-4 py-3"
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    handleSendAnswer()
                                }
                            }}
                        />
                        <Button
                            onClick={handleSendAnswer}
                            size="sm"
                            className="rounded-full px-4 py-3"
                            disabled={!answerInput.trim()}
                        >
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
