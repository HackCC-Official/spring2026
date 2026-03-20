'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import cloud from "../../../public/Violet Cloud Cluster 2.webp"
import cloud2 from "../../../public/Violet Cloud Cluster 1.webp"
import AttendeeCard from "./ui/AttendeeCard"
import { Title } from "@/components/title";
import zlatan from "../../../public/zlatan.png"
import remiel from "../../../public/remiel.webp"
import yinghao from "../../../public/2026-images/Yinghao.jpg"
import cameron from "../../../public/2026-images/Cameron.jpg"

const TESTIMONIALS = [
    {
        name: "Remiel Shirazi",
        text: "Last year, I grouped up and participated in HackCC as my first hackathon where we won first place building StudyCCC. This led to joining their team and fast forward to HackCC 2025, another success! The hackathon went amazing and was a full-circle moment..",
        imgPath: remiel,
    },
    {
        name: "Zlatan Dzinic",
        text: "I had the absolute honor of keynoting HackCC at MiraCosta College.... and wow, the vibes were unreal. 250+ community college students all fired up, building cool stuff, chasing ideas, pushing past comfort zones... it was pure SoCal energy: curious, creative, and just a little bit chaotic in the best way.",
        imgPath: zlatan,
    },
    {
        name: "Yinghao Guan",
        text: "Thrilled to share that my team and I won the Best AI/ML Award at HackCC with our project, Realibuddy — a real-time conversational fact-checking assistant. This gave us the chance to practice rapid prototyping, AI integration, and time-critical decision making under a 14-hour development window.",
        imgPath: yinghao,
    },
    {
        name: "Cameron Rafanan",
        text: "I had the most wonderful opportunity to work with amazing people at HackCC, hosted at MiraCosta College. Together, we created Dungeon Dweller, a dungeon crawler game — and our submission was voted Best Creative/Game! It was such a blast in an 8-hour development window.",
        imgPath: cameron,
    },
]

export default function AttendeeContainer() {
    const [pair, setPair] = useState(0)
    const [visible, setVisible] = useState(true)

    // Rotate through testimonial pairs so the section stays focused without stacking four large cards at once.
    // Auto-rotate: after 5.5 s, fade out -> swap -> fade in
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
            setTimeout(() => {
                setPair(p => (p + 1) % 2)
                setVisible(true)
            }, 350)
        }, 5500)
        return () => clearTimeout(timer)
    }, [pair])

    const shown = TESTIMONIALS.slice(pair * 2, pair * 2 + 2)

    return (
        <div className="bg-bgpurple -mt-[2px] py-32 w-full h-auto overflow-x-clip text-center relative">
            <Image
                src={cloud}
                sizes="(min-width: 1540px) 1000px, (min-width: 780px) 500px, (min-width: 640px) 300px, 250px"
                className="top-[150px] md:top-[0px] -left-[50px] z-0 absolute w-[250px] sm:w-[300px] md:w-[500px] 2xl:w-[1000px] h-auto pointer-events-none"
                alt="cloud"
            />
            <Image
                src={cloud2}
                sizes="(min-width: 1540px) 1000px, (min-width: 780px) 500px, (min-width: 640px) 300px, 250px"
                className="top-[200px] md:top-[100px] -right-[40px] z-0 absolute w-[250px] sm:w-[300px] md:w-[500px] 2xl:w-[1000px] h-auto"
                alt="cloud"
            />
            <div className="relative z-10 mx-auto w-full max-w-[1400px] text-center">
                <Title text="What past attendees have said" />

                <div
                    // Opacity handles the cross-fade between the active pair and the next one.
                    className="flex md:flex-row flex-col justify-center items-center text-left transition-opacity duration-300"
                    style={{ opacity: visible ? 1 : 0 }}
                >
                    {shown.map(t => (
                        <AttendeeCard key={t.name} name={t.name} text={t.text} imgPath={t.imgPath} />
                    ))}
                </div>

                {/* Pair indicator dots */}
                <div className="flex justify-center gap-3 mt-2">
                    {[0, 1].map(i => (
                        <button
                            key={i}
                            // Manual dot navigation uses the same fade timing as autoplay so both transitions feel consistent.
                            onClick={() => {
                                if (i === pair) return
                                setVisible(false)
                                setTimeout(() => { setPair(i); setVisible(true) }, 350)
                            }}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === pair ? 'bg-white' : 'bg-white/30'}`}
                            aria-label={`Show testimonials ${i * 2 + 1} and ${i * 2 + 2}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
