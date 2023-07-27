import Projects from "./sections/Projects";
import Education from "./sections/Education";
import { Container } from "@chakra-ui/react";
function App() {
  const s = { backgroundColor: "#EDF2F7" };
  return (
    <div style={s}>
      <Education />
      <Projects />
    </div>
  );
}

export default App;
