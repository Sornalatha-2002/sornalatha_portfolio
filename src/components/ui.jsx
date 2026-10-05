import { Download } from 'lucide-react';
import { profile } from '../data/portfolio';

export function ResumeLink({ className = 'btn btn-secondary', label = 'Download Resume' }) {
  return (
    <a className={className} href={profile.resume} download>
      <Download size={16} aria-hidden="true" /> {label}
    </a>
  );
}

export function SectionHead({ index, label, title, children, dark = false }) {
  return (
    <header className={`section-head${dark ? ' is-dark' : ''}`} data-reveal>
      <div className="section-head__label">
        <span className="mono">{index}</span>
        <span className="section-head__rule" aria-hidden="true" />
        <span className="mono">{label}</span>
      </div>
      <div className="section-head__body">
        <h2>{title}</h2>
        {children && <p className="section-head__sub">{children}</p>}
      </div>
    </header>
  );
}
