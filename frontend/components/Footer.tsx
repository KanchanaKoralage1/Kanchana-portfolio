"use client"
import { FaLocationArrow } from "react-icons/fa6"
import { socialMedia } from "@/data"
import MagicButton from "./ui/MagicButton"

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-20 " id="contact" >
     
     <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/footer-grid.svg" alt="footer" className="w-full h-full opacity-80" />
     </div>

     <div className="flex flex-col items-center">
       <h1 className="heading lg:max-w-[45vw]">
  Ready to grow and <span className="text-purple-500">create impactful</span> web and mobile experiences?
</h1>
        <p className="md:mt-10 my-5 text-center">Reach out to me today and let's discuss how I can help to achive your goals.</p>

        <a href="mailto:itsmekanchanakoralage@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="text-sm md:text-base px-4 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30"
            />
        </a>
     </div>
     <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
       <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2025 Kanchana Koralage. All rights reserved</p> 
       <div className="flex items-center md:gap-3 gap-6">
        {socialMedia.map((profile)=>(
            <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-80 bg-black-200 rounded-lg border border-black-300">
                <img src={profile.img} alt="profile" width="20" height="20"/>
            </div>
        ))}
       </div>
     </div>
    </footer>
  )
}

export default Footer
