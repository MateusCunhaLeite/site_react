import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import FluxoStepper from '../components/FluxoStepper.jsx';
import { projeto, fluxo, diarioIA } from '../data/pfc.js';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__texto">
            <p className="eyebrow">PFC · Programação para Internet</p>
            <h1>
              {projeto.nome}: <span className="gradiente">{projeto.subtitulo}</span>
            </h1>
            <p className="lead">{projeto.descricao}</p>
            <div className="hero__acoes">
              <Link to="/projeto" className="btn btn--primario">Conhecer o projeto</Link>
              <Link to="/ia" className="btn btn--secundario">Ver o diário de IA</Link>
            </div>
          </div>

          {/* Bloco de código: mostra um prompt estruturado, o tema central da atividade */}
          <figure className="terminal" aria-label="Exemplo de prompt estruturado">
            <div className="terminal__barra" aria-hidden="true">
              <span /><span /><span />
              <em>prompt.txt</em>
            </div>
            <pre><code>{diarioIA.promptBom}</code><span className="cursor" aria-hidden="true" /></pre>
          </figure>
        </div>
      </section>

      <section className="container secao">
        <Reveal>
          <ul className="stats">
            {projeto.stats.map((s) => (
              <li key={s.rotulo} className="stat card">
                <strong>{s.valor}</strong>
                <span>{s.rotulo}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="container secao">
        <Reveal>
          <p className="eyebrow">Fluxo de trabalho</p>
          <h2>Ideia → protótipo → código → ajustes → entrega</h2>
          <p className="lead">
            O site que você está vendo foi construído nesse ciclo. Clique em cada etapa.
          </p>
        </Reveal>
        <Reveal atraso={120}>
          <FluxoStepper passos={fluxo} />
        </Reveal>
      </section>

      <section className="container secao">
        <Reveal className="chamada">
          <div>
            <h2>A IA amplia você. Ela não decide por você.</h2>
            <p className="lead">
              Saber pedir é tão importante quanto saber programar. A regra é simples: nenhum
              trecho gerado pela IA entra no projeto sem ser lido, testado e corrigido.
            </p>
          </div>
          <Link to="/react-vs-js" className="btn btn--primario">Por que React?</Link>
        </Reveal>
      </section>
    </>
  );
}
