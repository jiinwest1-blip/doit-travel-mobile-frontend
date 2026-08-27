/**
 * Design reminder — Light Aviation Lounge: 홈은 시각 배너 없이 진행 중인 여행 정보를 먼저 보여 주고,
 * 공항 코드·여정선·파란 칩을 기능적 정보 요소로 사용해 또잇의 여행 OS를 만든다.
 */
import { Link } from "wouter";
import { ChevronRight, Clock3, Plane, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";
import { flights, itinerary } from "@/const";

const neighborhoodImage = "/manus-storage/doit-tokyo-neighborhood_9ea29236.jpg";

export default function Home() {
  return (
    <AppShell>
      <section className="section-block journey-summary home-summary">
        <div className="section-heading">
          <div>
            <span className="section-kicker">진행 중인 여행</span>
            <h2>도쿄, 4박 5일</h2>
          </div>
          <Link href="/plan" className="quiet-count">일정 보기 <ChevronRight size={14} /></Link>
        </div>
        <div className="progress-track"><span /></div>
        <div className="summary-grid">
          <div><span>DAY 01</span><strong>3</strong><small>장소</small></div>
          <div><span>PACE</span><strong>34</strong><small>이동 분</small></div>
          <div><span>MOOD</span><strong>여유</strong><small>산책 중심</small></div>
        </div>
      </section>

      <section className="section-block home-route-block">
        <div className="section-heading compact">
          <div><span className="section-kicker">오늘의 동선</span><h2>첫째 날의 리듬</h2></div>
          <Link href="/plan" className="text-link">전체 보기 <ChevronRight size={15} /></Link>
        </div>
        <div className="route-preview">
          {itinerary.slice(0, 2).map((item, index) => (
            <div className="route-row" key={item.title}>
              <time>{item.time}</time>
              <div className="boarding-line"><span>{index + 1}</span></div>
              <div><strong>{item.title}</strong><small>{item.note}</small></div>
            </div>
          ))}
          <div className="route-footer"><Clock3 size={14} /> 다음 장소까지 도보 14분</div>
        </div>
      </section>

      <section className="section-block fare-block">
        <div className="section-heading compact">
          <div><span className="section-kicker">항공권 비교</span><h2>가격이 괜찮을 때</h2></div>
          <button className="icon-text-button" onClick={() => toast("항공권 비교는 곧 연결됩니다.")}><Plane size={15} /> 전체 비교</button>
        </div>
        <div className="fare-stack">
          {flights.map((flight) => (
            <button className="fare-card" key={flight.carrier} onClick={() => toast(`${flight.carrier} 항공권 비교 화면으로 이동합니다.`)}>
              <span className={`fare-orbit ${flight.accent}`} />
              <span className="fare-airline"><strong>{flight.carrier}</strong><small>{flight.route} · {flight.meta}</small></span>
              <span className="fare-price"><strong>{flight.price}</strong><small>1인 · 왕복부터</small></span>
              <ChevronRight size={18} />
            </button>
          ))}
        </div>
      </section>

      <section className="memory-teaser" style={{ backgroundImage: `url(${neighborhoodImage})` }}>
        <div className="memory-shade" />
        <div>
          <span className="section-kicker">지난 여행 기록</span>
          <h2>여행 뒤에도<br />또잇은 남아요.</h2>
          <p>다녀온 장소를 3가지 감정으로 기록해 보세요.</p>
        </div>
        <Link href="/records" className="memory-action"><Sparkles size={16} /> 기록 열기</Link>
      </section>
    </AppShell>
  );
}
