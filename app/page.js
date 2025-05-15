import Image from "next/image";
import { IoLogoHtml5 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";


export default function Home() {
  return (
    <>
    <div className="relative w-full h-[500px] bg-slate-900 flex justify-center items-center ">
    
      <Image
        src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1746021876/ales-nesetril-Im7lZjxeLhg-unsplash_vneln2.jpg"
        alt="//"
        width={600}
        height={400}
        className="rounded-md w-[100%] h-[100%]  opacity-40"/>

   

      <div className="absolute text-white text-center p-6">
     <h1 className="text-5xl font-extrabold animate-fade-in-down text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
      Highbee 
      </h1>
  
      <p className="text-xl animate-fade-in-up mt-4 opacity-80">
      Front-End Developer
      </p>
      <p className="text-xl animate-fade-in-up mt-4 opacity-80">
      Transforming Ideas Into Code
      </p>
      <p className="text-xl animate-fade-in-up mt-4 opacity-80">
      Bringing Designs to Life with Code
      </p>
      <button className="mt-6 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
      Discover My Work
      </button>
   
      </div>
     </div>
 

  <div className="flex-col flex justify-center mt-7 p-1.5 gap-3  ">
    <div className="flex justify-center gap-3">

    <div className="w-[50%] h-[100%] ">
      <a href="https://superdata-lime.vercel.app/" >
                <Image src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747071945/superdata2_afaa9i.png" 
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
  <button  className="mt-6 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up m-auto">
      <a href="/Projects">See More Projects</a>

      </button>
</div>

<div className="w-[100%]  flex-col  flex gap-3 justify-center content-center p-4 mt-20 ">
<div className="flex flex-col md:flex-row gap-4 ">
<div className="w-[100%] h-[200px] bg-slate-600 flex flex-col items-center justify-center  gap-4 text-white p-4 md:w-full">
<IoLogoReact  className="text-[4.2rem]"/>
  <span className="text-2xl font-semibold">REACT</span>
</div>
<div className="w-[100%] h-[200px] bg-slate-600 flex flex-col items-center justify-center  gap-4 text-white p-4 md:w-full">
<SiTailwindcss className="text-[4.2rem]"/>
  <span className="text-2xl font-semibold">TAILWIND</span>
</div>
<div className="w-[100%] h-[200px] bg-slate-600 flex flex-col items-center justify-center  gap-4 text-white p-4 md:w-full">
<IoLogoGithub className="text-[4.2rem]"/>
  <span className="text-2xl font-semibold">GITHUB</span>
</div>

</div>
<div className="flex flex-col md:flex-row gap-4">
<div className="w-[100%] h-[200px] bg-slate-600 flex flex-col items-center justify-center  gap-4 text-white p-4 md:w-full">
<IoLogoHtml5 className="text-[4.2rem]"/>
  <span className="text-2xl font-semibold">HTML</span>
</div>
<div className="w-[100%] h-[200px] bg-slate-600 flex flex-col items-center justify-center  gap-4 text-white p-4 md:w-full">
<SiJavascript className="text-[4.2rem]"/>
  <span className="text-2xl font-semibold">JAVASCRIPT</span>
</div>
<div className="w-[100%] h-[200px] bg-slate-600 flex flex-col items-center justify-center  gap-4 text-white p-4 md:w-full">
<DiCss3  className="text-[4.2rem]"/>
  <span className="text-2xl font-semibold">CSS</span>
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
