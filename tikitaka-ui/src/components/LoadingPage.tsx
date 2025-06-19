import React from "react";
import logo from "./logo.png";
import bellIcon from "./bellIcon.png";
import settingIcon from "./settingIcon.png";
import logoutIcon from "./logoutIcon.png";

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F6F9]">
      {/* 헤더 */}
      <header className="w-full h-[72px] flex items-center justify-between px-6" style={{ backgroundColor: "#B1BAC1" }}>
        {/* 좌측 로고 */}
        <img src={logo} alt="티키타카 로고" className="h-5" />

        {/* 우측 아이콘 */}
        <div className="flex items-center gap-4">
          <img src={bellIcon} alt="알림 아이콘" className="w-5 h-5" />
          <img src={settingIcon} alt="설정 아이콘" className="w-5 h-5" />
          <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md bg-white text-sm font-semibold hover:bg-gray-100">
            로그아웃
            <img src={logoutIcon} alt="로그아웃 아이콘" className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* 본문 */}
      <main className="flex flex-col items-center justify-center h-[calc(100vh-72px)]">
        <p className="text-[#202325] text-lg font-semibold mb-4">실시간 질문 페이지로 이동 중..</p>
        <div className="w-8 h-8 border-4 border-gray-300 border-t-[#333] rounded-full animate-spin"></div>
      </main>
    </div>
  );
};

export default LoadingPage;
