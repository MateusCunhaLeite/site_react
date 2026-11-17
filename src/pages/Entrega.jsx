import Reveal from '../components/Reveal.jsx';
import { entrega } from '../data/pfc.js';

const comandos = `git add .
git commit -m "Página inicial do PFC"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main`;

export default function Entrega() {
  return (
    <>
      <header className="page-header container">
        <Reveal>
          <p className="eyebrow">Entrega final</p>
          <h1>Do repositório ao ar</h1>
          <p className="lead">
            Entrega: o projeto React funcionando, com código no GitHub e site publicado na Vercel.
          </p>
        </Reveal>
      </header>

      <section className="container secao">
        <Reveal>
          <h2>Critérios</h2>
          <div className="tabela-wrap">
            <table className="tabela">
              <thead>
                <tr>
                  <th scope="col">Critério</th>
                  <th scope="col">Como está no projeto</th>
                </tr>
              </thead>
              <tbody>
                {entrega.map((e) => (
                  <tr key={e.etapa}>
                    <th scope="row">{e.etapa}</th>
                    <td>{e.feito}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="container secao">
        <Reveal>
          <h2>Publicar no GitHub</h2>
          <p className="lead">Crie um repositório vazio no GitHub e rode no terminal, dentro da pasta do projeto:</p>
          <pre className="prompt"><code>{comandos}</code></pre>
        </Reveal>
        <Reveal atraso={120} className="card passos">
          <h3>Deploy na Vercel</h3>
          <ol>
            <li>Entre em vercel.com e clique em <strong>Add New → Project</strong>.</li>
            <li>Importe o repositório do GitHub.</li>
            <li>Confirme: framework <strong>Vite</strong>, comando <code>npm run build</code>, pasta <code>dist</code>.</li>
            <li>Clique em <strong>Deploy</strong>. Cada push na <code>main</code> gera uma nova versão.</li>
          </ol>
        </Reveal>
      </section>
    </>
  );
}
