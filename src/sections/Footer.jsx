import { profile } from '../data/portfolio';
import { socialLinks } from '../components/links.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <p className="footer__name">{profile.name.toUpperCase()}</p>
          <p className="footer__role">{profile.role}</p>
        </div>
        <p className="footer__stack mono">{profile.primaryStack.join(' · ')}</p>
        <nav className="footer__links" aria-label="Social">
          {socialLinks.map(({ label, href, external }) => (
            <a key={label} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{label}</a>
          ))}
        </nav>
      </div>
      <div className="wrap footer__base mono">
        <span>Copyright © 2026 {profile.name}</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
