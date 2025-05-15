import { IoHome } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const  Contact = ()=>{
    return (
      
      <div className="w-[100%]  flex gap-5 justify-center content-center p-9 flex-col  md:flex-row">
       
        <div className="w-[100%] ">
        <h1 className="text-4xl font-light">GET IN TOUCH</h1>
        <form className="flex-col flex gap-4  ">
         <textarea placeholder="Enter Message" className="w-[100%] h-[100px] p-2 border border-white-300 "></textarea>
         <label  className=" flex gap-6  ">
         <input type="text" placeholder="Enter your Name" className="border border-white-300 p-2 w-[100%]" />
         <input type="email" placeholder="Enter your Email " className="border border-white-300 p-2 w-[100%]" />
         </label>
         <input type="tel" placeholder="Enter your Phone Number" className="border border-white-300 p-2 w-[100%]" />
         <input type="text" placeholder="Enter Subject" className="border border-white-300 p-2 w-[100%]" />
         <button className="W-[100%] border border-white-500 p-3 ">SEND</button>

        </form>
        </div>
        <div className="w-full h-[100%] flex gap-9 justify-center p-12  flex-col ">
          <p className="text-4xl">CONTACT ME</p>

          <label >
          <span className="flex gap-1.5"><IoHome /> OSUN NIGERIA</span>
          <p className="opacity-23">Agunbelewo Area Osogbo</p>

          </label>
          <label >
          <span className="flex gap-1.5"><FaPhoneAlt /> +2348065351087</span>
          <p className="opacity-23">Mon to Friday 9am to 8pm</p>

          </label>
          <label >
          <span className="flex gap-1.5"><FaEnvelope /> ibrahimademola145@gmail.com</span>
          <p className="opacity-23">Send us Your query anytime</p>

          </label>

        </div>
      </div>
    )
  }
  
  export default Contact
  