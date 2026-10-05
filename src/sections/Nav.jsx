import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/portfolio';
import { ResumeLink } from '../components/ui.jsx';
import useActiveSection from '../hooks/useActiveSection';

const LINKS = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Technical', 'technical'],
  ['Education', 'education'],
  ['Contact', 'contact'],
];
const IDS = LINKS.map(([, id]) => id);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { document.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, [open]);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="wrap nav__inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__name">{profile.name.toUpperCase()}</span>
          <span className="brand__role">{profile.role}</span>
        </a>

        <nav className="nav__links" id="primary-nav" aria-label="Primary">
          {LINKS.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'is-active' : undefined}
              aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <ResumeLink className="btn btn-primary btn-sm nav__resume" />
        </nav>

        <button className="nav__toggle" aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
