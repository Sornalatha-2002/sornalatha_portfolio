import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';
import { ResumeLink } from '../components/ui.jsx';
import { socialLinks } from '../components/links.js';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact__grid">
        <div data-reveal>
          <div className="section-head__label is-dark">
            <span className="mono">08</span>
            <span className="section-head__rule" aria-hidden="true" />
            <span className="mono">Contact</span>
          </div>
          <h2 className="contact__title">Let&apos;s build something useful.</h2>
          <p className="contact__text">
            Open to Software Developer, PHP Developer, Backend Developer, and JavaScript Developer opportunities.
          </p>
          <ResumeLink className="btn btn-light" />
        </div>

        <div className="contact__links" data-reveal style={{ '--d': '100ms' }}>
          <ul>
            {socialLinks.map(({ label, href, text, Icon, external }) => (
              <li key={label}>
                <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <span className="contact__label mono"><Icon size={16} aria-hidden="true" />{label}</span>
                  <span className="contact__value">{text}</span>
                  <ArrowUpRight className="contact__arrow" size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="contact__aside mono">
            <span><Phone size={14} aria-hidden="true" /><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></span>
            <span><MapPin size={14} aria-hidden="true" />{profile.location}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
