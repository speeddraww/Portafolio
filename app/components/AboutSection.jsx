"use client";
import Image from 'next/image'
import React, {useTransition, useState} from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        id: "skills",
        title: "Skills",
        content:(
            <ul className='list-disc pl-2'>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Next.js</li>
            <li>c#</li>
            <li>MySQL</li>
            <li>Firebase</li>
            <li>Cybersecurity and data protection</li>
            <li>Unity</li>
            </ul>
        )           
    },
    {

    },
    {
        id: "education",
        title: "Education",
        content:(
            <ul className='list-disc pl-2'>
            <li>
            Universidad Tecnologica De Chihuahua
            </li>
            </ul>
        )
    },
    {
        id: "certifications",
        title: "Certifications",
        content: (
            <ul className='list-disc pl-2'>
            <li>
            Introduction to javascript
            </li>
            <li>
            Introduction to Cybersecurity
            </li>
            </ul>
        )
    }
]


function AboutSection() {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className='text-white'>
                <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16'>
                <Image src="/images/Picture2.jpg" alt="Picture of the author" width={500} height={500}></Image>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                        <h2 className='text-4xl font-bold text-white mb-6 mt-20'>About Me</h2>
                        <p className='text-base lg:text-lg '>Hello! I am Emilio, I am currently studying Information Technologies in Virtual Environments and Digital Business, where I combine my curiosity about technology with my interest in the business and digital world. From an early age, I was fascinated by the possibilities that technology offers to transform and improve the way we live and work. My focus has been on learning and mastering web development skills, applications and other computer related areas. I consider myself an enthusiastic problem solver and am always eager to take on new challenges that allow me to apply my knowledge and skills creatively. I enjoy working as a team, collaborating to achieve common goals and learning from the diverse perspectives that my colleagues bring. My experience is not limited only to the acquisition of technical skills. I have learned the importance of effective communication and time management to achieve optimal project results. Additionally, I always seek to stay up to date with the latest trends and advancements in the technology industry. My goal is to continue growing professionally, contribute with innovative solutions and continue learning in a dynamic and challenging environment. Outside of the technological field, I love video games, cats and pizza! I am excited for the opportunity to share my work and experiences with you. </p>
                        <div className='flex flex-row justify-start mt-8'>
                          
                            <TabButton
                            selectTab={()=> handleTabChange("skills")}
                            active={tab ==="skills"}>
                                
                                {""}
                                Skills{""}
                            </TabButton>
                            <TabButton
                            selectTab={()=> handleTabChange("education")}
                            active={tab ==="education"}>
                                
                                {""}
                                Education{""}
                            </TabButton>
                            <TabButton
                            selectTab={()=> handleTabChange("certifications")}
                            active={tab ==="certifications"}>
                                
                                {" "}
                                Certifications{" "}
                            </TabButton>
                        </div>
                        <div className='mt-8'>
                        {TAB_DATA.find((t) =>t.id === tab).content}
                        </div>
                </div>
                </div>
        </section>
    )
}

export default AboutSection