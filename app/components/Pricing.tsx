import Image from 'next/image'
import check from "@/public/assets/check.svg"

const Pricing = () => {
  return (
    <div className='pb-[48px] lg:pb-[120px]'>
      <div className='flex flex-col gap-y-4 pb-[40px] '>
      <h1 className='text-[#172026] text-[24px] font-medium leading-[36px] text-center'>Flexible plans for you</h1>
      <p className='text-[#36485C] text-center'>No hidden fees!</p>
      </div>
        <div className='flex flex-col gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-6'>

        
      <div className='p-6 flex flex-col gap-y-4 bg-[#F5F4FF] rounded-[8px] ' >
        <div className='flex flex-col gap-y-3'>
        <h2 className='text-[#4328EB] text-[18px] font-medium leading-[24px]  '>Free Trial</h2>
        <p className='text-[#36485C] text-[16px] leading-[24px]'>Perfect for testing the waters</p>
        </div>
        <h2 className='text-[#172026] leading-[36px] text-[24px] font-medium'>
        $0
        <span className='text-[#5F7896] leading-[36px] text-[24px] font-medium'>
        /mo
        </span>
        </h2>
        <ul>
          <li className='flex items-center gap-x-4'>
            <span>
              <Image src={check} alt='' />
            </span>
            Lorem ipsum dolor sit amet</li>
          <li className='flex items-center gap-x-4'>
            <span>
              <Image src={check} alt='' />
            </span>
            Sed do eiusmod tempor incididunt</li>
          <li className='flex items-center gap-x-4'>
            <span>
              <Image src={check} alt='' />
            </span>
            Consectetur adipiscing elit</li>
        </ul>

        <button className='text-[#4328EB] font-medium leading-[24px] text-[16px] px-[30px] py-[14px] bg-[#FFFFFF]'>
          Start Trial</button>
      </div>

        <div className='bg-[#4328EB] p-6 rounded-[8px] flex flex-col gap-y-4'>
        <div className='flex flex-col gap-y-3'>
        <h2 className='text-[#FFFFFF] text-[18px] font-medium leading-[24px]  '>Business</h2>
        <p className='text-[#FFFFFF] text-[16px] leading-[24px]'>Perfect for small businesses</p>
        </div>
        <h2 className='text-[#FFFFFF] leading-[36px] text-[24px] font-medium'>
        $500
        <span className='text-[#FFFFFF] leading-[36px] text-[24px] font-medium'>
        /mo
        </span>
        </h2>
        <ul className='text-[#FFFFFF]'>
          <li className='flex items-center gap-x-4'>
            <span>
              <Image src={check} alt=''/>
            </span>
            Lorem ipsum dolor sit amet</li>
          <li className='flex items-center gap-x-4'>
            <span>
              <Image src={check} alt='' />
            </span>
            Sed do eiusmod tempor incididunt</li>
          <li className='flex items-center gap-x-4'>
            <span>
              <Image src={check} alt='' />
            </span>
            Consectetur adipiscing elit</li>
            <li className='flex items-center gap-x-4'>
            <span>
              <Image src={check} alt='' />
            </span>
            Lorem ipsum dolor sit amet</li>
          <li className='flex items-center gap-x-4'>
            <span>
              <Image src={check} alt='' />
            </span>
            Sed do eiusmod tempor incididunt</li>
        </ul>

        <button className='text-[#4328EB] font-medium leading-[24px] text-[16px] px-[30px] py-[14px] bg-[#FFFFFF] rounded-[4px]'>
        Get Started</button>

        </div>


        <div className='bg-[#F5F4FF] p-6 rounded-[8px] flex flex-col gap-y-4'>
        <div className='flex flex-col gap-y-3'>
        <h2 className='text-[#4328EB] text-[18px] font-medium leading-[24px]  '>Business</h2>
        <p className='text-[#36485C] text-[16px] leading-[24px]'>Perfect for small businesses</p>
        </div>
        <h2 className='text-[#172026] leading-[36px] text-[24px] font-medium'>
        $500
        </h2>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. </p>

        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <button className='text-[#4328EB] font-medium leading-[24px] text-[16px] px-[30px] py-[14px] bg-[#FFFFFF] rounded-[4px]'>
        Get Started</button>

        </div>





        </div>
    </div>
  )
}

export default Pricing