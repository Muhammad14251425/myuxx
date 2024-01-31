import Image from 'next/image'
import Logo from "@/public/assets/Logo.svg"
import User from "@/public/assets/User.svg"
import Menu from "@/public/assets/Menu.svg"
const navLinks = [
    { name: "Features" },
    { name: "Pricing" },
    { name: "Enterprise" },
    { name: "Careers" },
]
const Navbar = () => {
  return (
    <div className='w-full px-[20px] py-[16px] flex justify-between items-center lg:px-[80px] lg:py-[24px] lg:container lg:mx-auto' >
        <div className='flex items-center'>
            <Image src={Logo} alt='logo'/>
            <div className='hidden lg:flex pl-[74px] gap-x-[56px]'>
                {
                    navLinks.map((item , index)=> (
                       <p className='text-[#36485C] text-[16px] leading-[24px] font-medium' key={index}>{item.name}</p> 
                    ))
                }
            </div>
        </div>

        <div className='flex gap-x-5 items-center '>
            <p className='hidden lg:block text-[#36485C] font-medium'>Open an Account</p>
            <div className='flex gap-x-3 items-center pl-[56px]'>
            <Image src={User} alt='user' />
            <span className='hidden lg:block font-medium text-[#36485C]'>Sign In</span>
            </div>
            <Image src={Menu} alt='menu' className='lg:hidden' />
        </div>
    </div>
  )
}

export default Navbar