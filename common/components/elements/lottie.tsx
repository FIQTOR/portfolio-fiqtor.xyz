'use client'
import { useEffect, useRef, useState } from 'react';
import type { LottiePlayer } from 'lottie-web';
import Loading from '../layouts/loading';

export const Processor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        // path to your animation file, place it inside public folder
        path: '/lottie/processor.json',
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return <div ref={ref} />;
};
