import { useState } from 'react';

// Dois códigos sobrepostos: arraste para revelar o "antes" (JS puro) e o "depois" (React).
export default function CompareSlider({ antes, depois }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="compare">
      <div className="compare__palco">
        <pre className="compare__codigo compare__codigo--depois" aria-label="Exemplo em React">
          <span className="compare__rotulo">React</span>
          <code>{depois}</code>
        </pre>

        <pre
          className="compare__codigo compare__codigo--antes"
          aria-label="Exemplo em JavaScript puro"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <span className="compare__rotulo">JS puro</span>
          <code>{antes}</code>
        </pre>

        <div className="compare__linha" style={{ left: `${pos}%` }} aria-hidden="true" />
      </div>

      <input
        className="compare__range"
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Arraste para comparar JavaScript puro e React"
      />
    </div>
  );
}
