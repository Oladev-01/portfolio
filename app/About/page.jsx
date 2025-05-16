import Image from "next/image";
const About = () => {
  return (
    <div className="w-full flex gap-2.5 mt-3.5 flex-col-reverse md:flex-row-reverse p-4">

      <div className="w-[100%] flex justify-center content-center">
        <Image
          src="/images/profile.jpg"
          alt="hero"
          width={300}
          height={300}
          className="w-[80%] h-[80%] rounded-full object-cover"
        />
      </div>

      <div className="w-[100%] flex flex-col gap-4">
        <span className="text-2xl font-semibold">ABOUT ME</span>
        <p className="opacity-80 leading-normal">
          I'm Mojibola Olalekan, a versatile and detail-driven Backend Developer with a strong foundation in both Python and JavaScript ecosystems. I specialize in building scalable, maintainable server-side systems using frameworks like Flask, Django, FastAPI, Node.js, and Express. My backend expertise is reinforced by robust database management skills with PostgreSQL, MongoDB, and Redis, enabling efficient data modeling and performance optimization. I'm adept at designing secure, RESTful APIs and integrating real-time features using WebSockets, including live communication layers for interactive applications. I’ve also worked on seamless payment gateway integrations and recently began incorporating AI technologies into backend workflows to enhance application intelligence. Beyond technical development, I’m committed to collaborative growth and giving back to the community. With an analytical mindset, adaptive learning, and a passion for solving real-world problems, I consistently deliver backend solutions that are secure, efficient, and aligned with business goals.
        </p>
      </div>
    </div>
  )
}

export default About
