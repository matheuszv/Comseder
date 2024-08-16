import meuVideo from '../../public/assets/video-unidas.mp4'
import { useEffect, useRef } from 'react';

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current; // Armazena a referência atual em uma variável

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handlePlayVideo = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement?.play();
        } else {
          videoElement?.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayVideo, options);

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);


  return (
    <div className="px-40 py-6">
      <video controls autoPlay width="100%" ref={videoRef} loop className="shadow-xl">
        <source src={meuVideo} type="video/mp4"/>
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  )
}