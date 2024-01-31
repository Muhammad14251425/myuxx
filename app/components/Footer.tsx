import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import Logo from "@/public/assets/Logo.svg"
import XX from "@/public/assets/X.svg"
import facebook from "@/public/assets/Facebook.svg"
import wifi from "@/public/assets/Feed.svg"


const Footer = () => {

    let footer = [
        {
            heading : "Features",
            item1: "Growth",
            item2: "Sales",
            item3: "Chat",
            item4: ""
        },
        {
            heading : "Pricing",
            item1: "Free Trial",
            item2: "Standard",
            item3: "Business",
            item4: ""
        },
        {
            heading : "Enterprise",
            item1: "Personalize",
            item2: "Automation",
            item3: "Invoicing",
            item4: "24/7 Support"
        },
        {
            heading : "Careers",
            item1: "Open Positions",
            item2: "Part-Time",
            item3: "Contractual",
            item4: "Contact Us"
        },
    ]
    return (
        <div className='pt-[80px] pb-[40px] flex flex-col gap-y-14 '>
            <div className="lg:grid lg:grid-cols-3 ">

            <div className="flex gap-x-3 " >
                <span>
                <Image src={Logo} alt="logo" />
                </span>
                <h2 className="text-[#36485C] font-bold text-[17px] leading-[24px]">Muhammad Fawwad Ahmed</h2>
            </div>

            <div className="hidden  lg:grid grid-cols-4 col-span-2 ">
                <div className="flex flex-col gap-y-8 text-[#36485C] text-[16px] leading-[24px]">
                    <p>Features</p>
                    <p>Growth</p>
                    <p>Sales</p>
                    <p>Chat</p>
                </div>
                <div className="flex flex-col gap-y-8 text-[#36485C] text-[16px] leading-[24px]">
                    <p>Pricing</p>
                    <p>Free Trial</p>
                    <p>Standard</p>
                    <p>Business</p>
                </div>
                <div className="flex flex-col gap-y-8 text-[#36485C] text-[16px] leading-[24px]">
                    <p>Enterprise</p>
                    <p>Personalize</p>
                    <p>Automation</p>
                    <p>Invoicing</p>
                    <p>24/7 Support</p>
                </div>
                <div className="flex flex-col gap-y-8 text-[#36485C] text-[16px] leading-[24px]">
                    <p>Careers</p>
                    <p>Open Positions</p>
                    <p>Part-Time</p>
                    <p>Contractual</p>
                    <p>Contact Us</p>
                </div>
                
            </div>

            </div>
            <div className="sm:hidden">
                <Accordion type="single" collapsible>
                        { footer.map((item , index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>

                            <AccordionTrigger>
                                <h2>{item.heading}</h2>
                            </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-y-8">
                        <p>{item.item1}</p>
                        <p>{item.item2}</p>
                        <p>{item.item3}</p>
                        <p>{item.item4}</p>
                        </AccordionContent>
                    </AccordionItem>
                       ) )}
                </Accordion>

            </div>


            <div className="flex flex-col gap-y-[40px] lg:grid lg:grid-cols-2">
                <h2 className="text-[#5F7896] text-[14px] font-medium leading-[22px]">© Copyright 2024. Your Site. All rights reserved.</h2>
                <div className="flex items-center justify-center gap-x-14 lg:justify-end">
                    <Image src={XX} alt="" />
                    <Image src={facebook} alt="" />
                    <Image src={wifi} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer