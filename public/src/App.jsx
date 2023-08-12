import Projects from "./sections/Projects";
import Education from "./sections/Education";
import { Box } from "@chakra-ui/react";
import About from "./sections/About";
function App() {
  const s = {
    backgroundColor: "#0B1117",
  };
  return (
    <Box style={s}>
      <About />
      <Education />
      <Projects />
    </Box>
  );
}

export default App;
