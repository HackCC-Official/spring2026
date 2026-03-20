"use client";

import Image from "next/image";
import { useState } from "react";

interface VenueInfo {
    id: string;
    name: string;
    location: string;
    date: string;
    addressLine1: string;
    addressLine2: string;
    mapQuery: string;
    imageSrc: string;
    imageAlt: string;
}

export default function VenueMap() {
    function getVenues(): VenueInfo[] {
        // Keep venue copy in one place so the toggle buttons, card details, and map embed stay synchronized.
        return [
            {
                id: "hackecc",
                name: "HackECC",
                location: "East Dining Hall",
                date: "May 3rd",
                addressLine1: "El Camino College",
                addressLine2: "Torrance, CA",
                mapQuery: "East Dining Hall El Camino College Torrance CA",
                imageSrc: "https://www.elcamino.edu/civic-center/images/EDR03.jpg",
                imageAlt: "East Dining Hall at El Camino College",
            },
            {
                id: "hacksmc",
                name: "HackSMC",
                location: "Bundy Campus",
                date: "May 9th - May 10th",
                addressLine1: "Santa Monica College",
                addressLine2: "Bundy Campus, Santa Monica, CA",
                mapQuery: "Santa Monica College Bundy Campus Santa Monica CA",
                imageSrc: "https://www.smc.edu/images/hero-images/_campus-hero-images/bundy-06.jpg",
                imageAlt: "Bundy Campus at Santa Monica College",
            },
        ];
    }

    function getMapEmbedUrl(mapQuery: string): string {
        return `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=k&z=16&output=embed`;
    }

    function getDirectionsUrl(mapQuery: string): string {
        return `https://maps.google.com/?q=${encodeURIComponent(mapQuery)}`;
    }

    const venues = getVenues();
    const [selectedVenueId, setSelectedVenueId] = useState<string>(venues[0].id);
    const selectedVenue = venues.find((venue) => venue.id === selectedVenueId) ?? venues[0];

    return (
        <section className="relative pt-20 pb-28 w-full h-auto overflow-visible">
            <div className="absolute inset-0">
                {/* Swap the satellite background with the selected campus so the section reinforces the active venue card. */}
                <iframe
                    title={`${selectedVenue.name} satellite map`}
                    src={getMapEmbedUrl(selectedVenue.mapQuery)}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                ></iframe>
                <div className="absolute inset-0 bg-black/3"></div>
                <div className="top-0 absolute inset-x-0 h-72 sm:h-96 bg-gradient-to-b from-bgpurple/90 via-bgpurple/62 via-bgpurple/28 to-transparent"></div>
                <div className="bottom-0 absolute inset-x-0 h-44 sm:h-56 bg-gradient-to-t from-bgpurple/88 via-bgpurple/58 to-transparent"></div>
                <div className="-top-8 absolute inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-bgpurple/70 via-bgpurple/35 to-transparent blur-xl"></div>
                <div className="top-10 sm:top-14 absolute inset-x-0 h-16 sm:h-24 bg-gradient-to-b from-bgpurple/45 via-bgpurple/22 to-transparent blur-md"></div>
                <div className="-top-14 absolute inset-x-0 h-28 sm:h-40 bg-[#d66dff]/16 blur-3xl"></div>
                <div className="-bottom-10 absolute inset-x-0 h-24 sm:h-32 bg-[#d66dff]/10 blur-3xl"></div>
                <div className="-top-4 absolute left-[18%] rounded-full w-56 sm:w-80 h-16 sm:h-24 bg-[#ef8cff]/18 blur-3xl"></div>
                <div className="-top-2 absolute right-[15%] rounded-full w-44 sm:w-64 h-14 sm:h-20 bg-[#c479ff]/16 blur-3xl"></div>
            </div>
            <div className="z-20 relative mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
                <div className="bg-white/95 shadow-2xl p-6 sm:p-8 rounded-3xl w-full max-w-xl">
                    <div className="mb-5 font-bagel text-hoverpurple text-4xl sm:text-5xl">Venue</div>
                    <div className="flex flex-wrap gap-2 mb-5">
                        {venues.map((venue) => (
                            <button
                                key={venue.id}
                                type="button"
                                onClick={() => setSelectedVenueId(venue.id)}
                                className={`px-4 py-2 rounded-full font-mont text-sm sm:text-base transition-colors ${
                                    venue.id === selectedVenue.id
                                        ? "bg-[#EEF06C] text-[#5428A8] font-semibold"
                                        : "bg-[#EDE8F8] text-[#5B3D90] hover:bg-[#E3DAF5]"
                                }`}
                            >
                                {venue.name}
                            </button>
                        ))}
                    </div>

                    <div className="relative mb-6 rounded-2xl border border-[#e4d5ff] w-full h-44 sm:h-52 overflow-hidden">
                        <Image
                            src={selectedVenue.imageSrc}
                            alt={selectedVenue.imageAlt}
                            // These previews come from campus-hosted image URLs, so we render them without Next optimization.
                            unoptimized
                            fill
                            className="object-cover"
                            sizes="(min-width: 640px) 36rem, 100vw"
                        />
                    </div>

                    <h2 className="mb-1 font-bagel text-hoverpurple text-4xl sm:text-5xl">{selectedVenue.name}</h2>
                    <p className="font-mont text-gray-700 text-2xl">{selectedVenue.location}</p>
                    <p className="mb-5 font-bagel text-gray-700 text-3xl">{selectedVenue.date}</p>
                    <p className="font-mont text-gray-700 text-lg">{selectedVenue.addressLine1}</p>
                    <p className="mb-6 font-mont text-gray-700 text-lg">{selectedVenue.addressLine2}</p>

                    <a
                        href={getDirectionsUrl(selectedVenue.mapQuery)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center bg-[#EEF06C] hover:bg-[#F5F783] px-7 py-3 rounded-full font-mont font-semibold text-[#5428A8] text-xl leading-none transition-colors"
                    >
                        Get Directions +
                    </a>
                </div>
            </div>
            <div className="bottom-0 z-30 absolute inset-x-0 h-24 sm:h-32 bg-gradient-to-b from-transparent via-[#c86bff]/30 to-bgpurple/90 pointer-events-none"></div>
            <div className="-bottom-12 z-30 absolute inset-x-0 h-24 sm:h-32 bg-[#d66dff]/28 blur-3xl pointer-events-none"></div>
        </section>
    );
}
