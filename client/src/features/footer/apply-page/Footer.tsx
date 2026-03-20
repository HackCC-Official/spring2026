import Image from "next/image"
import React from "react"
import { Socials } from "../../../components/socials"
import CatCloudCluster from "../../../../public/Cat Cloud.webp"
import BalloonCat from "../../../../public/Balloon Cat.webp"
import DarkCloud from "../../../../public/Violet Cloud Cluster 3.webp"
import Logo from '../../../../public/logo.png'
import FooterBg from '../../../../public/Footer Background.webp'
import { ApplyButton } from "@/components/navbar"

// TODO-IF-ACTION: Remove padding and make apply button active
//<Image className="" src={BackgroundDarkCloud} alt="Back CLoud"></Image>
// If adding carousel again: className="relative bg-bgpurple w-full overflow-hidden"
export default function Footer() {
    return (
        /* CHANGE: Set bg-bgpurple to match the bottom of the AttendeeContainer */
        <div className="relative bg-bgpurple w-full overflow-hidden -mt-[2px]">
            <Image 
                sizes="(min-width: 1520px) 100vw, (min-width: 1040px) calc(29.57vw + 1057px), (min-width: 780px) 1281px, 907px" 
                src={FooterBg} 
                className='z-0 absolute w-screen max-w-full object-cover 2xl:object-fill pointer-events-none' 
                alt="bg" 
                fill 
            />

            {/* SMOOTH TRANSITION: Blends from bgpurple into the Footer background image */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bgpurple to-transparent z-[1] pointer-events-none" />

            <div className="flex justify-center mx-auto py-[200px] md:py-[300px] relative z-10">
                <div className="relative flex">
                <Image sizes="(min-width: 1040px) 288px, (min-width: 780px) 208px, 177px" className="-top-[100px] md:-top-[125px] lg:-top-[125px] -left-32 md:-left-48 z-10 absolute w-48 md:w-52 lg:w-72 h-auto animate-bobbing ease-linear pointer-events-none" src={BalloonCat} alt="cat" />
                    <div className="z-50 flex flex-col items-center overflow-hidden" >
                        <h2 className={`text-white  text-[3rem] font-bagel  z-10 md:text-[4rem] lg:text-[5rem] xl:text-[6rem]`}>Apply</h2>
                        <h3 className={`text-white text-[0.8rem] font-mont z-10 text-base sm:text-lg md:text-2xl 2xl:text-3xl`}>Apply to register as a participant</h3>
                        {/* Mirror the hero CTA here so the page still ends with one clear action after the added homepage sections. */}
                        <ApplyButton text="Apply now" size="lg" to="/apply"></ApplyButton>
                    </div>
                </div>
            </div>
            <div className="bottom-6 left-0 z-30 absolute w-full px-4 sm:px-8 lg:px-20">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <Socials baseColor="text-white" hoverColor="hover:text-navyblue"/>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                        <Image sizes="(min-width: 1024px) 96px, (min-width: 640px) 80px, 64px" src={Logo} alt='logo' className="top-[2px] z-10 relative w-16 sm:w-20 lg:w-24 h-auto object-contain pointer-events-none"></Image>
                        <p className={`z-10 text-[0.7rem] lg:text-[0.9rem] text-white font-mont`}>© 2026 HackCC</p>
                    </div>
                    
                </div>
                <Image sizes="(min-width: 1540px) 2000px, (min-width: 780px) 1500px, 900px" className="-right-[450px] md:-right-[600px] 2xl:-right-[750px] -bottom-[200px] absolute md:w-[1500px] 2xl:w-[2000px] min-w-[900px] md:min-w-[1500px] 2xl:min-w-[2000px] h-auto animate-swaying ease-linear pointer-events-none" src={CatCloudCluster} alt="Cat Cloud Cluster"></Image>
                <Image sizes="(min-width: 1040px) 700px, (min-width: 780px) 400px, 200px" className="-bottom-20 -left-10 absolute w-[200px] md:w-[400px] lg:w-[700px] h-auto animate-swaying ease-linear pointer-events-none" src={DarkCloud} alt="Mid CLoud"></Image>
            </div>
        </div>
    )
}
