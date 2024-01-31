import Image from 'next/image'
import React from 'react'
import Pic1 from "@/public/assets/feature-1.svg"
import Pic2 from "@/public/assets/feature-2.svg"
import Pic3 from "@/public/assets/feature-3.svg"
import Check from "@/public/assets/check.svg"
import arrowb from "@/public/assets/blue-button.svg"
import arrowg from "@/public/assets/green-button.svg"
import arrowp from "@/public/assets/pink-button.svg"

const Features = () => {
    return (
        <div className='flex flex-col gap-y-[56px] py-[56px] lg:gap-y-[80px] lg:py-[120px] '>
            <div className='flex flex-row-reverse '>
                <Image src={Pic1} alt='pic1' className='hidden lg:block w-1/2'/>

                <div className=' gap-y-[32px] lg:py-[56px] lg:pr-[56px] lg:gap-y-[32px] lg:w-1/2'>

                <h2 className='text-[#0085FF] font-medium leading-[24px] text-[16px] pb-3 lg:text-[18px] lg:leading-[24px]'>
                    Sales Monitoring</h2>
                <p className='text-[#172026] text-[24px] leading-[36px] font-medium pb-6 lg:text-[42px] lg:leading-[58px]'>
                    Simplify your sales monitoring</p>

                <Image src={Pic1} alt='feature1' className='sm:hidden w-full ' />

                <p className='text-[#36485C] leading-[24px] self-stretch py-6 lg:text-[18px] lg:leading-[28px]'>
                    Stay on top of things and revamp your work process with our game-changing feature.
                    Get a birds eye view with our customizable dashboard.
                </p>

                <ul className='flex flex-col gap-y-3 leading-[24px] text-[#36485C]'>
                    <li className='flex items-center  gap-x-4'>
                        <span>
                            <Image src={Check} alt='check' />
                        </span>
                        Lorem ipsum dolor sit amet
                    </li>
                    <li className='flex items-center  gap-x-4 text-[#36485C]'>
                        <span>
                            <Image src={Check} alt='check' />
                        </span>
                        Consectetur adipiscing elit
                    </li>
                    <li className='leading-[24px] flex items-center gap-x-4 text-[#36485C]'>
                        <span>
                            <Image src={Check} alt='check' />
                        </span>
                        Sed do eiusmod tempor incididunt ut labore
                    </li>
                </ul>

                <button className='flex gap-x-3 pt-[24px] leading-[24px] text-[#0085FF]'>
                    Learn More
                    <span>
                        <Image src={arrowb} alt="arrow" />
                    </span>
                </button>
                </div>
            </div>
            <div className='flex flex-row '>
                <Image src={Pic2} alt='pic1' className='hidden lg:block w-1/2'/>

                <div className=' gap-y-[32px] lg:py-[56px] lg:pl-[56px] lg:gap-y-[32px] lg:w-1/2 '>

                <h2 className='text-[#00A424] font-medium leading-[24px] text-[16px] pb-3 lg:text-[18px] lg:leading-[24px]'>
                Customer Support</h2>
                <p className='text-[#172026] text-[24px] leading-[36px] font-medium pb-6 lg:text-[42px] lg:leading-[58px]'>
                Get in touch with your customers                    </p>

                <Image src={Pic2} alt='feature1' className='sm:hidden w-full ' />

                <p className='text-[#36485C] leading-[24px] self-stretch py-6 lg:text-[18px] lg:leading-[28px]'>
                    Stay on top of things and revamp your work process with our game-changing feature.
                    Get a birds eye view with our customizable dashboard.
                </p>

                <ul className='flex flex-col gap-y-3 leading-[24px] text-[#36485C]'>
                    <li className='flex items-center  gap-x-4'>
                        <span>
                            <Image src={Check} alt='check' />
                        </span>
                        Lorem ipsum dolor sit amet
                    </li>
                    <li className='flex items-center  gap-x-4 text-[#36485C]'>
                        <span>
                            <Image src={Check} alt='check' />
                        </span>
                        Consectetur adipiscing elit
                    </li>
                    <li className='leading-[24px] flex items-center gap-x-4 text-[#36485C]'>
                        <span>
                            <Image src={Check} alt='check' />
                        </span>
                        Sed do eiusmod tempor incididunt ut labore
                    </li>
                </ul>

                <button className='flex gap-x-3 pt-[24px] leading-[24px] text-[#00A424]'>
                    Learn More
                    <span>
                        <Image src={arrowg} alt="arrow" />
                    </span>
                </button>
                </div>
            </div>
            <div className='flex flex-row-reverse '>
                <Image src={Pic3} alt='pic1' className='hidden lg:block w-1/2'/>

                <div className=' gap-y-[32px] lg:py-[56px] lg:pr-[56px] lg:gap-y-[32px] lg:w-1/2'>

                <h2 className='text-[#EB2891] font-medium leading-[24px] text-[16px] pb-3 lg:text-[18px] lg:leading-[24px]'>
                Growth Monitoring</h2>
                <p className='text-[#172026] text-[24px] leading-[36px] font-medium pb-6 lg:text-[42px] lg:leading-[58px]'>
                Monitor your site’s new subscribers </p>

                <Image src={Pic3} alt='feature1' className='sm:hidden w-full ' />

                <p className='text-[#36485C] leading-[24px] self-stretch py-6 lg:text-[18px] lg:leading-[28px]'>
                    Stay on top of things and revamp your work process with our game-changing feature.
                    Get a birds eye view with our customizable dashboard.
                </p>

                <div className='grid grid-cols-2 pt-4 items-center gap-x-6'>
                    <div className='flex gap-y-4 flex-col'>
                        <h3 className='text-[20px] leading-[26px] lg:text-[#172026] lg:text-[32px] lg:font-medium lg:leading-[40px]  ' >100+</h3>
                        <p className='text-[16px] leading-[24px] lg:text-[#5F7896] lg:leading-[24px] lg:text-[18px]'>Lorem ipsum dolor sit</p>
                    </div>

                    <div className='flex gap-y-4 flex-col'>
                        <h3 className='text-[20px] leading-[26px] lg:text-[#172026] lg:text-[32px] lg:font-medium lg:leading-[40px]  '>800+</h3>
                        <p className='text-[16px] leading-[24px] lg:text-[#5F7896] lg:leading-[24px] lg:text-[18px]'>Conse adipiscing elit</p>
                    </div>
                </div>

                <button className='flex gap-x-3 pt-[24px] leading-[24px] text-[#EB2891]'>
                    Learn More
                    <span>
                        <Image src={arrowp} alt="arrow" />
                    </span>
                </button>
                </div>
            </div>
            
           

            
        </div>
    )
}

export default Features
