import { FaEnvelope, FaLinkedinIn, FaMailchimp, FaPhone, FaTelegram } from "react-icons/fa"
import { FaLocationDot, FaLocationPin, FaLocationPinLock } from "react-icons/fa6"
import { SiGithub, SiLinkedin } from "react-icons/si"
import Footer from "../components/Footer"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {


const [formData,setFormData] = useState({
  user_name:"",
  user_email:"",
  subject:"",
  message:"",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_6jwb5co",         //Service ID
      "template_u1i9gw9",  //template_id
      formData,
      "gsmR-75jRkmA2GmQ1"                      //"PUBLIC_KEY"
    )
    .then(() => {
      alert("Thank you! Your message has been sent.");
    })
    .catch((error) => {
      console.log(error);
    });
};

  return (
    <div className="min-h-screen bg-slate-900  flex flex-col items-center">

      <div className="space-y-15 flex flex-col justify-start items-center mt-10">
        <h1 className="text-cyan-300 text-5xl font-bold">Contact Me</h1>
        <h1 className="text-stone-400 text-4xl font-bold">Get In Touch</h1>
      </div>

      <div className="flex justify-evenly items-start p-2 mt-10 gap-x-25">
        {/* Right Side Container */}
        <div className="flex flex-col justify-center items-start p-2">

          {/* Description */}
          <div className="flex flex-col w-130">
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

<div className="bg-slate-900/60 backdrop-blur-sm border-2 border-cyan-400 rounded-3xl p-10 w-130 mt-5">
  <form onSubmit={sendEmail} className="flex flex-col gap-5">
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          placeholder="Enter Your Name"
          className="w-full p-3 bg-slate-900 border border-cyan-400 rounded-xl text-white outline-none focus:shadow-[0_0_15px_#22d3ee]"
        />
        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          placeholder="Enter Your Email"
          className="w-full p-3 bg-slate-900 border border-cyan-400 rounded-xl text-white outline-none focus:shadow-[0_0_15px_#22d3ee]"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full p-3 bg-slate-900 border border-cyan-400 rounded-xl text-white outline-none focus:shadow-[0_0_15px_#22d3ee]"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          placeholder="Type your message..."
          className="w-full p-3 bg-slate-900 border border-cyan-400 rounded-xl text-white outline-none resize-none focus:shadow-[0_0_15px_#22d3ee]"
        />
        <button
          type="submit"
          className="bg-cyan-400 text-black font-bold py-3 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-[0_0_15px_#22d3ee]"
        >
          Send Message
        </button>
  </form>
  </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-10">
        <Footer />
      </div>
    </div>
  )
}

export default Contact