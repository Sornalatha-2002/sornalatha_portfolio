import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const Block = ({ h, children }) => (
  <section className="modal__block">
    <h4 className="label mono">{h}</h4>
    {children}
  </section>
);

export default function Modal({ project, onClose }) {
  const ref = useRef(null);
  const dialog = useRef(null);

  useEffect(() => {
    const prev = document.activeElement;
    ref.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      // Keep keyboard focus inside the dialog.
      if (e.key === 'Tab' && dialog.current) {
        const f = dialog.current.querySelectorAll('button, a[href]');
        const first = f[0]; const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; prev?.focus(); };
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div ref={dialog} className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}>
        <div className="modal__head">
          <div>
            <p className="case__domain mono">{project.domain}</p>
            <h3 id="modal-title">{project.fullTitle}</h3>
            <p className="modal__meta mono">{project.role} · {project.period} · {project.status}</p>
          </div>
          <button ref={ref} className="modal__close" onClick={onClose} aria-label="Close details"><X size={20} /></button>
        </div>
        <Block h="Problem / Purpose"><p>{project.purpose}</p></Block>
        <Block h="What I Built"><ul className="dash-list">{project.built.map((p) => <li key={p}>{p}</li>)}</ul></Block>
        <Block h="Technology"><p className="techline mono">{project.tech.map((t) => <span key={t}>{t}</span>)}</p></Block>
        <Block h="Deployment / Production"><p>{project.deploy}</p></Block>
      </div>
    </div>
  );
}
