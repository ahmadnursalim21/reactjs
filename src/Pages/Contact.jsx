import { useEffect } from "react";
import Navbar from "./../components/Navbar";
const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Contact;
