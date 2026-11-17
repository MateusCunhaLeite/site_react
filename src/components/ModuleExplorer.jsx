import { useState } from 'react';

// Grade de módulos do backend. Clique em um para ver o que ele faz.
export default function ModuleExplorer({ modulos }) {
  const [ativo, setAtivo] = useState(modulos[0].nome);
  const modulo = modulos.find((m) => m.nome === ativo);

  return (
    <div className="modulos">
      <div className="modulos__grade" role="group" aria-label="Módulos do sistema">
        {modulos.map((m) => (
          <button
            key={m.nome}
            className={`modulo-chip ${m.nome === ativo ? 'modulo-chip--ativo' : ''}`}
            aria-pressed={m.nome === ativo}
            onClick={() => setAtivo(m.nome)}
          >
            <code>{m.nome}</code>
            <span>{m.titulo}</span>
          </button>
        ))}
      </div>

      <article className="card modulos__detalhe" key={modulo.nome}>
        <p className="eyebrow">Módulo <code>{modulo.nome}</code></p>
        <h3>{modulo.titulo}</h3>
        <p className="lead">{modulo.resumo}</p>
        <ul className="lista-check">
          {modulo.detalhes.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
