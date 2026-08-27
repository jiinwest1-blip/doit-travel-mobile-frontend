/**
 * Design reminder — 항공 라운지 글래스: AI 결과는 불투명한 답이 아니라,
 * 지도·순번·이동시간이 연결되고 바로 수정할 수 있는 여행 초안으로 보여 준다.
 */
import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ChevronDown, CircleDollarSign, MapPinned, MoreHorizontal, Plus, RotateCcw, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";
import { TripMap } from "@/components/TripMap";
import { itinerary } from "@/const";

export default function Plan() {
  const [activeDay, setActiveDay] = useState(1);
  const [saved, setSaved] = useState(false);
  return (
    <AppShell eyebrow="YOUR DRAFT" title="도쿄를 천천히,
하지만 놓치지 않게.">
      <div className="plan-topline">
        <Link href="/" className="back-chip"><ArrowLeft size={16} /> 홈</Link>
        <button className="glass-icon-button" onClick={() => toast("여행 옵션을 여는 중입니다.")} aria-label="여행 옵션"><MoreHorizontal size={20} /></button>
      </div>

      <section className="plan-brief glass-panel">
        <div className="brief-title"><span><Sparkles size={15} /> AI가 만든 초안</span><button onClick={() => toast("여행 조건을 수정할 수 있습니다.")}>조건 보기 <ChevronDown size={14} /></button></div>
        <p>맛집과 전시를 좋아하는 두 분을 위해, 오후 이동을 줄이고 저녁에 긴자를 넣었어요.</p>
        <div className="brief-chips"><span>12.11 — 12.15</span><span>2명</span><span><CircleDollarSign size={14} /> 중간 예산</span></div>
      </section>

      <div className="day-tabs" role="tablist" aria-label="일차 선택">
        {[1, 2, 3, 4, 5].map((day) => <button key={day} role="tab" aria-selected={activeDay === day} onClick={() => setActiveDay(day)} className={activeDay === day ? "selected" : ""}><small>DAY</small>{day}</button>)}
      </div>

      {activeDay === 1 ? <TripMap /> : <section className="future-day glass-panel"><MapPinned size={24} /><h2>DAY {activeDay}의 초안을 준비 중이에요.</h2><p>첫째 날의 장소를 기준으로 여행 속도를 맞추고 있어요.</p></section>}

      <section className="section-block itinerary-block">
        <div className="section-heading compact"><div><span className="section-kicker">ITINERARY</span><h2>토요일의 순서</h2></div><button className="edit-link" onClick={() => toast("장소 편집 모드를 여는 중입니다.")}>편집</button></div>
        <div className="itinerary-list">
          {itinerary.map((item, index) => (
            <article className="itinerary-card" key={item.title}>
              <time>{item.time}</time>
              <div className="itinerary-order"><span>{index + 1}</span>{index < itinerary.length - 1 ? <i /> : null}</div>
              <div className="itinerary-copy"><div><small>{item.type}</small><span className={`assessment ${item.tag === "추천" ? "positive" : ""}`}>{item.tag}</span></div><h3>{item.title}</h3><p>{item.note}</p></div>
              <button className="more-item" aria-label={`${item.title} 더보기`} onClick={() => toast(`${item.title}의 장소 옵션을 확인합니다.`)}><MoreHorizontal size={20} /></button>
            </article>
          ))}
        </div>
      </section>

      <section className="plan-actions">
        <button className="secondary-plan-action" onClick={() => toast("현재 동선으로 다시 계산했습니다.")}><RotateCcw size={17} /> 동선 다시 계산</button>
        <button className="primary-plan-action" onClick={() => { setSaved(true); toast("도쿄 여행 초안을 저장했어요."); }}>{saved ? "저장 완료" : "이 일정 저장"}<Plus size={18} /></button>
      </section>
    </AppShell>
  );
}

