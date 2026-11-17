import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Projeto from './pages/Projeto.jsx';
import Ia from './pages/Ia.jsx';
import ReactVsJs from './pages/ReactVsJs.jsx';
import Mercado from './pages/Mercado.jsx';
import Entrega from './pages/Entrega.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <div className="app">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <ScrollToTop />
      <Navbar />
      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/ia" element={<Ia />} />
          <Route path="/react-vs-js" element={<ReactVsJs />} />
          <Route path="/mercado" element={<Mercado />} />
          <Route path="/entrega" element={<Entrega />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
