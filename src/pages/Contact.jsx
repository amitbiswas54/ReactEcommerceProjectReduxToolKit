import React from 'react'
import {
  Phone,
  Mail,
  Github,
  Linkedin,
  MessageCircle
} from "lucide-react";


import amit from "../assets/images/amit-biswas-reactjs.jpg";


function Contact() {
  return (
 <>
  <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">

        {/* Profile Image */}
        <div className="flex justify-center -mt-20">
          <img
            src={amit}
            alt="Amit Biswas"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>

        {/* Info */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold text-gray-800">
            Amit Biswas
          </h2>
          <p className="text-indigo-600 text-sm font-medium">
            Frontend Developer
          </p>
        </div>

        {/* Contact Details */}
        <div className="mt-6 space-y-3 text-sm text-gray-700">

          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-indigo-600" />
            <span>+91 90070 97330 </span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-indigo-600" />
            <span>amit.biswas54@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <MessageCircle className="w-4 h-4 text-green-600" />
            <span>+91 90070 97330 </span>
          </div>

        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-4">

          <a
            href="https://github.com/amitbiswas54"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <Github className="w-5 h-5 text-gray-700" />
          </a>

          <a
            href="https://www.linkedin.com/in/amit-biswas-uideveloper-html-css-react/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <Linkedin className="w-5 h-5 text-blue-600" />
          </a>

        </div>

      </div>
    </div>
 </>
  )
}

export default Contact