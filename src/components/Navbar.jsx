import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { projeto } from '../data/pfc.js';

const links = [
  { to: '/', label: 'Início' },
  { to: '/projeto', label: 'Projeto' },
  { to: '/ia', label: 'Diário de IA' },
  { to: '/react-vs-js', label: 'React × JS' },
  { to: '/mercado', label: 'Mercado' },
  { to: '/entrega', label: 'Entrega' },
];

export default function Navbar() {
  const [aberto, setAberto] = useState(false);
  const { pathname } = useLocation();

  // Fecha o menu mobile ao navegar.
  useEffect(() => setAberto(false), [pathname]);

  return (
    <header className={`navbar ${aberto ? 'navbar--aberto' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="brand" aria-label={`${projeto.nome} — início`}>
          <span className="brand__mark" aria-hidden="true">R</span>
          <span className="brand__nome">{projeto.nome}</span>
        </Link>

        <button
          className="navbar__toggle"
          aria-expanded={aberto}
          aria-controls="menu-principal"
          onClick={() => setAberto((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden="true">{aberto ? '✕' : '☰'}</span>
        </button>

        <nav id="menu-principal" className="navbar__menu" aria-label="Principal">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className="navbar__link">
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
