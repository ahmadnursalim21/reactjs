import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Benner from "../components/Benner";
import Hero from "../components/Hero";
import Footer from "./../components/Footer";
import Feature from "../components/Feature";
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <Navbar />
      <Benner />
      <Hero />
      <Feature />
      <Footer />
    </>
  );
};

export default Home;
