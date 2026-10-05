import { skills } from '../data/portfolio';
import { SectionHead } from '../components/ui.jsx';

const pad = (n) => String(n).padStart(2, '0');

export default function Stack() {
  return (
    <section className="section" id="technical">
      <div className="wrap">
        <SectionHead index="05" label="Technical" title="Technical Stack">
          Tools and technologies used in production work, grouped by layer.
        </SectionHead>

        <div className="matrix">
          {skills.map((g, i) => (
            <div className="matrix__col" key={g.name} data-reveal style={{ '--d': `${i * 70}ms` }}>
              <div className="matrix__head">
                <span className="matrix__num mono">{pad(i + 1)}</span>
                <h3>{g.name}</h3>
              </div>
              <ul>
                {g.items.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
