import meuVideo from '../../public/assets/video-unidas.mp4'

export function VideoPlayer() {
  return (
    <div className="px-60 py-12">
      <video controls width="100%">
        <source src={meuVideo} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  )
}