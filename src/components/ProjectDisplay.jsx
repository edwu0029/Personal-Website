import { Flex } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const ProjectDisplay = (props) => {
  const projects = [
    {
      id: "PaintBoard",
      img: "./src/assets/projectDisplayTMP.jpg",
      title: "PaintBoard",
      description:
        "An education application that provides a collaborative environment to draw and write on a single canvas.",
      status: "completed",
      tech: ["java", "GUI"],
    },
    {
      id: "Project2",
      img: "./src/assets/projectDisplayTMP.jpg",
      title: "Project2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar id turpis quis mattis. Sed eu suscipit velit, eget elementum dui.",
      status: "ongoing",
      tech: ["react", "express", "mongoDB"],
    },
    {
      id: "Project3",
      img: "./src/assets/projectDisplayTMP.jpg",
      title: "Project3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar id turpis quis mattis. Sed eu suscipit velit, eget elementum dui.",
      status: "completed",
      tech: ["react", "nginx", "nextjs"],
    },
    {
      id: "Project4",
      img: "./src/assets/projectDisplayTMP.jpg",
      title: "Project4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar id turpis quis mattis. Sed eu suscipit velit, eget elementum dui.",
      status: "completed",
      tech: ["react"],
    },
    {
      id: "Project5",
      img: "./src/assets/projectDisplayTMP.jpg",
      title: "Project5",
      description:
        "PaintBoard is an educational app where students collaboratively draw and take notes on a shared board.",
      status: "completed",
      tech: ["java", "oracle db"],
    },
  ];
  return (
    <Flex
      gap={{ base: "5", md: "7", "2xl": "10" }}
      wrap="wrap"
      justifyContent={{ base: "center", lg: "left" }}
    >
      {projects.map((p) => {
        return (
          <ProjectCard
            key={p.id}
            img={p.img}
            title={p.title}
            description={p.description}
            st={p.status}
            tech={p.tech}
          />
        );
      })}
    </Flex>
  );
};
export default ProjectDisplay;
