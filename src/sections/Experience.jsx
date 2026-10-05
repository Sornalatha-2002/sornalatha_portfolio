import { experience } from '../data/portfolio';
import { SectionHead } from '../components/ui.jsx';

export default function Experience() {
  return (
    <section className="section section--tint" id="experience">
      <div className="wrap">
        <SectionHead index="02" label="Experience" title="Professional Experience">
          Business applications I have built, shipped and supported — most recent first.
        </SectionHead>

        <ol className="timeline">
          {experience.map((x) => (
            <li className="timeline__item" key={x.id} data-reveal>
              <div className="timeline__when">
                <span className="mono timeline__period">{x.period}</span>
                {x.support && <span className="mono timeline__support">{x.support}</span>}
                {x.current && <span className="tag-live mono"><i aria-hidden="true" />Current</span>}
              </div>

              <div className="timeline__rail" aria-hidden="true"><span /></div>

              <article className="timeline__body">
                <p className="timeline__role mono">{x.role}</p>
                <h3>{x.title}</h3>
                <p className="timeline__desc">{x.description}</p>
                <p className="techline mono" aria-label="Technology stack">
                  {x.tech.map((t) => <span key={t}>{t}</span>)}
                </p>
                <h4 className="label mono">Key contributions</h4>
                <ul className="focus-list">
                  {x.focus.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
