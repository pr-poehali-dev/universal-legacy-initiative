import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const sections = [
  { label: 'Язучы', path: '/yazuchy' },
  { label: 'Географ', path: '/geograf' },
  { label: 'Биолог', path: '/biolog' },
  { label: 'Аш-су остасы', path: '/ashsu' },
  { label: 'Тел галиме', path: '/telgalime' },
  { label: 'Суз остасы', path: '/suzostasy' },
];

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const bodyRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('animate-in'); }),
      { threshold: 0.08 }
    );
    bodyRef.current?.querySelectorAll('.reveal-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background" ref={bodyRef}>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-14">
            <button
              onClick={() => navigate('/')}
              className="font-black tracking-widest flex items-center gap-2"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '1.1rem',
                background: 'linear-gradient(135deg, hsl(15 85% 62%), hsl(200 70% 55%), hsl(152 55% 45%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              <span style={{ WebkitTextFillColor: 'hsl(15 85% 62%)' }}>←</span>
              КАЮМ НАСЫЙРИ
            </button>
            <div className="hidden md:flex items-center gap-1">
              {sections.map(s => (
                <button
                  key={s.path}
                  onClick={() => navigate(s.path)}
                  className={`section-nav-btn px-3 py-1.5 rounded text-xs font-medium ${location.pathname === s.path ? 'active' : 'text-muted-foreground'}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden pb-3 flex flex-col gap-1">
              {sections.map(s => (
                <button
                  key={s.path}
                  onClick={() => { navigate(s.path); setMenuOpen(false); }}
                  className="section-nav-btn px-3 py-2 rounded text-sm font-medium text-muted-foreground text-left"
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero заголовок страницы */}
      <div className="pt-14 hero-pattern">
        <div className="max-w-3xl mx-auto px-4 py-14 text-center">
          <p className="text-xs tracking-[0.3em] mb-2" style={{ color: 'hsl(200 70% 60%)' }}>КАЮМ НАСЫЙРИ</p>
          <h1 className="gradient-title font-black leading-none mb-3"
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>
            {title}
          </h1>
          {subtitle && <p className="text-muted-foreground text-sm md:text-base">{subtitle}</p>}
          <div className="gold-line max-w-32 mx-auto mt-4" />
        </div>
      </div>

      {/* Контент */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 text-center">
        <p className="text-muted-foreground text-sm">© 2026 — Татар әдәбиятын өйрәнү һәм үстерү проекты. Лилия Кәримова</p>
      </footer>
    </div>
  );
}