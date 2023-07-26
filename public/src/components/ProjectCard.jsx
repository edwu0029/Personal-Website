import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { LuRocket } from "react-icons/lu";
import TechIcon from "./TechIcon";
import { useState } from "react";

const ProjectCard = (props) => {
  const [isFront, setIsFront] = useState(true);
  const variants = {
    intial: {
      y: 0,
      rotateY: 0,
      transition: { duration: 0.2 },
    },
    hover: { y: "-1rem" },
    flip: { rotateY: -180 },
  };
  const viewMoreClickHandler = (e) => {
    setIsFront((prev) => !prev);
  };
  return (
    <Card
      as={motion.div}
      intial={false}
      whileHover="hover"
      animate={isFront ? "intial" : "flip"}
      variants={variants}
      maxW={{ base: "310px", "2xl": "sm" }}
      borderTop="8px"
      borderColor="blue.500"
      bg="white"
    >
      <CardBody p="15px 15px 10px 15px">
        <Image
          src={props.img}
          alt="temporary project display image"
          objectFit="contain"
          maxH="200px"
          borderRadius="lg"
          mx="auto"
        />
        <Flex direction="column" justifyContent="center" alignItems="left">
          <HStack justifyContent="space-between">
            <Heading size="lg" mt="2" color="blue.500">
              {props.title}
            </Heading>
            {props.st === "ongoing" ? (
              <Badge colorScheme="red" mt="10px">
                Ongoing
              </Badge>
            ) : (
              <Badge colorScheme="green" mt="10px">
                Completed
              </Badge>
            )}
          </HStack>
          <Text mt="2" opacity="85%" fontSize="md">
            {props.description}
          </Text>
          <HStack mt="2" justifyContent="Left" wrap="wrap" gap="1.5">
            {props.tech.map((t) => {
              return <TechIcon key={t} techName={t} />;
            })}
          </HStack>
        </Flex>
      </CardBody>
      <CardFooter p="0px 15px 15px 15px">
        {isFront ? (
          <Button
            size="md"
            variant="solid"
            colorScheme="blue"
            width="100%"
            onClick={viewMoreClickHandler}
          >
            View More
          </Button>
        ) : (
          <HStack
            justifyContent="space-evenly"
            w="100%"
            transform="rotateY(180deg)"
          >
            <Button
              leftIcon={<LuRocket />}
              variant="solid"
              colorScheme="blue"
              w="100%"
            >
              Live
            </Button>
            <Button
              leftIcon={<AiFillGithub />}
              borderColor="black"
              variant="outline"
              w="100%"
              onClick={viewMoreClickHandler}
            >
              Source
            </Button>
          </HStack>
        )}
      </CardFooter>
    </Card>
  );
};
export default ProjectCard;
