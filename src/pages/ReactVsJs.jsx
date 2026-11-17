import Reveal from '../components/Reveal.jsx';
import CompareSlider from '../components/CompareSlider.jsx';
import { exemplos, comparativo, quandoReact, quandoJs } from '../data/pfc.js';

export default function ReactVsJs() {
  return (
    <>
      <header className="page-header container">
        <Reveal>
          <p className="eyebrow">React × JavaScript puro</p>
          <h1>Quando usar cada um</h1>
          <p className="lead">
            React não substitui HTML, CSS ou JavaScript. Ele organiza o uso dessas linguagens em
            componentes. Arraste a barra para comparar o mesmo resultado nas duas abordagens.
          </p>
        </Reveal>
      </header>

      <section className="container secao">
        <Reveal>
          <CompareSlider antes={exemplos.antes} depois={exemplos.depois} />
        </Reveal>
      </section>

      <section className="container secao">
        <Reveal>
          <h2>Comparativo direto</h2>
          <div className="tabela-wrap">
            <table className="tabela">
              <thead>
                <tr>
                  <th scope="col">Critério</th>
                  <th scope="col">React</th>
                  <th scope="col">JS puro</th>
                </tr>
              </thead>
              <tbody>
                {comparativo.map((c) => (
                  <tr key={c.criterio}>
                    <th scope="row">{c.criterio}</th>
                    <td>{c.react}</td>
                    <td>{c.js}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="container secao duas-colunas">
        <Reveal className="card">
          <h3>Use React quando…</h3>
          <ul className="lista-check">
            {quandoReact.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </Reveal>
        <Reveal atraso={120} className="card">
          <h3>Use HTML + JS puro quando…</h3>
          <ul className="lista-check">
            {quandoJs.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
