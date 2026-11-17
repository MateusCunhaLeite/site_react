import { Link } from 'react-router-dom';
import { projeto } from '../data/pfc.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          <strong>{projeto.nome}</strong> · {projeto.subtitulo}
        </p>
        <nav aria-label="Rodapé" className="footer__nav">
          <Link to="/projeto">Projeto</Link>
          <Link to="/ia">Diário de IA</Link>
          <Link to="/entrega">Entrega</Link>
        </nav>
        <p className="footer__small">Feito com React + Vite · {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
