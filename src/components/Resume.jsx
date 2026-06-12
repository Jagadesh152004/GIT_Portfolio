
const Resume = () => {
  return (
    <div className="min-h-screen bg-black w-auto flex justify-center items-center">
      <iframe src="/public/cv/Resume.pdf"
      title="My Resume"
      className="w-full min-h-screen border border-cyan-400 rounded-2xl">
      </iframe>
    </div>
  )
}

export default Resume;
