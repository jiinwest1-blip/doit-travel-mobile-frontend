/**
 * Design reminder — Light Aviation Lounge: 여행 조건 입력은 가볍고 신뢰감 있는 패스포트 폼으로,
 * AI 생성 과정은 사용자가 이해할 수 있는 단계와 수정 가능한 조건 요약으로 보여 준다.
 */
import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Coffee,
  Footprints,
  MapPinned,
  Palette,
  PlaneTakeoff,
  Route,
  Sparkles,
  Utensils,
  Users,
  WalletCards,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";

type CreationMode = "form" | "generating" | "ready";

const interests = [
  { id: "coffee", label: "로컬 커피", icon: Coffee },
  { id: "exhibition", label: "전시와 디자인", icon: Palette },
  { id: "food", label: "맛집 탐방", icon: Utensils },
  { id: "walk", label: "동네 산책", icon: Footprints },
];

const brandMark = "/manus-storage/doit-logo-glass-tile_dbe80741.png";

export default function Create() {
  const [mode, setMode] = useState<CreationMode>("form");
  const [travelers, setTravelers] = useState(2);
  const [pace, setPace] = useState("여유롭게");
  const [budget, setBudget] = useState("중간 예산");
  const [selectedInterests, setSelectedInterests] = useState(["coffee", "exhibition", "food"]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest],
    );
  };

  const startGeneration = () => {
    setMode("generating");
    window.setTimeout(() => setMode("ready"), 1800);
  };

  if (mode === "generating") {
    return (
      <AppShell eyebrow="AI 일정 생성" title="여행의 리듬을
맞추고 있어요.">
        <section className="generation-hero">
          <div className="generation-orbit"><img src={brandMark} alt="또잇 궤도 마크" /></div>
          <span className="section-kicker">DO IT TRAVEL ENGINE</span>
          <h2><em>Tokyo</em>의 하루를<br />조금 더 현실적으로.</h2>
          <p>장소, 이동 시간, 머무는 시간을 여행 취향에 맞춰 조합하고 있어요.</p>
        </section>
        <section className="generation-steps glass-panel" aria-label="AI 일정 생성 진행 상태">
          <div className="generation-step is-complete"><span><Check size={13} /></span><div><strong>여행 조건을 정리했어요</strong><small>2명 · 4박 5일 · 중간 예산</small></div><CheckCircle2 size={16} /></div>
          <div className="generation-step is-active"><span>2</span><div><strong>취향에 맞는 장소를 고르고 있어요</strong><small>커피 · 전시 · 맛집 · 산책</small></div><i /></div>
          <div className="generation-step"><span>3</span><div><strong>이동 시간을 줄여 일정을 만들어요</strong><small>하루 3곳 · 여유로운 속도</small></div></div>
        </section>
        <section className="generation-summary">
          <span className="section-kicker">이번 여행 조건</span>
          <div><span>ICN</span><i /><b><PlaneTakeoff size={14} /></b><i /><span>NRT</span></div>
          <p>언제든 이 화면으로 돌아와 조건을 바꿀 수 있어요.</p>
        </section>
      </AppShell>
    );
  }

  if (mode === "ready") {
    return (
      <AppShell eyebrow="AI 일정 생성 완료" title="첫 여행 초안이
준비됐어요.">
        <section className="draft-ready-card">
          <div className="draft-ready-top"><span><img src={brandMark} alt="" /> 또잇 AI 초안</span><CheckCircle2 size={21} /></div>
          <p className="draft-ready-destination"><em>Tokyo</em><span>ICN → NRT · 4박 5일</span></p>
          <h2>이동은 줄이고,<br />머무는 시간은 남겼어요.</h2>
          <div className="draft-ready-stats"><span><strong>15</strong>곳의 장소</span><span><strong>34분</strong>하루 이동</span><span><strong>3개</strong>바꿀 수 있는 제안</span></div>
        </section>
        <section className="draft-ready-note glass-panel"><Sparkles size={18} /><div><strong>초안은 언제든 바꿀 수 있어요</strong><p>장소 순서, 방문 시간, 여행 속도를 직접 조정한 뒤 저장해 보세요.</p></div></section>
        <div className="create-actions">
          <button className="create-secondary" onClick={() => setMode("form")}>조건 다시 보기</button>
          <Link href="/plan" className="create-primary">초안 열어 보기 <ChevronRight size={18} /></Link>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell eyebrow="새 여행 만들기" title="어떤 여행을
생각하고 있나요?">
      <div className="create-topline"><Link href="/" className="back-chip"><ArrowLeft size={16} /> 홈</Link><span>STEP 1 OF 2</span></div>

      <section className="trip-form-card destination-form">
        <div className="form-heading"><span><img src={brandMark} alt="" /> 여행의 시작</span><small>필수</small></div>
        <label className="form-label">어디로 떠날까요?</label>
        <button className="destination-field" type="button"><MapPinned size={19} /><span><strong>Tokyo</strong><small>일본 · 도쿄도</small></span><ChevronRight size={18} /></button>
        <div className="form-flight-line" aria-label="출발과 도착 구간"><span>ICN<small>SEOUL</small></span><i /><b><PlaneTakeoff size={13} /></b><i /><span>NRT<small>TOKYO</small></span></div>
        <div className="date-field-row"><button type="button"><CalendarDays size={16} /><span>출발</span><strong>12.11</strong></button><i>—</i><button type="button"><CalendarDays size={16} /><span>귀국</span><strong>12.15</strong></button></div>
      </section>

      <section className="trip-form-card">
        <div className="form-heading"><span><Users size={15} /> 함께하는 사람</span><small>수정 가능</small></div>
        <div className="traveler-control"><div><strong>성인 {travelers}명</strong><p>연인과 함께 떠나요</p></div><div><button type="button" aria-label="인원 줄이기" onClick={() => setTravelers((count) => Math.max(1, count - 1))}>−</button><strong>{travelers}</strong><button type="button" aria-label="인원 늘리기" onClick={() => setTravelers((count) => count + 1)}>+</button></div></div>
      </section>

      <section className="trip-form-card preference-form">
        <div className="form-heading"><span><WalletCards size={15} /> 여행의 결</span><small>AI 추천에 반영돼요</small></div>
        <label className="form-label">예산</label>
        <div className="choice-row" role="radiogroup" aria-label="예산 선택">{["가볍게", "중간 예산", "여유 있게"].map((item) => <button key={item} type="button" role="radio" aria-checked={budget === item} className={budget === item ? "selected" : ""} onClick={() => setBudget(item)}>{item}{budget === item ? <Check size={13} /> : null}</button>)}</div>
        <label className="form-label">여행 속도</label>
        <div className="pace-choice"><button type="button" className={pace === "여유롭게" ? "selected" : ""} onClick={() => setPace("여유롭게")}><Footprints size={17} /><span><strong>여유롭게</strong><small>하루 3곳 · 오래 머물기</small></span></button><button type="button" className={pace === "알차게" ? "selected" : ""} onClick={() => setPace("알차게")}><Route size={17} /><span><strong>알차게</strong><small>하루 5곳 · 더 많이 보기</small></span></button></div>
      </section>

      <section className="trip-form-card interest-form">
        <div className="form-heading"><span><Sparkles size={15} /> 좋아하는 순간</span><small>{selectedInterests.length}개 선택</small></div>
        <div className="interest-grid">{interests.map(({ id, label, icon: Icon }) => <button key={id} type="button" className={selectedInterests.includes(id) ? "selected" : ""} onClick={() => toggleInterest(id)}><Icon size={17} /><span>{label}</span>{selectedInterests.includes(id) ? <Check size={14} /> : null}</button>)}</div>
      </section>

      <div className="create-actions create-form-actions"><span><img src={brandMark} alt="" /> 또잇이 조건을 바탕으로<br />현실적인 첫 동선을 만들어요.</span><button className="create-primary" type="button" onClick={startGeneration}>AI 일정 초안 만들기 <Sparkles size={17} /></button></div>
    </AppShell>
  );
}
