/**
 * Design reminder — Light Aviation Lounge: 선호 정보와 다음 여행 상태를 프로스트 카드로 나누고,
 * 공항 코드·여정선·파란 신호색을 통해 또잇의 여행 맥락을 유지한다.
 */
import { ChevronRight, CircleDollarSign, Heart, MapPin, Plane, SlidersHorizontal } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";

export default function Profile() {
  return (
    <AppShell eyebrow="나의 여행 취향" title="당신의 여행은,
어떤 속도인가요?">
      <section className="profile-card glass-panel"><div className="profile-avatar">J</div><div><span>여행자</span><h2>Jiin의 여행 취향</h2><p>도시 산책 · 로컬 커피 · 전시</p></div><button aria-label="프로필 설정" onClick={() => toast("프로필 설정을 준비 중입니다.")}><SlidersHorizontal size={19} /></button></section>
      <section className="taste-card"><span className="section-kicker">이번 여행의 속도</span><h2>하루 3곳, 조금 여유롭게.</h2><p>일정을 빼곡하게 채우기보다, 좋아하는 곳에서 오래 머무는 편이에요.</p><div><span>아침 산책</span><span>오후 전시</span><span>저녁 식사</span></div></section>
      <section className="profile-passport">
        <div className="passport-topline"><span className="section-kicker">다음 항공 태그</span><span><Plane size={13} /> D-79</span></div>
        <div className="passport-route"><div><small>FROM</small><strong>ICN</strong><p>Seoul</p></div><i><b /></i><div><small>TO</small><strong>NRT</strong><p>Tokyo</p></div></div>
        <div className="passport-meta"><span><MapPin size={13} /> 2026. 12. 11</span><span><CircleDollarSign size={13} /> 중간 예산</span></div>
      </section>
      <section className="preference-list"><button onClick={() => toast("선호 장소를 편집할 수 있습니다.")}><Heart size={18} /> 저장한 장소 <ChevronRight size={18} /></button><button onClick={() => toast("개인정보 설정을 준비 중입니다.")}><SlidersHorizontal size={18} /> 개인화와 알림 <ChevronRight size={18} /></button></section>
    </AppShell>
  );
}
