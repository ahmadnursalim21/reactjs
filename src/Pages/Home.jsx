import { useEffect } from "react";
import Hero from "../components/Hero";
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
