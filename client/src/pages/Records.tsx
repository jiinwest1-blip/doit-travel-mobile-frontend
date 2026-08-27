/**
 * Design reminder — 항공 라운지 글래스: 여행 기록은 과장된 SNS 피드가 아닌,
 * 사진·장소 감정·날짜를 조용히 되짚는 개인 아카이브로 표현한다.
 */
import { Link } from "wouter";
import { ArrowUpRight, Bookmark, Camera, MapPin, Plus, ThumbsDown, ThumbsUp } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";

const memoryImage = "/manus-storage/doit-amalfi-memory_6c1ae626.jpg";

export default function Records() {
  return (
    <AppShell eyebrow="YOUR TRAVEL ARCHIVE" title="다녀온 곳이,
나의 다음 선택이 돼요.">
      <section className="archive-hero" style={{ backgroundImage: `url(${memoryImage})` }}>
        <div className="archive-shade" />
        <div className="archive-count"><Camera size={16} /> 12개의 장면</div>
        <div className="archive-title"><span className="record-date-chip">2026. 06. 17 — 06. 22</span><h2>Amalfi, five slow days.</h2><p>파도 소리와 긴 저녁이 남은 여행</p></div>
      </section>

      <section className="record-stats glass-panel">
        <div><strong>18</strong><span>기록한 장소</span></div>
        <div><strong>11</strong><span>다시 가고 싶은 곳</span></div>
        <div><strong>03</strong><span>다음엔 빼고 싶은 곳</span></div>
      </section>

      <section className="section-block">
        <div className="section-heading compact"><div><span className="section-kicker">PLACE NOTES</span><h2>이번 여행의 감정</h2></div><button className="edit-link" onClick={() => toast("새 장소 기록을 작성할 수 있습니다.")}>새 기록</button></div>
        <div className="assessment-list">
          <article className="assessment-card"><div className="assessment-icon positive"><ThumbsUp size={17} /></div><div><h3>Villa Cimbrone</h3><p><MapPin size={13} /> Ravello · 해 질 무렵의 정원이 좋았어요.</p></div><span>추천</span></article>
          <article className="assessment-card"><div className="assessment-icon neutral"><Bookmark size={17} /></div><div><h3>Marina Grande</h3><p><MapPin size={13} /> Amalfi · 오전에는 여유로웠어요.</p></div><span>보통</span></article>
          <article className="assessment-card"><div className="assessment-icon negative"><ThumbsDown size={17} /></div><div><h3>Coastal Lunch Stop</h3><p><MapPin size={13} /> Positano · 대기 시간이 길었어요.</p></div><span>비추천</span></article>
        </div>
      </section>

      <section className="new-record-card">
        <div><span className="section-kicker">ONE MORE MEMORY</span><h2>다녀온 여행을<br />조용히 꺼내 볼까요?</h2></div>
        <button onClick={() => toast("여행 기록 작성 화면을 준비 중입니다.")}><Plus size={18} /> 여행 기록하기</button>
      </section>
      <Link href="/plan" className="archive-plan-link">다음 여행도 계획하기 <ArrowUpRight size={16} /></Link>
    </AppShell>
  );
}
