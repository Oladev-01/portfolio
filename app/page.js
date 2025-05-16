import Image from "next/image";
import { SiJavascript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import {
  SiPython,
  SiDjango,
  SiFlask,
  SiWebsocket,       // if available
  SiLivekit,         // if available
  SiJsonwebtokens,   // JWT logo
  SiNodedotjs,
  SiC
} from "react-icons/si";

const projects = [
  {
    title: "Logistics Platform API",
    desc:
      "Collaborated with partners, built real-time logistics solutions using WebSockets to connect drivers and users, enabling live shipment tracking, route optimization, and efficient delivery management and as well secure payment integration.",
    img: "/images/logistics2.jpg",
    link: "https://github.com/TychiqueKadi2/toota-mobile-sa",
    tags: ["Django", "PostgreSQL", "WebSockets", "JWT", "Redis", "PayStack"],
  },
  {
    title: "Online Marktplace API",
    desc:
      "Collaborated with partners, developed a comprehensive marketplace API with user authentication, product management, instant notification to buyer and seller, secure payment integration and order processing.",
    img: "/images/cart.jpg",
    link: "https://github.com/Oladev-01/BuyShop",
    tags: ["Django", "Redis", "PostgreSQL", "JWT"],
  },
  {
    title: "AI Virtual Assistant",
    desc:
      "Developed a virtual assistant using Groq AI and LiveKit API for real-time interaction and communication with customers providing instant responses to queries based on trained business model.",
    img: "/images/assistant.jpg",
    link: "https://github.com/Oladev-01/ai-agent",
    tags: ["Python", "Groq", "LiveKit"],
  }
]


export default function Home() {
  return (
    <>
      <div className="relative w-full h-[500px] bg-slate-900 flex justify-center items-center ">

        <Image
          src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1746021876/ales-nesetril-Im7lZjxeLhg-unsplash_vneln2.jpg"
          alt="//"
          width={600}
          height={400}
          className="rounded-md w-[100%] h-[100%]  opacity-40" />



        <div className="absolute text-white text-center p-6">
          <h1 className="text-5xl font-extrabold animate-fade-in-down text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            MOJIBOLA OLALEKAN
          </h1>

          <p className="text-xl animate-fade-in-up mt-4 opacity-80">
            Back-End Developer
          </p>
          <p className="text-xl animate-fade-in-up mt-4 opacity-80">
            Transforming Ideas Into Code
          </p>
          <p className="text-xl animate-fade-in-up mt-4 opacity-80">
            Powering great design with smart backend logic.
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
            Discover My Work
          </button>

        </div>
      </div>

      <div className="max-w-6xl mx-auto grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-7 p-1.5">
        {projects.map((p) => (
          <div
            key={p.title}
            className="relative bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Smaller image height (e.g. h-36 instead of h-48) */}
            <div className="relative h-36 overflow-hidden rounded-t-xl">
              <Image
                src={p.img}
                alt={p.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-[#1a1a2e] bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <a
                  href={p.link}
                  className="px-4 py-2 bg-[#1a1a2e] text-white rounded-md font-medium"
                >
                  View API
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                {p.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Centered button below the grid */}
        <div className="sm:col-span-2 lg:col-span-3 flex justify-center">
          <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
            <a href="/Projects">See More Projects</a>
          </button>
        </div>
      </div>

      {/* <div className="flex-col flex justify-center mt-7 p-1.5 gap-3  ">
        <div className="flex justify-center gap-3">

          <div className="w-[50%] h-[100%] ">
            <a href="https://superdata-lime.vercel.app/" >
              <Image src="/images/logistics.jpg"
                alt="Superdata"
                width={700}
                height={500}
                className="w-[100%] h-[100%]"
              />
            </a>
          </div>
          <div className="w-[50%] h-[100%]">
            <a href="https://ibrahim-tech.vercel.app/" >
              <Image src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747071885/tatechub_dz83yd.png"
                alt="tatechhub"
                width={700}
                height={500}
                className="w-[100%] h-[100%] "
              />
            </a>
          </div>
          <div className="w-[50%] h-[100%] ">
            <a href="https://superjara-qi3w.vercel.app/" >
              <Image src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747071917/superjara_lmttxv.png"
                alt="Superjara"
                width={700}
                height={500}
                className="w-[100%] h-[100%] "
              />
            </a>
          </div>
        </div>
      </div> */}

      <div className="w-[100%]  flex-col  flex gap-3 justify-center content-center p-4 mt-20 ">
        <div className="flex flex-col md:flex-row gap-4 ">
          <div className="w-[100%] h-[200px] bg-slate-600 flex flex-col items-center justify-center  gap-4 text-white p-4 md:w-full">
            <IoLogoReact className="text-[4.2rem]" />
            <span className="text-2xl font-semibold">REACT</span>
          </div>
          <div className="w-[100%] h-[200px] bg-slate-600 flex flex-col items-center justify-center  gap-4 text-white p-4 md:w-full">
            <SiPython className="text-[4.2rem]" />
            <span className="text-2xl font-semibold">PYTHON</span>
          </div>
          <div className="w-[100%] h-[200px] bg-slate-600 flex flex-col items-center justify-center  gap-4 text-white p-4 md:w-full">
            <SiJsonwebtokens className="text-[4.2rem]" />
            <span className="text-2xl font-semibold">JWT</span>
          </div>

        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-[100%] h-[200px] bg-slate-600 flex flex-col items-center justify-center  gap-4 text-white p-4 md:w-full">
            <SiFlask className="text-[4.2rem]" />
            <span className="text-2xl font-semibold">FLASK</span>
          </div>
          <div className="w-[100%] h-[200px] bg-slate-600 flex flex-col items-center justify-center  gap-4 text-white p-4 md:w-full">
            <SiNodedotjs className="text-[4.2rem]" />
            <span className="text-2xl font-semibold">NODE.JS</span>
          </div>
          <div className="w-[100%] h-[200px] bg-slate-600 flex flex-col items-center justify-center  gap-4 text-white p-4 md:w-full">
            <SiDjango className="text-[4.2rem]" />
            <span className="text-2xl font-semibold">DJANGO</span>
          </div>
        </div>

        <p className="text-amber-500 text-4xl m-auto">My Skills </p>



      </div>

      <div className="w-[100%] h-[400px] ">
        <Image src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1746354536/gaming-rgb-keyboard-dark-background_77190-8079_jagat3.jpg"
          alt="Keyboard"
          width={800}
          height={600}
          className="object-cover w-[100%] h-[100%]"

        />

      </div>



    </>

















  );
}
