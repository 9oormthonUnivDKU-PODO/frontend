import React, { useState } from "react";
import logo from "./logo.png";
import bellIcon from "./bellIcon.png";
import settingIcon from "./settingIcon.png";
import logoutIcon from "./logoutIcon.png";
import archiveIcon from './archive_icon.png';
import calendarIcon from './calendar_icon.png';

const FILTERS = ["질문 많음", "질문 보통", "질문 적음"];

const LectureListPage = () => {
const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

const SortButtons = () => {
  const [selected, setSelected] = useState("최신 등록 순");

  const getButtonClass = (label: string) => {
    const isSelected = selected === label;

    return `
      px-3 py-1.5 text-sm rounded-[6px] font-medium
      ${isSelected ? "bg-[#646B72] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#323639] hover:bg-[#E9EEF2]"}
      transition-colors duration-200
    `;
  };

  return (
    <div className="flex gap-2 justify-start">
  {["최신 등록 순", "질문 많은 순", "이름 순 (가나다)"].map((label) => {
    const isSelected = selected === label;

    return (
  <button
    key={label}
    onClick={() => setSelected(label)}
    className={`
      px-3 py-1.5 text-sm rounded-[6px] font-medium 
      ${isSelected
        ? "bg-[#646B72] text-[#FFFFFF]"
        : "bg-[#F5F9FC] text-[#323639] hover:bg-[#E9EEF2] hover:text-[#323639]"}
      transition-colors duration-200
    `}
    style={{
      border: "0.5px solid #B1BAC1",
      boxShadow: "none"
    }}
  >
    {label}
  </button>
);

  })}
</div>

  );
};

  return (
    <div className="min-h-screen bg-[#F5F9FC]">
      {/* ✅ 헤더 */}
      <header
        className="w-full h-[72px] flex items-center justify-between px-6"
        style={{ backgroundColor: "#F2F6F9" }}
      >
        <button
          onClick={() => console.log("로고 클릭")}
          className="flex items-center gap-1 px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-200-cursor-pointer"
          style={{ backgroundColor: "#F2F6F9", border: "none" }}
        >
          <img src={logo} alt="티키타카 로고" className="h-5" />
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={() => console.log("알림 클릭")}
            className="flex items-center gap-1 px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer"
            style={{ backgroundColor: "#F2F6F9", border: "none" }}
          >
            <img src={bellIcon} alt="알림 아이콘" className="w-5 h-5" />
          </button>
          <button
            onClick={() => console.log("설정 클릭")}
            className="flex items-center gap-1 px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-200-cursor-pointer"
            style={{ backgroundColor: "#F2F6F9", border: "none" }}
          >
            <img src={settingIcon} alt="설정 아이콘" className="w-5 h-5" />
          </button>
          <button
            onClick={() => console.log("로그아웃 클릭")}
            className="flex items-center gap-1 px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-200-cursor-pointer"
            style={{ backgroundColor: "#F2F6F9", border: "none" }}
          >
            <img src={logoutIcon} alt="로그아웃 아이콘" className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ✅ 본문 */}
      <main className="flex flex-col items-center w-full px-4 pt-[5%]">
        <h1 className="text-[34px] font-extrabold text-[#202325] mb-2">나의 강의 리스트</h1>
        <p className="text-base text-[#5C5F63] mb-6">담당 중인 강의를 확인하고 질문을 관리해보세요.</p>

        {/* 검색창 */}
        <input
          type="text"
          placeholder="강의명을 입력해보세요..."
          className="w-[420px] h-[44px] px-4 border-2 border-[#3B6CFF] rounded-full focus:outline-none focus:ring-2 focus:ring-[#3B6CFF] placeholder:text-[#A0A0A0] mb-8"
        />
      
        {/* 오늘 강의 */}
        <section className="w-full max-w-[800px] mx-auto flex flex-col items-start px-4">
          <div className="flex justify-between items-start w-full mb-4">
            {/* 제목 + 아이콘 묶기 */}
            <div className="flex items-center gap-2">
              <img src={calendarIcon} alt="icon" className="w-[25px] h-[25px]" />
              <h2 className="text-base font-semibold">오늘 강의 (2025.06.00)</h2>
            </div>

        {/* ✅ 네모 칩 필터 UI */}
        <div className="flex gap-8 text-sm text-[#4A4D50] mt-4">
  {FILTERS.map((filter) => (
    <div
      key={filter}
      className="flex items-center gap-6 cursor-pointer"
      onClick={() =>
        setSelectedFilter(filter === selectedFilter ? null : filter)
      }
    >
      <div
        className={`w-[15px] h-[15px] border transition-colors duration-200 ${
          selectedFilter === filter
            ? "bg-[#323639] border-[#323639]"
            : "bg-[#646B72] border-[#646B72]"
        } rounded-[5px] flex items-center justify-center`}
      >
        {selectedFilter === filter && (
          <div className="w-2 h-2 bg-white rounded-full" />
        )}
      </div>
      <span className="text-base">{filter}</span>
    </div>
  ))}
</div>


          </div>

          {/* 오늘 강의 목록 */}
          <div className="flex flex-col items-center space-y-4">
  <LectureItem title="기계 학습 (09시 00분)" level="보통" />
  <LectureItem title="운영체제 (13시 00분)" level="적음" />
</div>

        </section>

        {/* 전체 강의 Section */}
<section className="w-full flex flex-col items-center">
  {/* 💡 여기를 기준 wrapper로 통일 */}
  <div className="w-full max-w-[800px] flex flex-col items-start mb-6 px-4">
    {/* 제목 + 아이콘 */}
    <div className="flex items-center gap-2 mb-2">
      <img src={archiveIcon} alt="icon" className="w-[25px] h-[25px]" />
      <h2 className="text-base font-semibold">전체 강의</h2>
    </div>
    <SortButtons />
    
    <div className="flex flex-col space-y-4 mt-4">
      <LectureItem title="기계 학습 (월수 1교시)" level="보통" />
      <LectureItem title="운영체제 (월수 2교시)" level="많음" />
      <LectureItem title="데이터베이스 (화목 2교시)" level="많음" />
      <LectureItem title="컴퓨터 네트워크 (수 5교시)" level="적음" />
      <LectureItem title="딥러닝 이론 (금 4교시)" level="보통" />
    </div>
  </div>
</section>

        <div className="w-full flex justify-center mt-6">
<button
  className="flex items-center gap-1 px-4 py-2 bg-[#F2F6F9] border border-[#B1BAC1] rounded-[6px] text-sm text-[#4A4D50] hover:bg-[#B1BAC1] transition "
  onClick={() => console.log("더보기 클릭")}
>
  더보기
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 ml-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>


</div>
      </main>
    </div>
  );
};

// ✅ LectureItem은 그대로 유지 (질문 수준 태그만 출력)
const LectureItem = ({ title, level }: { title: string; level: string }) => {
  const levelStyle =
    level === "많음"
      ? "bg-[#646B72]"
      : level === "보통"
      ? "bg-[#92B6FF]"
      : "bg-[#C8CFD6]";

  return (
    <div
      className="group w-[800px] mx-auto flex justify-between items-center px-4 py-3 
                 bg-[#FFFFFF] rounded-lg shadow-sm hover:bg-[#E9EEF2] transition-shadow duration-200"
      style={{ marginBottom: "10px" }}
    >
      <p className="text-sm font-medium text-[#202325]">{title}</p>

      <div className="flex items-center gap-2">
        <span
          className={`text-sm font-semibold px-5 py-1.5 rounded-[5px] text-[#FFFFFF] ${levelStyle}`}
        >
          {level}
        </span>

        {/* ▶ 호버할 때만 보이는 아이콘 */}
        <svg
          className="w-4 h-4 text-[#323639] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};





export default LectureListPage;
