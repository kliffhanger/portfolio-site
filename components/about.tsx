"use client"

import { SectionHeading } from "./section-heading";
import {motion} from 'framer-motion'
import { useSectionInView } from "@/lib/hooks";

export default function About(){
    const {ref} = useSectionInView('About')
    
    return(
        <motion.section 
            className="mb-28 max-w-[45rem] text-center leading-8 
            sm:mb-40 scroll-mt-28"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y:0}}
            transition={{
                delay:0.175,
            }}
            id="about"
            ref={ref}
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                During my Computer Engineering degree, I ventured into <span className="font-medium">freelancing</span> during college, 
                honing my skills in <span className="itialic">frontend development</span>. Crafting engaging UI designs and 
                bringing them to life through code became my passion. 
                I thrive on problem-solving in coding, constantly exploring new tech. 
                Proficient in <span className="font-medium">HTML, CSS, and vanilla JS</span>, my primary focus lies in 
                <span className="font-medium">React, Next.js, Node, and databases like MongoDB and MySQL</span>, adaptable to any adjustments.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, 
                 I immerse myself in <span className="font-medium">movies, football, and marathon running</span>, 
                 exploring <span className="font-medium">thrilling fiction</span> books. Continuous improvement fuels my drive.
            </p>
        </motion.section>
    )
}