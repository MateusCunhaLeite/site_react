import Reveal from '../components/Reveal.jsx';
import ModuleExplorer from '../components/ModuleExplorer.jsx';
import { projeto, modulos } from '../data/pfc.js';

export default function Projeto() {
  return (
    <>
      <header className="page-header container">
        <Reveal>
          <p className="eyebrow">Projeto</p>
          <h1>Como o sistema é organizado</h1>
          <p className="lead">{projeto.descricao}</p>
        </Reveal>
      </header>

      <section className="container secao">
        <Reveal>
          <h2>Módulos</h2>
          <p className="lead">
            O backend é um único Lambda com router interno, atrás de uma API Gateway. Cada
            módulo tem a mesma estrutura de arquivos. Escolha um para ver o que ele faz.
          </p>
        </Reveal>
        <Reveal atraso={100}>
          <ModuleExplorer modulos={modulos} />
        </Reveal>
      </section>

      <section className="container secao">
        <Reveal>
          <h2>Stack</h2>
          <ul className="pilulas" aria-label="Tecnologias">
            {projeto.stack.map((t) => (
              <li key={t} className="pilula">{t}</li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
