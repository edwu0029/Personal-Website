import Projects from "./sections/Projects";
import Education from "./sections/Education";
import { Box } from "@chakra-ui/react";
import About from "./sections/About";
import Home from "./sections/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./sections/Contact";
import data from "./data/data.json";
import { useRef } from "react";

function App() {
  const aboutRef = useRef();
  const educationRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const sectionRefGetter = (sectionName) => {
    return [
      { sectionName: "contact", sectionRef: contactRef },
      { sectionName: "about", sectionRef: aboutRef },
      { sectionName: "education", sectionRef: educationRef },
      { sectionName: "projects", sectionRef: projectsRef },
    ];
  };

  return (
    <Box backgroundColor="#0B1117">
      <NavBar sectionRefGetter={sectionRefGetter} />
      <Home data={data} />
      <About data={data} ref={aboutRef} />
      <Education data={data} ref={educationRef} />
      <Projects data={data} ref={projectsRef} />
      <Contact data={data} ref={contactRef} />
      <Footer />
    </Box>
  );
}

export default App;
