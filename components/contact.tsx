"use client";

import { SectionHeading } from "./section-heading";
import {motion} from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact(){
    const {ref} = useSectionInView('Contact',0.5);
    
    return(
        <motion.section 
            id="contact"
            ref={ref} 
            className="text-center mb-20 sm:mb-28 w-[min(100%,38rem)]"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className="text-gray-700 -mt-6 dark:text-white/80">Please contact me directly at <a className="underline" href="mailto:kiefer25dias6980@gmail.com">kiefer25dias6980@gmail.com</a></p>

            <form className="mt-10 flex flex-col dark:text-black" action={async (formData) =>{
                const {data, error} = await sendEmail(formData);
                if(error){
                    toast.error(error)
                    return;
                }
                toast.success("Email sent successfully!");
            }}>
                <input name="senderEmail" type="email" className="px-4 h-14 rounded-lg  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" placeholder="Your Email" required maxLength={500}/>
                <textarea name="message" placeholder="Your Message" className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" required maxLength={5000}/>
                <SubmitBtn/>
            </form>
        </motion.section>
    )
}