import { useEffect, useRef, useState } from 'react';

// Envolve um bloco e o faz aparecer suavemente quando entra na tela.
export default function Reveal({ children, atraso = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Sem suporte a IntersectionObserver, mostra direto.
    if (!('IntersectionObserver' in window)) {
      setVisivel(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visivel ? 'reveal--visivel' : ''} ${className}`}
      style={{ transitionDelay: `${atraso}ms` }}
    >
      {children}
    </Tag>
  );
}
