import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const navItems = [
  { path: '/tormysh', label: 'Тормыш юлы' },
  { path: '/shakhsi', label: 'Шәхси тормышы' },
  { path: '/sugush', label: 'Сугыш юлы һәм әсирлек' },
  { path: '/moabit', label: 'Моабит тәфтәрләре' },
  { path: '/jalilcheler', label: 'Җәлилчеләр' },
  { path: '/ijat', label: 'Иҗат' },
  { path: '/bugen', label: 'Бүгенге көн' },
];

export default function Index() {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('animate-in');
        });
      },
      { threshold: 0.1 }
    );
    const sections = bodyRef.current?.querySelectorAll('.reveal-section');
    sections?.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background" ref={bodyRef}>
      <Navigation />

      {/* HERO */}
      <section className="hero-pattern min-h-screen flex flex-col items-center justify-center px-4 pt-14 pb-10 relative overflow-hidden">
        {/* Декоративный орнамент */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, hsl(42,85%,45%) 0px, hsl(42,85%,45%) 1px, transparent 1px, transparent 20px),
              repeating-linear-gradient(-45deg, hsl(42,85%,45%) 0px, hsl(42,85%,45%) 1px, transparent 1px, transparent 20px)`
          }}
        />

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
          {/* Текст */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-base md:text-lg font-medium tracking-widest uppercase mb-2 opacity-90">
              ҮЗ ХАЛКЫН ДАНЛАГАН ТАТАРЛАР:
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-8 tracking-wide">
              МУСА ҖӘЛИЛ
            </h1>

            <div className="ornament-divider max-w-xs mb-8" />

            {/* Цитата */}
            <blockquote className="relative px-6 py-5 max-w-lg mx-auto lg:mx-0">
              <div className="absolute top-0 left-2 text-accent text-5xl font-serif leading-none opacity-60">"</div>
              <p className="text-primary-foreground/90 text-lg md:text-xl italic font-light leading-relaxed pl-4">
                Гомерем минем моңлы бер җыр иде,
                <br />
                Үлемем дә яңрар җыр булып
              </p>
              <div className="absolute bottom-0 right-4 text-accent text-5xl font-serif leading-none opacity-60 rotate-180">"</div>
            </blockquote>

            <p className="text-primary-foreground/60 text-sm mt-6 tracking-wider">
              1906 — 1944
            </p>
          </div>

          {/* Портрет */}
          <div className="flex-shrink-0 reveal-section opacity-0">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden portrait-circle">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Musa_Jalil.jpg/800px-Musa_Jalil.jpg"
                  alt="Муса Җәлил"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap shadow-lg">
                Муса Мостафа улы Җәлилов
              </div>
            </div>
          </div>
        </div>

        {/* Скролл вниз */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/40 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Навигационные карточки */}
      <section className="py-16 px-4 bg-background reveal-section opacity-0">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-3">Бүлекләр</h2>
            <div className="ornament-divider max-w-xs mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {navItems.map((item, i) => (
              <Link
                key={item.path}
                to={item.path}
                className="group block p-5 rounded-lg border border-border bg-card hover:border-accent hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-8 h-1 bg-accent rounded mb-3 group-hover:w-12 transition-all duration-300" />
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Краткая справка */}
      <section className="py-12 px-4 bg-primary/5 reveal-section opacity-0">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Муса Җәлил — бөек татар шагыйре, Советлар Союзы Герое, Ленин премиясе лауреаты.
            Икенче Дөнья сугышы вакытында фашист каторгасында рухи батырлык белән иҗат иткән
            <strong className="text-primary"> «Моабит дәфтәрләре»</strong> авторы.
          </p>
        </div>
      </section>

      <footer className="bg-primary py-8 px-4">
        <p className="text-center text-primary-foreground/60 text-sm">
          © 2026 — Муса Мостафа улы Җәлилов (1906–1944). Барлык хокуклар сакланган.
        </p>
      </footer>
    </div>
  );
}
