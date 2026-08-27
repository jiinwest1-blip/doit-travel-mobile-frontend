/**
 * Design reminder — Light Aviation Lounge: 밝은 중성 바탕과 명료한 정보 카드를 쓰되,
 * 또잇의 궤도 심볼과 여행 맥락을 유지하고 화면별 인트로는 필요한 경우에만 노출한다.
 */
import { Link, useLocation } from "wouter";
import { CalendarDays, Compass, Home, Plus, UserRound } from "lucide-react";

const LOGO_URL = "/manus-storage/doit-orbit-logo_a4c09b0a.png";

const navigation = [
  { href: "/", label: "홈", icon: Home },
  { href: "/explore", label: "탐색", icon: Compass },
  { href: "/plan", label: "계획", icon: Plus, primary: true },
  { href: "/records", label: "기록", icon: CalendarDays },
  { href: "/profile", label: "마이", icon: UserRound },
];

type AppShellProps = {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
};

export function AppShell({ eyebrow, title, children }: AppShellProps) {
  const [location] = useLocation();

  return (
    <div className="app-stage">
      <div className="app-frame">
        <header className="app-header">
          <Link href="/" className="brand-lockup" aria-label="또잇 홈으로 이동">
            <img className="brand-mark" src={LOGO_URL} alt="또잇 궤도 심볼" />
            <span className="brand-word">do it<span>.</span></span>
          </Link>
          <div className="header-status" aria-label="여행 플래너 서비스 상태">
            <span className="status-pulse" />
            <span>도쿄 여행</span>
          </div>
        </header>

        <main className="app-content">
          {eyebrow || title ? (
            <div className="page-intro">
              {eyebrow ? <p>{eyebrow}</p> : null}
              {title ? <h1>{title}</h1> : null}
            </div>
          ) : null}
          {children}
        </main>

        <nav className="bottom-dock" aria-label="주요 메뉴">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = item.href === "/" ? location === "/" : location.startsWith(item.href);
            return (
              <Link
                href={item.href}
                key={item.href}
                className={`dock-item ${active ? "is-active" : ""} ${item.primary ? "is-primary" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                <span className="dock-icon"><Icon size={item.primary ? 22 : 19} strokeWidth={item.primary ? 2.4 : 1.9} /></span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
