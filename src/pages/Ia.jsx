import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import { diarioIA, checklistRevisao } from '../data/pfc.js';

export default function Ia() {
  const [marcados, setMarcados] = useState({});
  const total = checklistRevisao.length;
  const feitos = Object.values(marcados).filter(Boolean).length;

  function alternar(i) {
    setMarcados((m) => ({ ...m, [i]: !m[i] }));
  }

  return (
    <>
      <header className="page-header container">
        <Reveal>
          <p className="eyebrow">Diário de IA</p>
          <h1>Pedir, revisar, corrigir</h1>
          <p className="lead">
            A IA entrega rascunhos. A qualidade vem do prompt e da revisão. Abaixo, um ciclo de
            exemplo em três passos.
          </p>
        </Reveal>
      </header>

      <section className="container secao">
        <div className="ciclo">
          <Reveal className="card ciclo__passo">
            <span className="ciclo__numero">1</span>
            <h3>Prompt vago</h3>
            <pre className="prompt prompt--ruim"><code>{diarioIA.promptRuim}</code></pre>
            <p className="rotulo">Problemas do resultado</p>
            <ul className="lista-x">
              {diarioIA.problemasRuim.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal atraso={120} className="card ciclo__passo">
            <span className="ciclo__numero">2</span>
            <h3>Prompt estruturado</h3>
            <pre className="prompt prompt--bom"><code>{diarioIA.promptBom}</code></pre>
            <p className="rotulo">Por que funciona</p>
            <ul className="lista-check">
              {diarioIA.ajustesBom.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal atraso={240} className="card ciclo__passo">
            <span className="ciclo__numero">3</span>
            <h3>Revisão antes de aceitar</h3>
            <p className="lead">Use a lista ao receber qualquer código da IA.</p>
            <div className="progresso" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={feitos}>
              <span style={{ width: `${(feitos / total) * 100}%` }} />
            </div>
            <p className="rotulo">{feitos} de {total} verificados</p>
            <ul className="checklist">
              {checklistRevisao.map((item, i) => (
                <li key={item}>
                  <label>
                    <input type="checkbox" checked={!!marcados[i]} onChange={() => alternar(i)} />
                    <span>{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container secao">
        <Reveal className="chamada">
          <div>
            <h2>Uso de IA no PFC</h2>
            <p className="lead">
              A atividade permite até 40% de uso de IA. O objetivo é aprender a pedir, revisar e
              corrigir, que é a rotina de qualquer desenvolvedor hoje. A IA não substitui o
              entendimento do que está sendo entregue.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
