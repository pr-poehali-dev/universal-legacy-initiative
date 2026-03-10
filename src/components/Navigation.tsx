import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Баш бит' },
  { path: '/tormysh', label: 'Тормыш юлы' },
  { path: '/shakhsi', label: 'Шәхси тормышы' },
  { path: '/sugush', label: 'Сугыш юлы һәм әсирлек' },
  { path: '/moabit', label: 'Моабит тәфтәрләре' },
  { path: '/jalilcheler', label: 'Җәлилчеләр' },
  { path: '/ijat', label: 'Иҗат' },
  { path: '/bugen', label: 'Бүгенге көн' },
];

export default function Navigation() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/98 shadow-xl' : 'bg-primary/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="text-primary-foreground font-semibold text-sm tracking-wide truncate max-w-[180px]">
            Муса Җәлил
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link px-3 py-2 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  location.pathname === item.path
                    ? 'text-accent bg-white/10'
                    : 'text-primary-foreground/90 hover:text-accent hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden pb-4 border-t border-white/20 mt-2 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 text-sm rounded mb-1 ${
                  location.pathname === item.path
                    ? 'text-accent bg-white/10'
                    : 'text-primary-foreground/90 hover:text-accent hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
