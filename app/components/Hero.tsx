import BlurArrow from "@/public/assets/blue-button.svg"
import Image from "next/image"
import gradient from "@/public/assets/Gradient.svg"
import herimg from "@/public/assets/Image.svg"
import Google from "@/public/assets/Google.svg"
import Slack from "@/public/assets/Slack.svg"
import Trustpiolet from "@/public/assets/Trustpilot.svg"
import Cnn from "@/public/assets/CNN.svg"
import Clutch from "@/public/assets/Clutch.svg"



const Hero = () => {
  return (
    <div className="pt-4 lg:pt-10">
      <div className='px-[20px] lg:px-[297px] lg:pb-16'>

        <h1 className='text-[#172026] text-center leading-[40px] text-[32px] font-medium lg:leading-[102px] lg:text-[94px] lg:flex lg:flex-row'>
          Start monitoring your website like a pro
        </h1>
        <p className='text-[#36485C] leading-[24px] text-[16px] text-center pt-[24px] font-mediumnpm run lg:leading-[28px] lg:text-[28px]'>
          Get a bird{"'"}s eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!
        </p>
        <div className='flex w-full pt-8  lg:justify-center lg:items-center'>
          <button className='w-1/2 px-8 py-4 bg-[#4328EB] text-white rounded lg:w-fit' >Try for free</button>
          <button className='text-[#4328EB] w-1/2 flex items-center pl-[24px] gap-x-[12px] lg:pl-[40px] lg:w-fit'>
            View Pricing
            <span>
              <Image src={BlurArrow} alt="img" />
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
          
            src={herimg}
            alt="hero image"
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20 pt-6">
            <p className="text-[#FFFFFF] text-center lg:text-left lg:text-[18px] w-full h-full">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-2 items-center gap-x-[32px] justify-center justify-items-center lg:w-1/2 lg:gap-x-2 px-[20px] align-middle  ">
              <Image src={Google} alt="" />
              <Image src={Slack} alt="" />
            </div>
            <div className=" lg:w-1/2 h-full grid grid-cols-3 gap-x-2 place-items-center pl-6 lg:gap-x-4">
              <Image src={Trustpiolet} alt="" />
              <Image src={Cnn} alt="" />
              <Image src={Clutch} alt="" className="-ml-8"/>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Hero