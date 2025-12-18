import React from "react";
import amit from "../assets/images/amit-biswas-reactjs.jpg";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={amit}
              alt="Amit Biswas"
              className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500"
            />

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800">Amit Biswas </h1>
              <p className="text-indigo-600 font-medium text-lg mt-1">
                Frontend Developer
              </p>
              <p className="text-gray-600 mt-4  font-bold">
                HTML5, CSS3, JavaScript (ES6+), React.js, Redux Toolkit, Context
                API, RTK Query, API Integration, Tailwind CSS, Bootstrap,
                Formik, Chakra UI, Responsive & High-Performance Web Development
              </p>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-10" />

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
              Professional Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Skill Item */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">HTML & CSS</span>
                  <span className="text-sm text-gray-500">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full w-[90%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">
                    {" "}
                    Bootstrap and Tailwind{" "}
                  </span>
                  <span className="text-sm text-gray-500">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full w-[80%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">JavaScript</span>
                  <span className="text-sm text-gray-500">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full w-[60%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">React JS</span>
                  <span className="text-sm text-gray-500">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full w-[60%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Skill Details
            </h2>
            <p className="text-gray-600 leading-relaxed pb-5">
            I am writing to express my interest in the Frontend Developer position at your esteemed organization. With over 12 years of experience in frontend development and a strong command of modern web technologies, I am confident in my ability to contribute effectively to your development team.
            </p>
             <p className="text-gray-600 leading-relaxed pb-5">
I have deep expertise in HTML5, CSS3, JavaScript (ES6+), and over the years have worked extensively with Bootstrap (9 years) and Tailwind CSS (3 years) to build responsive, mobile-first, and visually appealing interfaces. For the past 1.6 years, I have been focused on React.js, Redux Toolkit, and API integrations, where I successfully built scalable applications with an emphasis on clean code, performance optimization, and cross-platform compatibility.             </p>
             <p>
              I am also proficient in UI/UX conversion from Figma to functional UI, ensuring design consistency while maintaining high performance. My work style prioritizes collaboration, efficiency, and delivering business-focused solutions.
             </p>
               <hr className="my-10" />
               <p className="text-gray-600 leading-relaxed pb-5">

               </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
