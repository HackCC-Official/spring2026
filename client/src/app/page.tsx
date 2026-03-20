//import Image from "next/image";
//import QRScanner from "../components/qrscan"

import Home from "../features/home-page/home"
import AttendeeContainer from "@/features/attendee/AttendeeContainer";
import Footer from "@/features/footer/apply-page/Footer";
import VolunteerJudgeContainer from "../features/volunteer-judge/VolunteerJudgeContainer";
import { Navbar } from "@/components/navbar";
import About from "@/features/about/about";
import Slider from "@/features/organizers/Slider";
import Carousel from "@/features/events/carosoul";
import Collage from "@/features/collage/Collage";
import Faq from "@/features/faq/Faq";
import VenueMap from "@/features/home-page/components/venue-map";

// TODO-IF-ACTION: Rearrange VolunterJudgeContainer to above Footer
export default function HomePage() {
  return (
    <div className="flex flex-wrap w-screen h-screen">
      <Navbar></Navbar>
      <Home></Home>
      {/* Keep venue details high on the page so the 2026 multi-campus update is visible before the deeper homepage sections. */}
      <VenueMap />
      <VolunteerJudgeContainer></VolunteerJudgeContainer>
      <About></About>
      <Collage />
      <Faq></Faq>
      {/* Carousel removed for 2026 — the collage + testimonials sections now handle visual variety without the extra scroll weight. */}
      {/*<Carousel></Carousel> */}
      {/* Testimonials now sit just above the footer so attendee stories lead directly into the final CTA. */}
      <AttendeeContainer/>
      {/* <Slider></Slider> */}
      <Footer></Footer>
    </div>
  )
}
