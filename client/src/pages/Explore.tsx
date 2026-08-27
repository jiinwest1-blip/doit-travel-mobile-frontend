/**
 * Design reminder — Light Aviation Lounge: 탐색은 검색·추천·취향을 각각 프로스트 정보 카드로
 * 나누고, 공항 코드와 여정선을 통해 또잇의 여행 OS 문법을 일관되게 보여 준다.
 */
import { ArrowUpRight, CalendarDays, MapPin, Search, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";

const brandMark = "/manus-storage/doit-orbit-logo_a4c09b0a.png";

export default function Explore() {
  return (
    <AppShell eyebrow="여행지 탐색" title="어디로 갈까요?">
      <section className="explore-search glass-panel"><Search size={19} /><input aria-label="도시 또는 테마 검색" placeholder="도시, 취향, 여행 테마" /><button onClick={() => toast("검색 기능은 실제 장소 데이터 연동 후 활성화됩니다.")}>검색</button></section>
      <section className="departure-card">
        <div className="horizon-halo departure-halo" />
        <div className="departure-topline"><span><img src={brandMark} alt="" /> <Sparkles size={15} /> 또잇이 찾은 다음 여행</span><span className="boarding-tag">NEXT 02</span></div>
        <div className="departure-route"><span>ICN</span><i /><b><MapPin size={13} /></b><i /><span>FUK</span></div>
        <div className="departure-copy"><h2><span className="destination-editorial">Fukuoka</span>의 느린<br /><em>주말을 만나 보세요.</em></h2><p>커피, 산책, 작은 전시를 좋아하는 취향을 기준으로 골랐어요.</p></div>
        <div className="fare-chips"><span><CalendarDays size={13} /> 2박 3일</span><span>12월에 좋아요</span><button onClick={() => toast("후쿠오카 여행 초안을 만들 수 있습니다.")}>초안 보기 <ArrowUpRight size={13} /></button></div>
        <p className="recommendation-reason"><Sparkles size={13} /> 커피·전시·느린 일정 취향을 반영했어요.</p>
      </section>
      <section className="explore-document">
        <div className="document-heading"><span className="section-kicker">내 여행 메모</span><strong>여행 취향을 더 알려 주세요</strong></div>
        <div className="document-line"><span>01</span><p>일정 속도</p><b>여유롭게</b></div>
        <div className="document-line"><span>02</span><p>관심 있는 순간</p><b>커피 · 전시</b></div>
        <button onClick={() => toast("여행 취향 설정을 준비 중입니다.")}>내 취향 다듬기 <ArrowUpRight size={15} /></button>
      </section>
    </AppShell>
  );
}
