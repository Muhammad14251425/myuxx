import Arrow from "@/public/assets/arrow.png"
import Image from "next/image"
import gradient from "@/public/assets/Gradient.svg"

const Cta = () => {
  return (
    <div className=' rounded-[16px] bg-custom-image w-full md:bg-custom-imag '>
            <h1 className='pt-[57px] text-[#FFFFFF] text-center text-[32px] pb-6 font-medium leading-[40px] lg:text-[56px] lg:leading-[64px] lg:pt-[89px] lg:px-[370px] '>Monitor your website like a pro</h1>
            <p className='text-[#FFFFFF] text-[16px] leading-[24px] pb-8 text-center lg:text-[18px] lg:leading-[28px] lg:pt-12'>Join over 800+ happy site owners boosting productivity and efficiency!</p>
            <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:items-center lg:justify-center lg:gap-x-[40px] lg:pb-16 lg:pt-4">
            <button className='text-[#EB2891] px-8 py-4  font-medium leading-6 text-[18px] rounded-[8px]  bg-white'>Try for free</button>
            <div className="flex gap-x-3  items-center pb-[57px] lg:pb-0">
                <p className="text-[#FFFFFF] text-[18px] font-medium leading-[24px]">Contact Sales</p>
                <Image src={Arrow} alt="arrow"  />
            </div>
            </div>
    </div>
  )
}

export default Cta

// bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500