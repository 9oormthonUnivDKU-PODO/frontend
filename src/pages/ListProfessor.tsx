import { Bell, Settings, Search, Calendar, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-5 h-5 text-gray-600" />
          <Settings className="w-5 h-5 text-gray-600" />
          <Button variant="outline" size="sm">
            로그인
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">나의 강의 리스트</h1>
          <p className="text-gray-600">담당 혹은 강의를 확인하고 질문을 관리해보세요.</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Input
            type="text"
            placeholder="강의명을 입력하세요"
            className="w-full max-w-md mx-auto block pl-4 pr-10 py-3 rounded-full border-gray-300"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        {/* Today's Lectures */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold">오늘 강의 (2025.00.00)</h2>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span>질문 대기중</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                <span>질문 보류</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                <span>질문 작성</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 shadow-sm border flex items-center justify-between">
              <span className="text-gray-700">수업 이름 (강의실 이름)</span>
              <Button size="sm" className="bg-gray-600 hover:bg-gray-700">
                강의
              </Button>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border flex items-center justify-between">
              <span className="text-gray-700">수업 이름 (강의실 이름)</span>
              <Button size="sm" className="bg-gray-600 hover:bg-gray-700">
                강의
              </Button>
            </div>
          </div>
        </section>

        {/* All Lectures */}
        <section>
          <div className="flex items-center space-x-2 mb-4">
            <Calendar className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold">전체 강의</h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-2 mb-6">
            <Button variant="default" size="sm" className="bg-gray-600 hover:bg-gray-700">
              최신 등록 순
            </Button>
            <Button variant="outline" size="sm">
              질문 많은 순
            </Button>
            <Button variant="outline" size="sm">
              이름 순 (가나다)
            </Button>
          </div>

          {/* Lecture List */}
          <div className="space-y-3 mb-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border flex items-center justify-between">
                <span className="text-gray-700">수업 이름 (강의실 이름)</span>
                <Button size="sm" className="bg-gray-600 hover:bg-gray-700">
                  강의
                </Button>
              </div>
            ))}
          </div>

          {/* More Button */}
          <div className="text-center">
            <Button variant="outline" className="flex items-center space-x-2">
              <span>더보기</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 mt-16 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center space-x-8 text-sm text-gray-600 mb-4">
            <a href="#" className="hover:text-gray-800">
              이용약관
            </a>
            <a href="#" className="hover:text-gray-800">
              운영정책
            </a>
            <a href="#" className="hover:text-gray-800">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-gray-800">
              문의하기
            </a>
          </div>
          <div className="text-center text-xs text-gray-500">© 2025 Dankook University made by 컴퓨터과</div>
        </div>
      </footer>
    </div>
  )
}
