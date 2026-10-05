import { useCallback, useState } from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import { projects } from '../data/portfolio';
import { SectionHead } from '../components/ui.jsx';
import Modal from '../components/Modal.jsx';

const pad = (n) => String(n).padStart(2, '0');

export default function Projects() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <SectionHead index="03" label="Projects" title="Selected Work">
          Business applications I&apos;ve contributed to across different domains.
        </SectionHead>

        <div className="cases">
          {projects.map((p, i) => (
            <article className="case" key={p.id} data-reveal aria-labelledby={`case-${p.id}`}>
              <div className="case__side">
                <span className="case__num mono" aria-hidden="true"><span>{pad(i + 1)}</span></span>
                <p className="case__domain mono">{p.domain}</p>
                <h3 id={`case-${p.id}`}>{p.title}</h3>
                <dl className="case__meta">
                  <div><dt className="mono">Role</dt><dd>{p.role}</dd></div>
                  <div><dt className="mono">Period</dt><dd>{p.period}</dd></div>
                </dl>
                <p className="case__status mono"><Lock size={13} aria-hidden="true" />{p.status}</p>
              </div>

              <div className="case__main">
                <p className="techline mono" aria-label="Technology stack">
                  {p.tech.map((t) => <span key={t}>{t}</span>)}
                </p>
                <div className="case__cols">
                  <div>
                    <h4 className="label mono">Problem / Purpose</h4>
                    <p>{p.purpose}</p>
                  </div>
                  <div>
                    <h4 className="label mono">What I Built</h4>
                    <ul className="dash-list">
                      {p.built.slice(0, 4).map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="case__foot">
                  <div>
                    <h4 className="label mono">Technical Focus</h4>
                    <ul className="focus-list focus-list--accent">
                      {p.focus.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                  <button type="button" className="btn btn-ghost" onClick={() => setActive(p)}>
                    View Details <ArrowUpRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {active && <Modal project={active} onClose={close} />}
    </section>
  );
}
