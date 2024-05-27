import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Benner from "../components/Benner";
import Hero from "../components/Hero";
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <Navbar />
      <Benner />
      <Hero />
    </>
  );
};

export default Home;
