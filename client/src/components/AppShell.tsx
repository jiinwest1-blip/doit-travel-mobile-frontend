/**
 * Design reminder — 항공 라운지 글래스: Midnight Navy 위의 정보성 유리 레이어,
 * 한 손 조작이 쉬운 하단 도킹 내비게이션, Aurora Blue를 행동 신호로 사용한다.
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
  eyebrow: string;
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
            <span>준비 중인 여행</span>
          </div>
        </header>

        <main className="app-content">
          <div className="page-intro">
            <p>{eyebrow}</p>
            {title ? <h1>{title}</h1> : null}
          </div>
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

