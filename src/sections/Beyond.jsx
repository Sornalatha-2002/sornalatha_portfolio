import { beyond } from '../data/portfolio';
import { SectionHead } from '../components/ui.jsx';

const pad = (n) => String(n).padStart(2, '0');

export default function Beyond() {
  return (
    <section className="section section--dark" id="beyond">
      <div className="wrap">
        <SectionHead dark index="04" label="Real-world work" title="Beyond Feature Development">
          Shipping a screen is only part of the job. Much of my work happens where software meets live data,
          live servers and real business rules.
        </SectionHead>

        <div className="beyond">
          {beyond.map((b, i) => (
            <article className="beyond__col" key={b.title} data-reveal style={{ '--d': `${i * 90}ms` }}>
              <span className="beyond__num mono">{pad(i + 1)}</span>
              <h3>{b.title}</h3>
              <p className="beyond__lead">{b.lead}</p>
              <ul className="beyond__list">
                {b.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
              <p className="beyond__where mono"><span>applied in</span>{b.where}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
