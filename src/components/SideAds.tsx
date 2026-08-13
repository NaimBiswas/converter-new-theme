import React, { useEffect } from 'react';

const AD_KEY = 'b5efb7df9265ecc722618c33844fdcb7';
const AD_SRC = `https://canvassanymorephotography.com/${AD_KEY}/invoke.js`;

export const SideAds: React.FC = () => {
  useEffect(() => {
    const mountAd = (container: HTMLElement | null) => {
      if (!container) return;
      container.innerHTML = '';
      (window as any).atOptions = {
        key: AD_KEY,
        format: 'iframe',
        height: 600,
        width: 160,
        params: {},
      };
      const script = document.createElement('script');
      script.src = AD_SRC;
      script.async = true;
      container.appendChild(script);
    };

    mountAd(document.getElementById('side-ad-left'));
    mountAd(document.getElementById('side-ad-right'));

    return () => {
      document.getElementById('side-ad-left')?.replaceChildren();
      document.getElementById('side-ad-right')?.replaceChildren();
    };
  }, []);

  return (
    <>
      <aside
        id="side-ad-left"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
        aria-hidden="true"
      />
      <aside
        id="side-ad-right"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
        aria-hidden="true"
      />
    </>
  );
};
