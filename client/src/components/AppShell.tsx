/**
 * Design reminder — Light Aviation Lounge: 상단 헤더 없이 콘텐츠가 안전 영역부터 시작하며,
 * 밝은 정보 카드와 여행 맥락을 유지하고 하단 내비게이션으로 전역 이동을 제공한다.
 */
import { Link, useLocation } from "wouter";
import { CalendarDays, Compass, Home, Plus, UserRound } from "lucide-react";

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
