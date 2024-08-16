'use client';

import React, { useEffect } from 'react'
import Navbar from "@/component/navbar/Navbar";
import LandHead from "./landingPage/LandHead";
import LandMain from "./landingPage/LandMain";
import Footer from "@/component/footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  
  return (
    <>
      <Navbar />
      <LandHead />
      <LandMain />
      <Footer />
    </>
  );
}
