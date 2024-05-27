import Navbar from "../components/Navbar";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default About;
