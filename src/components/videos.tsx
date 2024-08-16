import meuVideo from '../../public/assets/video-unidas.mp4'

export function VideoPlayer() {
  return (
    <div className="px-56 py-6">
      <video controls autoPlay width="100%">
        <source src={meuVideo} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  )
}