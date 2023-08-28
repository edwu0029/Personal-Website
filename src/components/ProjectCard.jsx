import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Flex,
  Link,
  Heading,
  Text,
  Image,
  Badge,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { LuRocket } from "react-icons/lu";
import { HiSwitchHorizontal } from "react-icons/hi";
import TechIcon from "./TechIcon";
import { useState } from "react";
import * as Consts from "../data/constants.js";

const ProjectCard = (props) => {
  const data = props.data;
  const [isFront, setIsFront] = useState(true);
  const variants = {
    intial: {
      y: 0,
      rotateY: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      y: "-1rem",
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
    flip: { rotateY: -180, transition: { duration: 0.3 } },
  };
  const viewMoreClickHandler = (e) => {
    setIsFront((prev) => !prev);
  };
  return (
    <Card
      as={motion.div}
      intial={false}
      animate={isFront ? "intial" : "flip"}
      variants={variants}
      maxW={{ base: "100%", sm: "280px", "2xl": "sm" }}
      minH="490px"
      whileHover="hover"
      boxShadow="0 0 20px black"
    >
      {isFront ? (
        // Front side of Project Card
        <CardBody p="15px 15px 10px 15px">
          <Image
            src={data.img}
            objectFit="cover"
            w="100%"
            aspectRatio="16/9"
            borderRadius="lg"
            maxH="200px"
            mx="auto"
          />
          <Flex direction="column" justifyContent="center" alignItems="left">
            <HStack justifyContent="space-between">
              <Heading fontSize="28px" mt="2" color="white">
                {data.title}
              </Heading>
            </HStack>
            {data.status === "ongoing" ? (
              <Badge colorScheme="red" mt="10px" maxW="66px">
                Ongoing
              </Badge>
            ) : (
              <Badge colorScheme="green" mt="10px" maxW="78px">
                Completed
              </Badge>
            )}
            <Text mt="2" sx={Consts.bodyTextStyle}>
              {data.description}
            </Text>
            <HStack mt="2" justifyContent="Left" wrap="wrap" gap="1.5">
              {data.tech.map((t) => {
                return <TechIcon key={t} techName={t} />;
              })}
            </HStack>
          </Flex>
        </CardBody>
      ) : (
        // Back side of Project Card
        <CardBody p="15px 15px 10px 15px" transform="rotateY(180deg)">
          <Flex direction="column" justifyContent="center" alignItems="left">
            <HStack justifyContent="space-between">
              <Heading size="lg" mt="2" color="white">
                {data.title}
              </Heading>
              <IconButton
                icon={<HiSwitchHorizontal size={30} />}
                colorScheme="gray"
                variant="ghost"
                mt="5px"
                onClick={viewMoreClickHandler}
              />
            </HStack>
            <Text mt="2" sx={Consts.bodyTextStyle}>
              {data.backDescription}
            </Text>
            <HStack mt="16px" justifyContent="Left" wrap="wrap" gap="1.5">
              {data.tech.map((t) => {
                return <TechIcon key={t} techName={t} />;
              })}
            </HStack>
          </Flex>
        </CardBody>
      )}
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
          <HStack w="100%" transform="rotateY(180deg)">
            {data.live != undefined ? (
              <Link w="100%" href={data.live.url} isExternal>
                <Button
                  leftIcon={<LuRocket size={20} />}
                  variant="solid"
                  colorScheme="blue"
                  w="100%"
                >
                  Live
                </Button>
              </Link>
            ) : (
              ""
            )}
            {data.source != undefined ? (
              <Link w="100%" href={data.source.url} isExternal>
                <Button
                  leftIcon={<AiFillGithub size={20} />}
                  colorScheme="blue"
                  variant="solid"
                  w="100%"
                >
                  Source
                </Button>
              </Link>
            ) : (
              ""
            )}
          </HStack>
        )}
      </CardFooter>
    </Card>
  );
};
export default ProjectCard;
