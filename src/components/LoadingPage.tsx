import React from "react";
import logo from "./logo.png";
import bellIcon from "./bellIcon.png";
import settingIcon from "./settingIcon.png";
import logoutIcon from "./logoutIcon.png";

const LoadingPage = () => {
  return (
<div className="min-h-screen bg-[#F5F9FC]">
  {/* 헤더 */}
  <header
  className="w-full h-[72px] flex items-center justify-between px-6"
  style={{ backgroundColor: "#F2F6F9" }}
>
  {/* 좌측 로고 버튼 */}
  <button onClick={() => console.log("로고 클릭")} className="flex items-center gap-1 px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-200"
  style={{ backgroundColor: '#F2F6F9', border: 'none' }}
>

    <img src={logo} alt="티키타카 로고" className="h-5" />
  </button>

  {/* 우측 아이콘 */}
  <div className="flex items-center gap-4">
    {/* 알림 아이콘 버튼 */}
    <button onClick={() => console.log("알림 클릭")} className="flex items-center gap-1 px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-200"
  style={{ backgroundColor: '#F2F6F9', border: 'none' }}
>
      <img src={bellIcon} alt="알림 아이콘" className="w-5 h-5" />
    </button>

    {/* 설정 아이콘 버튼 */}
    <button onClick={() => console.log("설정 클릭")} className="flex items-center gap-1 px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-200"
  style={{ backgroundColor: '#F2F6F9', border: 'none' }}
>
      <img src={settingIcon} alt="설정 아이콘" className="w-5 h-5" />
    </button>

    {/* 로그아웃 버튼 */}
    <button onClick={() => console.log("로그아웃 클릭")} className="flex items-center gap-1 px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-200"
  style={{ backgroundColor: '#F2F6F9', border: 'none' }}
>
      <img src={logoutIcon} alt="로그아웃 아이콘" className="w-4 h-4" />
    </button>
  </div>
</header>



      {/* 본문 */}
      <main className="flex flex-col items-center justify-center h-[calc(100vh-72px)] pt-4">
  <p className="text-[#202325] text-lg font-semibold mb-3">
    실시간 질문 페이지로 이동 중..
  </p>

  {/* 로딩 스피너 */}
  <div className="relative w-10 h-10 mt-8">
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="dot"
        style={{
          animation: 'orbit 1.8s linear infinite',
          animationDelay: `${i * 0.15}s`,
          transform: `rotate(${i * 45}deg) translateX(20px) rotate(-${i * 45}deg)`,
          transformOrigin: 'center center',
        }}
      />
    ))}
  </div>
</main>

    </div>
  );
};

export default LoadingPage;
