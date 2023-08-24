import Projects from "./sections/Projects";
import Education from "./sections/Education";
import { Box } from "@chakra-ui/react";
import About from "./sections/About";
import Home from "./sections/Home";
import NavBar from "./components/NavBar";
function App() {
  const s = {
    backgroundColor: "#0B1117",
  };
  return (
    <Box style={s}>
      <NavBar />
      <Home />
      <About />
      <Education />
      <Projects />
    </Box>
  );
}

export default App;
