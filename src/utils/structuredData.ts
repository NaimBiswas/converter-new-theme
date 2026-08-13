import { useEffect } from 'react';

export function useJsonLd(id: string, schema: object) {
  useEffect(() => {
    const key = `jsonld-${id}`;
    let el = document.getElementById(key) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = key;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
    return () => {
      document.getElementById(key)?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
}
