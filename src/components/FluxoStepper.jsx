import { useState } from 'react';

// Linha do tempo interativa: ideia → protótipo → código → ajustes → entrega.
export default function FluxoStepper({ passos }) {
  const [ativo, setAtivo] = useState(0);
  const passo = passos[ativo];

  function onKeyDown(e, i) {
    if (e.key === 'ArrowRight') setAtivo((i + 1) % passos.length);
    if (e.key === 'ArrowLeft') setAtivo((i - 1 + passos.length) % passos.length);
  }

  return (
    <div className="fluxo">
      <ol className="fluxo__trilho" role="tablist" aria-label="Etapas do fluxo">
        {passos.map((p, i) => (
          <li key={p.id} className="fluxo__item">
            <button
              role="tab"
              id={`tab-${p.id}`}
              aria-selected={i === ativo}
              aria-controls="fluxo-painel"
              tabIndex={i === ativo ? 0 : -1}
              className={`fluxo__botao ${i <= ativo ? 'fluxo__botao--feito' : ''}`}
              onClick={() => setAtivo(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span className="fluxo__numero">{String(i + 1).padStart(2, '0')}</span>
              <span className="fluxo__titulo">{p.titulo}</span>
            </button>
          </li>
        ))}
      </ol>

      <div
        id="fluxo-painel"
        role="tabpanel"
        aria-labelledby={`tab-${passo.id}`}
        className="fluxo__painel card"
        key={passo.id}
      >
        <p className="eyebrow">Etapa {ativo + 1} de {passos.length}</p>
        <h3>{passo.titulo}</h3>
        <p className="lead">{passo.texto}</p>
        <p className="fluxo__entrada">
          <span>Entrada desta etapa:</span> {passo.entrada}
        </p>
      </div>
    </div>
  );
}
