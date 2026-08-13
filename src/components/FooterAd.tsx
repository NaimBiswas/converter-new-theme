import React, { useEffect } from 'react';

const AD_KEY = '1d6436ef23fab74250a72f38d8291c4f';
const AD_SRC = `https://canvassanymorephotography.com/${AD_KEY}/invoke.js`;

export const FooterAd: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById('footer-ad');
    if (!container) return;
    container.innerHTML = '';
    (window as any).atOptions = {
      key: AD_KEY,
      format: 'iframe',
      height: 60,
      width: 468,
      params: {},
    };
    const script = document.createElement('script');
    script.src = AD_SRC;
    script.async = true;
    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return (
    <div
      id="footer-ad"
      className="flex justify-center py-6"
      aria-hidden="true"
    />
  );
};
