import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section className="section section--compact" id="education">
      <div className="wrap edu">
        <div className="edu__head" data-reveal>
          <div className="section-head__label">
            <span className="mono">07</span>
            <span className="section-head__rule" aria-hidden="true" />
            <span className="mono">Education</span>
          </div>
          <h2>Education</h2>
        </div>
        <ul className="edu__list">
          {education.map((e, i) => (
            <li key={e.degree} data-reveal style={{ '--d': `${i * 80}ms` }}>
              <div>
                <h3>{e.degree}</h3>
                <p>{e.school}</p>
              </div>
              <p className="edu__meta mono">
                <span>{e.period}</span>
                <span>{e.score}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
