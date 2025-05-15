import Image from "next/image";
const  Projects= ()=>{
    return (
      
     <div className="w-[100%]  flex-col  gap-8 p-9  ">
      <h1 className="text-4xl font-light">PORTFOLIO</h1>
      <p className="backdrop-opacity-85">Checkout my recent work</p>
      <div className="w-[100%] flex  gap-9  flex-col md:flex-row">
        <div className="w-[100%] h-[300px] ">
          <a href="https://superdata-lime.vercel.app/" >
          <Image src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747071945/superdata2_afaa9i.png" 
          alt="Superdata"
          width={700}
          height={500}
          className="w-[100%] h-[100%]"
          />
          </a>
        </div>
        <div className="w-[100%] h-[300px] ">
          <a href="https://ibrahim-tech.vercel.app/" >
          <Image src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747071885/tatechub_dz83yd.png" 
          alt="tatechhub"
          width={700}
          height={500}
          className="w-[100%] h-[100%] "
          />
          </a>
        </div>
        <div className="w-[100%] h-[300px] ">
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
      <div className="w-[100%] flex  gap-9 mt-3.5 flex-col  md:flex-row">
        <div className="w-[100%] h-[300px] ">
          <a href="https://ibrahim-portfolio-bay.vercel.app/" >
          <Image src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747167076/portfolio_h8dal5.png" 
          alt="portfolio"
          width={700}
          height={500}
          className="w-[100%] h-[100%]"
          />
          </a>
        </div>
        <div className="w-[100%] h-[300px] ">
          <a href="https://jimone.vercel.app/" >
          <Image src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747071864/jimone_g5zws1.png" 
          alt="jimone"
          width={700}
          height={500}
          className="w-[100%] h-[100%] "
          />
          </a>
        </div>
        <div className="w-[100%] h-[300px] ">
          <a href="https://dog-rosy.vercel.app/" >
          <Image src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747071953/dog_xfzmrf.png" 
          alt="Dog"
          width={700}
          height={500}
          className="w-[100%] h-[100%] "
          />
          </a>
        </div>
        

      </div>

      
         
        
       
           
         </div>
    )
  }
  
  export default Projects
  

