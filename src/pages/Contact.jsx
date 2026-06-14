import { FaEnvelope, FaLinkedinIn, FaLocationArrow, FaMailchimp, FaPhone, FaTelegram, FaVoicemail } from "react-icons/fa"
import { FaLocationDot, FaLocationPin, FaLocationPinLock } from "react-icons/fa6"
import { SiGithub, SiLinkedin } from "react-icons/si"

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-900  flex flex-col items-center">

      <div className="space-y-10 flex flex-col justify-start items-center mt-30">
        <h1 className="text-cyan-300 text-5xl font-bold">Contact Me</h1>
        <h1 className="text-stone-400 text-4xl font-bold">Get In Touch</h1>
      </div>

      <div className="flex justify-center items-center border border-amber-50 p-2 mt-10">
        {/* Right Side Container */}
        <div className="flex flex-col justify-center items-start border border-amber-50 p-2">

          {/* Description */}
          <div className="flex flex-col">
            <h1 className="text-zinc-500 text-xl font-semibold font-mono">I'm always open to discussing new projects,</h1>
            <h1 className="text-zinc-500 text-xl font-semibold font-mono">internship opportunities, and collaborations.</h1>
            <h className="text-zinc-500 text-xl font-semibold font-mono">Let's connect and build something amazing together.</h>
          </div>
{/* Right side - contact Details */}
          <div className="flex flex-col justify-center items-start mt-15 gap-y-10">

            <div className="flex rounded-2xl">
              <FaEnvelope className="text-cyan-400 text-xl mt-5 mr-5" />
              <div className="text-lg font-medium text-slate-400 space-y-2">
                <h1 className="">Email</h1>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jagadeshwaran152004@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  jagadeshwaran152004@gmail.com
                </a>
              </div>
            </div>

            <div className="flex rounded-2xl">
              <FaPhone className="text-cyan-400 text-xl mt-5 mr-5" />
              <div className="text-lg font-medium text-slate-400 space-y-2">
                <h1 className="">Phone</h1>
                <a href="tel:+919876543210"
                  rel="noopener noreferrer"
                  target="_blank">
                  +91 76958877880
                </a>
              </div>
            </div>
          
            <div className="flex rounded-2xl">
              <SiLinkedin className="text-cyan-400 text-xl mt-5 mr-5" />
              <div className="text-lg font-medium text-slate-400 space-y-2">
                <h1>LinkedIn</h1>
                    <a
                      href="https://www.linkedin.com/in/jaga15/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Jagadeshwaran
                    </a>
              </div>
            </div>
          
            <div className="flex rounded-2xl">
              <SiGithub className="text-cyan-400 text-xl mt-5 mr-5" />
              <div className="text-lg font-medium text-slate-400 space-y-2">
                <h1>GitHub</h1>
                    <a
                      href="https://github.com/Jagadesh152004"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Jagadesh152004
                    </a>
              </div>
            </div>

            <div className="flex rounded-2xl">
              <FaLocationDot className="text-cyan-400 text-xl mt-5 mr-5" />
              <div className="text-lg font-medium text-slate-400 space-y-2">
                <h1>Location</h1>
                    <a
                      href="https://maps.google.com/?q=Coimbatore,Tamil Nadu,India"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                       Coimbatore, Tamil Nadu, India
                    </a>
              </div>
            </div>
          
          </div>
        </div>
<div className="p-2">hello</div>
      </div>
    </div>
  )
}

export default Contact