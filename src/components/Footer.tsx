export default function Footer() {
    return (
        <footer className="bg-gray-200 py-10 mt-auto w-full">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-center space-x-12 text-base text-gray-600 mb-6">
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
                <div className="text-center text-sm text-gray-500">© 2025 Dankook University made by 컴퓨터과</div>
            </div>
        </footer>
    )
}

