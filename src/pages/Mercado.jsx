import Reveal from '../components/Reveal.jsx';
import { mercado } from '../data/pfc.js';

export default function Mercado() {
  return (
    <>
      <header className="page-header container">
        <Reveal>
          <p className="eyebrow">Mercado de trabalho</p>
          <h1>Por que o mercado busca React</h1>
          <p className="lead">{mercado.intro}</p>
        </Reveal>
      </header>

      <section className="container secao">
        <Reveal>
          <h2>Empresas que usam React</h2>
          <ul className="pilulas" aria-label="Empresas">
            {mercado.empresas.map((e) => (
              <li key={e} className="pilula">{e}</li>
            ))}
          </ul>
          <p className="rotulo">e muitas startups e freelances</p>
        </Reveal>
      </section>

      <section className="container secao duas-colunas">
        <Reveal className="card">
          <h3>Áreas de atuação</h3>
          <ul className="lista-check">
            {mercado.areas.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </Reveal>
        <Reveal atraso={120} className="card">
          <h3>Oportunidades de carreira</h3>
          <ul className="lista-check">
            {mercado.carreiras.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
