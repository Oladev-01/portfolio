import Image from "next/image";
const  About = ()=>{
  return (
<div className="w-full flex gap-2.5 mt-3.5 flex-col-reverse md:flex-row-reverse p-4">

      <div className="w-[100%] flex justify-center content-center" >
       <Image src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747063271/IMG_0294_lx5c4w.jpg"
             alt="hero"
             width={300}
             height={300}
             className="w-[80%] h-[80%]"
             />

      </div>
      <div className="w-[100%] flex-col gap-2" >
      <span className="text-2xl font-semibold ">ABOUT ME</span>
      <p className="opacity-75 leading-10 ">Hi, I'm Highbee — a passionate Front-End Developer with a mission to transform ideas into elegant, interactive digital experiences. I specialize in crafting responsive and performant user interfaces using modern tools like React, Next.js, and Tailwind CSS.

Every line of code I write is driven by creativity, curiosity, and a deep love for building intuitive web solutions. From wireframes to production, I thrive on turning static designs into smooth, living web applications.

When I’m not coding, I’m exploring the latest in design trends, learning new technologies, or sharpening my UI/UX sense. I believe in clean code, bold ideas, and collaboration that leads to impactful results.

Let’s build something extraordinary together.</p>

      </div>




    </div>
  )
}

export default About
