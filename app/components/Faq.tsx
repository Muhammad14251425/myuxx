'use client'
import * as Accordion from '@radix-ui/react-accordion';
import Plus from "@/public/assets/Plus.svg"
import Image from 'next/image'
import nexxt from "@/public/assets/Logo.svg"

const Faq = () => {
    const items = [
        {
            question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
        },
        {
            question: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
        },
        {
            question: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
        },
        {
            question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
        },
        {
            question: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
        },
    ]
    
    return (
        <div className='sm:grid sm:grid-cols-2 gap-x-6'>
            <div className='w-full'>
                <div className='flex flex-col gap-y-4 w-full pr-[56px] py-8'>
                    <h2 className='text-[#EB2891] text-[14px] font-medium leading-[22px] lg:text-[16px] lg:leading-[24px]'>
                        Frequently Asked Questions
                    </h2>
                    <h1 className='text-[#172026] text-[24px] font-medium leading-[36px] lg:text-[42px] lg:leading-[58px]'>
                        Let’s clarify some of your questions
                    </h1>
                    <p className='text-[#36485C] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </p>
                </div>
            </div>

            <div>
    <Accordion.Root type='single' defaultValue='item-1' collapsible className='flex flex-col gap-y-4'>
        {
            items.map((item, key) => (
                <div key={key}>
                    <Accordion.Item value={`item-${key + 1}`}
                        className='bg-[#E3F1FF] p-4 rounded-[8px]'
                    >
                        <Accordion.Header>
                            <Accordion.Trigger className='flex flex-row justify-between w-full'>
                                <p className=' text-left pb-2 w-full text-[#172026] font-medium leading-[24px] text-[16px]'>
                                    {
                                        item.question
                                    }
                                </p>
                                <span>
                                    <Image src={Plus} alt="plus" />
                                </span>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>
                            <p className='text-[#36485C] leading-[24px] text-[16px]'>
                                {
                                    item.answer
                                }
                            </p>
                        </Accordion.Content>
                    </Accordion.Item>
                </div>
            ))
        }
    </Accordion.Root>
</div>



        </div>
    )
}

export default Faq