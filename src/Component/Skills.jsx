

import React from "react";

import {
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Container,
  Text,
} from "@chakra-ui/react";
// import "../styles/common.css"
import {
  FaHtml5,
  FaReact,
  FaJs,
  FaNodeJs,
  FaCss3,

  FaBootstrap,
} from "react-icons/fa";
import { SlSettings } from "react-icons/sl";
import photoshop from "../images/photoshop.png"
import RubberBand from "react-reveal/RubberBand";
import {
  SiRedux,
  SiMongodb,
  SiExpress,
  SiChakraui,

  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  return (
    <>
      <Box marginTop={["100px", "150px", "200px"]}>
        <Heading
          mr={["10%", "10%", "0%"]}
          fontWeight="400"
          fontSize={["3xl", "4xl", "5xl"]}
          fontFamily="Lora , serif"
          color={"#00b9e8"}
        >
          Skills
          <Text mt={["-38px","","-55px"]} marginLeft={["220px", "330px", "760px"]}>
            <SlSettings className="bounce" color={"#00b9e8"} />
          </Text>
        </Heading>
        <Box
          className="skills"
          border={"0px solid white"}
          mt={"-12px"}
          height={["400px", "500px", "500px"]}
        >
          <Container
            w={["200px", "300px", "80%"]}
            marginTop={["50px", "60px", "80px"]}
            marginLeft={["50px", "80px", "400px"]}
          >
            <Grid
              h="200px"
              templateColumns={[
                "repeat(4, 1fr)",
                "repeat(4, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={["5px", "4px", "30px"]}
            >
              <GridItem
                w={["100%", "100%", "90%"]}
                fontSize={["60px", "60px", "80px"]}
                h="110"
                border={"0px solid red"}
                color="#e44f26"
                boxShadow={"base"}
                fontWeight={"700"}
              >
                <RubberBand>
                  {" "}
                  <FaHtml5 color={"#e44f26"} />
                </RubberBand>

                <Text
                  fontSize={["12px", "20px", "16px"]}
                  mr={["10px", "20px", "20px"]}
                  mt={"2px"}
                >
                  {" "}
                  HTML
                </Text>
              </GridItem>

              <GridItem
                w={["100%", "100%", "90%"]}
                fontSize={["60px", "60px", "80px"]}
                h="110"
                color={"#0066b6"}
                boxShadow={"base"}
                mr={["5px", "30px", "0px"]}
                fontWeight={"700"}
              >
                <RubberBand>
                  {" "}
                  <FaCss3 color={"#0066b6"} />
                </RubberBand>
                <Text
                  fontSize={["12px", "20px", "16px"]}
                  mr={["5px", "30px", "28px"]}
                  mt={"2px"}
                >
                  {" "}
                  CSS
                </Text>
              </GridItem>

              <GridItem
                w={["100%", "100%", "90%"]}
                fontSize={["60px", "60px", "80px"]}
                h="110"
                color={"#e4d04b"}
                boxShadow={"base"}
                fontWeight={"700"}
              >
                <RubberBand>
                  <FaJs color={"#e4d04b"} />
                </RubberBand>
                <Text
                  fontSize={["12px", "20px", "16px"]}
                  mr={["5px", "50px", "20px"]}
                  mt={"2px"}
                >
                  {" "}
                  JS
                </Text>
              </GridItem>

              <GridItem
                w={["100%", "100%", "90%"]}
                fontSize={["60px", "60px", "80px"]}
                h="110"
                color={"#00cdf2"}
                boxShadow={"base"}
                fontWeight={"700"}
              >
                <RubberBand>
                  {" "}
                  <FaReact color={"#00cdf2"} />
                </RubberBand>
                <Text
                  fontSize={["12px", "20px", "16px"]}
                  mr={["5px", "20px", "15px"]}
                  mt={"2px"}
                >
                  {" "}
                  React
                </Text>
              </GridItem>

              <GridItem
                w={["100%", "80%", "70%"]}
                mt={"7px"}
                fontSize={["60px", "60px", "70px"]}
                h="110"
                color={"#48aaeb"}
                ml={"8px"}
                boxShadow={"base"}
                fontWeight={"700"}
              >
                <RubberBand>
                  {" "}
                  <SiTypescript color={"#48aaeb"} />
                </RubberBand>
                <Text
                  fontSize={["12px", "20px", "16px"]}
                  mr={["5px", "20px", "0px"]}
                  mt={"6px"}
                >
                  {" "}
                  Typescript
                </Text>
              </GridItem>

              <GridItem
                w={["100%", "100%", "90%"]}
                fontSize={["60px", "60px", "80px"]}
                
                h="110"
                color={"#679d5a"}
                boxShadow={"base"}
                fontWeight={"700"}
              >
                <RubberBand>
                  {" "}
                  <FaNodeJs color={"#679d5a"} />
                </RubberBand>
                <Text
                  fontSize={["12px", "20px", "16px"]}
                  mr={["10px", "35px", "25px"]}
                  mt={"2px"}
                >
                  NodeJs
                </Text>
              </GridItem>

              <GridItem
                w={["100%", "100%", "90%"]}
                fontSize={["60px", "60px", "80px"]}
                h="110"
                color={"#764abc"}
                boxShadow={"base"}
                fontWeight={"700"}
              >
                <RubberBand>
                  <SiRedux color={"#764abc"} />
                </RubberBand>
                <Text
                  fontSize={["12px", "20px", "16px"]}
                  mr={["5px", "20px", "15px"]}
                  mt={"2px"}
                >
                  {" "}
                  Redux
                </Text>
              </GridItem>

              <GridItem
                w={["100%", "100%", "90%"]}
                fontSize={["60px", "60px", "80px"]}
                h="110"
                color={"#4ba13e"}
                boxShadow={"base"}
                fontWeight={"700"}
              >
                <RubberBand>
                  <SiMongodb color={"#4ba13e"} />
                </RubberBand>
                <Text
                  fontSize={["11px", "20px", "16px"]}
                  mr={["5px", "20px", "14px"]}
                  mt={"2px"}
                >
                  MongoDb
                </Text>
              </GridItem>

              <GridItem
                w={["90%", "100%", "90%"]}
                fontSize={["60px", "60px", "80px"]}
                h="110"
                color={"#e4d04b"}
                boxShadow={"base"}
                fontWeight={"700"}
              >
                <RubberBand>
                  <SiExpress color={"#e4d04b"} />
                </RubberBand>
                <Text
                  fontSize={["8px", "20px", "16px"]}
                  mr={["0px", "20px", "21px"]}
                  mt={["-5px","","2px"]}
                >
                  {" "}
                  ExpressJS
                </Text>
              </GridItem>

              <GridItem
                w={["90%", "90%", "80%"]}
                fontSize={["60px", "60px", "80px"]}
                h="110"
                color={"grey"}
                boxShadow={"base"}
                fontWeight={"700"}
              >
                <RubberBand>
                  <Image src={photoshop}/>
                </RubberBand>
                <Text
                textAlign={"center"}
                  fontSize={["8px", "20px", "16px"]}
                  mr={["0px", "20px", "0px"]}
                  mt={"-5px"}
                >
                  Photoshop
                </Text>
              </GridItem>

              <GridItem
                w={["90%", "100%", "70%"]}
                fontSize={["60px", "60px", "80px"]}
                h="110"
                color={"#7910f2"}
                boxShadow={"base"}
                fontWeight={"700"}
              >
                <RubberBand>
                  <FaBootstrap color={"#7910f2"} />
                </RubberBand>
                <Text
                  fontSize={["8px", "20px", "16px"]}
                  mr={["0px", "35px", "0px"]}
                  mt={["-5px","","2px"]}
                >
                  {" "}
                  Bootstrap
                </Text>
              </GridItem>

              <GridItem
                w={["90%", "90%", "70%"]}
                fontSize={["60px", "50px", "70px"]}
                h="110"
                color={"#44bcb9"}
                boxShadow={"base"}
                fontWeight={"700"}
              >
                <RubberBand>
                  <SiChakraui color={"#44bcb9"} />
                </RubberBand>
                <Text
                  fontSize={["8px", "20px", "16px"]}
                  mr={["-5px", "6px", "-2px"]}
                  mt={["","","12px"]}
                >
                  {" "}
                  ChakraUI
                </Text>
              </GridItem>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
