
const Project = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Video Container */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/40 z-10"/> {/* Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(1.2)' }}
        >
          <source src="/video/stars.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
  )
}

export default Project