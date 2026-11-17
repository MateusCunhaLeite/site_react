import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container secao notfound">
      <p className="eyebrow">Erro 404</p>
      <h1>Esta página não existe</h1>
      <Link to="/" className="btn btn--primario">Voltar ao início</Link>
    </section>
  );
}
