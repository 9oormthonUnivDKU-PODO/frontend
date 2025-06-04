import { useState } from "react"
import { Bell, Settings, MessageSquare, ChevronDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/Footer"

export default function Component() {
    const [selectedTab, setSelectedTab] = useState("전체")
    const [sortBy, setSortBy] = useState("일별 정렬")

    const questions = [
        {
            id: 1,
            content:
                "질문 내용: 질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용...",
            date: "2025.00.00",
            status: "미답변",
            answered: false,
        },
        {
            id: 2,
            content:
                "질문 내용: 질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용...",
            date: "2025.00.00",
            status: "답변 완료",
            answered: true,
        },
        {
            id: 3,
            content:
                "질문 내용: 질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용...",
            date: "2025.00.00",
            status: "답변 완료",
            answered: true,
        },
        {
            id: 4,
            content:
                "질문 내용: 질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용...",
            date: "2025.00.00",
            status: "미답변",
            answered: false,
        },
        {
            id: 5,
            content:
                "질문 내용: 질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용질문내용...",
            date: "2025.00.00",
            status: "답변 완료",
            answered: true,
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-end gap-4">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <Settings className="w-5 h-5 text-gray-600" />
                    <Button variant="outline" size="sm" className="text-gray-600">
                        로그아웃
                        <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-6 py-8">
                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500 mb-8">나의 강의 목록 {">"} 강의 이름 (강의실 이름)</nav>

                {/* Title Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">강의 이름</h1>
                    <p className="text-gray-600">학생들의 질문을 답변하고 관리해보세요.</p>
                </div>

                {/* Questions Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    {/* Section Header */}
                    <div className="px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center gap-2 mb-4">
                            <MessageSquare className="w-5 h-5 text-gray-600" />
                            <h2 className="text-lg font-semibold text-gray-900">질문 목록</h2>
                        </div>

                        {/* Filters and Sort */}
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                {["전체", "미답변", "답변 완료"].map((tab) => (
                                    <Button
                                        key={tab}
                                        variant={selectedTab === tab ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setSelectedTab(tab)}
                                        className={selectedTab === tab ? "bg-gray-800 text-white" : ""}
                                    >
                                        {tab}
                                    </Button>
                                ))}
                            </div>
                            <div className="flex gap-4 text-sm text-gray-600">
                                <button
                                    className={`${sortBy === "일별 정렬" ? "font-medium" : ""}`}
                                    onClick={() => setSortBy("일별 정렬")}
                                >
                                    일별 정렬
                                </button>
                                <button
                                    className={`${sortBy === "최신 신규" ? "font-medium" : ""}`}
                                    onClick={() => setSortBy("최신 신규")}
                                >
                                    최신 신규
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Questions List */}
                    <div className="divide-y divide-gray-200">
                        {questions.map((question) => (
                            <div key={question.id} className="px-6 py-4 flex items-center gap-4">
                                <Checkbox />
                                <div className="flex-1">
                                    <p className="text-gray-900 text-sm">{question.content}</p>
                                </div>
                                <div className="text-sm text-gray-500">{question.date}</div>
                                <Badge
                                    variant={question.answered ? "default" : "secondary"}
                                    className={question.answered ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"}
                                >
                                    {question.status}
                                </Badge>
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="px-6 py-4 text-center border-t border-gray-200">
                        <Button variant="outline" size="sm">
                            더보기
                            <ChevronDown className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
