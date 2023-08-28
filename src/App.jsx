import Projects from "./sections/Projects";
import Education from "./sections/Education";
import { Box } from "@chakra-ui/react";
import About from "./sections/About";
import Home from "./sections/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./sections/Contact";
import data from "./data/data.json";

function App() {
  return (
    <Box backgroundColor="#0B1117">
      <NavBar />
      <Home data={data} />
      <About data={data} />
      <Education data={data} />
      <Projects data={data} />
      <Contact data={data} />
      <Footer />
    </Box>
  );
}

export default App;
