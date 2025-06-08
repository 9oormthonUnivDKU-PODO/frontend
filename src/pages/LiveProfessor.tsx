import { useState } from "react"
import { Send } from "lucide-react"
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
        <div className="absolute top-0 left-0 w-full min-h-screen flex flex-col bg-[#F2F6F9]">
            {/* Header */}
            <header className="bg-[#F2F6F9] px-8 py-4 w-full">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                    </div>

                    {/* 오른쪽 버튼들 */}
                    <div className="flex items-center gap-1"> {/* gap을 조금 줄여도 좋습니다. */}
                        <Button variant="ghost" size="icon">
                            <img src="/bellIcon.png" alt="bell" className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <img src="/settingIcon.png" alt="setting" className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" className="p-3 h-auto"> {/* 로그아웃은 아이콘 크기가 다르므로 size="icon" 대신 직접 스타일링 */}
                            <img src="/logoutIcon.png" alt="logout" className="h-8 w-auto" />
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
            <main className="w-full max-w-full flex-1"> {/* flex-1 추가로 내용이 적을 때도 하단 입력창이 밀리지 않도록 함 */}
                {qas.length === 0 ? (
                    <div className="flex flex-1 items-center justify-center text-center px-8">
                        <p className="text-2xl font-semibold text-gray-600">아직 올라온 질문이 없어요 🥲</p>
                    </div>

                ) : (
                    // --- 변경점 1 ---
                    // max-w-4xl mx-auto 클래스를 제거하고 헤더와 동일한 좌우 여백(px-8)을 적용합니다.
                    <div className="px-8">
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
                                                    variant="default"
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
                // --- 변경점 2 ---
                // 하단 입력창의 컨테이너에서도 max-w-4xl mx-auto를 제거하여 전체 너비를 사용하도록 합니다.
                // 부모에 padding이 있으므로 내부 컨테이너는 필요 없습니다.
                <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6 px-8"> {/* px-8 추가 */}
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
            )}
        </div>
    )
}