import { ArrowRight } from 'lucide-react';
import { profile, heroMeta, enginePanel } from '../data/portfolio';
import { ResumeLink } from '../components/ui.jsx';

function EngineeringPanel() {
  return (
    <aside className="panel" aria-label="Engineering profile summary" data-reveal style={{ '--d': '160ms' }}>
      <div className="panel__bar">
        <span className="mono">Application Engineering</span>
        <span className="panel__id mono">profile / sornalatha-s</span>
      </div>

      <dl className="panel__stack">
        {enginePanel.stack.map(([k, v]) => (
          <div key={k}>
            <dt className="mono">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      <div className="panel__divider mono" aria-hidden="true"><span>capabilities</span></div>

      <ul className="panel__caps">
        {enginePanel.capabilities.map(([name, detail, live]) => (
          <li key={name}>
            <span className="panel__cap">{name}</span>
            <span className="panel__leader" aria-hidden="true" />
            <span className="panel__detail mono">
              {live && <span className="panel__live" title="Currently active"><i aria-hidden="true" />active</span>}
              {detail}
            </span>
          </li>
        ))}
      </ul>

      <div className="panel__foot mono">
        <span>domains</span>
        <span className="panel__domains">{enginePanel.domains.map((d) => <b key={d}>{d}</b>)}</span>
      </div>
    </aside>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow mono" data-reveal>
            <span className="eyebrow__dot" aria-hidden="true" />
            {profile.name} — Software Developer
          </p>
          <h1 data-reveal style={{ '--d': '60ms' }}>
            Building reliable software for <em><span className="nowrap">real-world</span> business workflows.</em>
          </h1>
          <p className="hero__lead" data-reveal style={{ '--d': '120ms' }}>{profile.summary}</p>
          <p className="hero__stack mono" data-reveal style={{ '--d': '150ms' }}>
            {profile.primaryStack.join('  ·  ')}
          </p>
          <div className="hero__cta" data-reveal style={{ '--d': '180ms' }}>
            <a className="btn btn-primary" href="#projects">View Projects <ArrowRight size={16} aria-hidden="true" /></a>
            <ResumeLink />
            <a className="text-link" href="#contact">Contact Me</a>
          </div>
        </div>
        <EngineeringPanel />
      </div>

      <div className="wrap">
        <dl className="hero__meta" data-reveal style={{ '--d': '240ms' }}>
          {heroMeta.map(([value, label]) => (
            <div key={label}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
