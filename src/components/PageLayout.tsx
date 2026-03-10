import { useEffect, useRef } from 'react';
import Navigation from './Navigation';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function PageLayout({ children, title }: Props) {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
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
      <main className="pt-14">
        {title && (
          <div className="hero-pattern py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl text-primary-foreground font-bold tracking-wide">
                {title}
              </h1>
              <div className="ornament-divider mt-4 max-w-sm mx-auto" />
            </div>
          </div>
        )}
        <div className="max-w-4xl mx-auto px-4 py-10">
          {children}
        </div>
      </main>
      <footer className="bg-primary/10 border-t border-primary/20 py-8 mt-16">
        <p className="text-center text-muted-foreground text-sm">
          © 2026 — Муса Мостафа улы Җәлилов (1906–1944). Барлык хокуклар сакланган.
        </p>
      </footer>
    </div>
  );
}
