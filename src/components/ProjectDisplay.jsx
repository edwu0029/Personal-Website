import { Flex } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const ProjectDisplay = (props) => {
  const projects = props.projects;
  return (
    <Flex
      gap={{ base: "5", md: "7", "2xl": "10" }}
      wrap="wrap"
      justifyContent={{ base: "center", lg: "left" }}
    >
      {projects.map((p) => {
        return (
          <ProjectCard
            key={p.title}
            img={p.img}
            title={p.title}
            description={p.description}
            backDescription={p.backDescription}
            st={p.status}
            tech={p.tech}
          />
        );
      })}
    </Flex>
  );
};
export default ProjectDisplay;
