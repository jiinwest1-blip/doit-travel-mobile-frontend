/**
 * Design reminder — Light Aviation Lounge: 상단 헤더 없이 콘텐츠가 안전 영역부터 시작하며,
 * 기획서의 유광 DO 타일 마크와 블루·라일락 글래스 표면을 전역 이동과 여행 흐름에 사용한다.
 */
import { Link, useLocation } from "wouter";
import { CalendarDays, Compass, Home, Sparkles, UserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const brandTile = "/manus-storage/doit-logo-glass-tile_dbe80741.png";

const navigation = [
  { href: "/", label: "홈", icon: Home },
  { href: "/explore", label: "탐색", icon: Compass },
  { href: "/create", label: "계획하기", icon: Sparkles, primary: true },
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
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [scrollIndicator, setScrollIndicator] = useState({ visible: false, size: 100, position: 0 });

  const updateScrollIndicator = () => {
    const container = scrollableRef.current;
    if (!container) return;

    const overflow = container.scrollHeight - container.clientHeight;
    if (overflow <= 1) {
      setScrollIndicator({ visible: false, size: 100, position: 0 });
      return;
    }

    const size = Math.max(14, (container.clientHeight / container.scrollHeight) * 100);
    const position = (container.scrollTop / overflow) * (100 - size);
    setScrollIndicator({ visible: true, size, position });
  };

  useEffect(() => {
    const container = scrollableRef.current;
    if (!container) return;

    const animationFrame = window.requestAnimationFrame(updateScrollIndicator);
    const observer = new ResizeObserver(updateScrollIndicator);
    observer.observe(container);
    window.addEventListener("resize", updateScrollIndicator);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("resize", updateScrollIndicator);
    };
  }, [location]);

  return (
    <div className="app-stage">
      <div className="app-frame">
        <div className="app-scrollable" ref={scrollableRef} onScroll={updateScrollIndicator}>
          <main className="app-content">
            <div className="page-intro">
              <p>{eyebrow}</p>
              {title ? <h1>{title}</h1> : null}
            </div>
            {children}
          </main>
        </div>

        <div
          className={`overlay-scroll-track ${scrollIndicator.visible ? "is-visible" : ""}`}
          aria-hidden="true"
        >
          <span
            className="overlay-scroll-thumb"
            style={{ height: `${scrollIndicator.size}%`, top: `${scrollIndicator.position}%` }}
          />
        </div>

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
                {item.primary ? (
                  <span className="dock-logo"><img src={brandTile} alt="" /></span>
                ) : (
                  <span className="dock-icon"><Icon size={19} strokeWidth={1.9} /></span>
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
