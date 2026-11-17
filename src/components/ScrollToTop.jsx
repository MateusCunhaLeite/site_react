import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Ao trocar de página, volta ao topo (o React Router não faz isso sozinho).
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
