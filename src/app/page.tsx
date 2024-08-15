import Navbar from "@/component/navbar/Navbar";
import LandHead from "./landingPage/LandHead";
import LandMain from "./landingPage/LandMain";
import Footer from "@/component/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandHead />
      <LandMain />
      <Footer />
    </>
  );
}
