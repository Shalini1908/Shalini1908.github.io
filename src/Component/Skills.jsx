import React from "react";

import {
  Box,
  Grid,
  GridItem,

  Heading,

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

import RubberBand from "react-reveal/RubberBand";
import {
  SiRedux,
  SiMongodb,
  SiExpress,
  SiAdobephotoshop,
  SiChakraui,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  return (
    <>
      <Box marginTop={["250px", "150px", "200px"]}>
        <Heading
          m={"auto"}
          // mr={["10%", "10%", "0%"]}
          display={"flex"}
          justifyContent={"center"}
          fontWeight="400"
          fontSize={["3xl", "4xl", "5xl"]}
          fontFamily="Lora , serif"
          color={"#00b9e8"}
        >
          <Text m={"15px"}>Skills</Text>
          <Text m={"10px"} mt={"15px"}>
            {" "}
            <SlSettings className="bounce" color={"#00b9e8"} />
          </Text>
        </Heading>
        <Box
          className="skills"
          border={"0px solid white"}
          mt={"30px"}
      
        >
       
          <Grid border={"0px solid yellow"} templateColumns={[
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
          ]}
            w={["99%", "85%", "60%"]}
            rowGap={"20px"}
            padding={"10px"}
            m={'auto'}>
            <GridItem border={"0px solid white"} justifyContent={'center'} ml={["-10px","-34px","0px","0px"]} p={1}>
              <Text border={"0px solid red"} fontSize={"95px"} w={["100%", "70%", "80%", "60%", "50%"]} m={'auto'} textAlign={'center'}>
                <RubberBand>
                  {" "}
                  <FaHtml5 color={"#e44f26"} />
                </RubberBand>
              </Text>

              <Text color={"#e44f26"} ml={["-12px","-20px","0px","0px","0px"]}> Html</Text>
            </GridItem>

            <GridItem border={"0px solid white"} justifyContent={'center'}  p={1}>
              <Text border={"0px solid red"} fontSize={"90px"} w={["100%", "90%", "80%", "60%", "50%"]} m={'auto'} textAlign={'center'}>
                <RubberBand>
                  {" "}
                  <FaCss3 color={"#0066b6"} />
                </RubberBand>
              </Text>

              <Text color={"#0066b6"}>Css</Text>
            </GridItem>

            <GridItem border={"0px solid white"} justifyContent={'center'}  p={1}>
              <Text border={"0px solid red"} fontSize={"90px"} w={["100%", "90%", "80%", "60%", "50%"]} m={'auto'} textAlign={'center'}>
                <RubberBand>
                  {" "}
                  <FaJs color={"#e4d04b"} />
                </RubberBand>
              </Text>

              <Text color={"#e4d04b"}>JavaScript</Text>
            </GridItem>

            <GridItem border={"0px solid white"} justifyContent={'center'}  p={1}>
              <Text border={"0px solid red"} fontSize={"90px"} w={["100%", "90%", "80%", "60%", "50%"]} m={'auto'} textAlign={'center'}>
                <RubberBand>
                  {" "}
                  <FaReact color={"#00cdf2"} />
                </RubberBand>
              </Text>

              <Text color={"#00cdf2"}>React</Text>
            </GridItem>

            <GridItem border={"0px solid white"} justifyContent={'center'} ml={["0px","","","0px"]}  p={1}>
              <Text border={"0px solid red"} fontSize={["75px", "70px", "70px", "80px"]} w={["100%", "90%", "80%", "60%", "36%"]} m={'auto'} mt={["10px","","",""]} textAlign={'center'}>
                <RubberBand>
                  {" "}
                  <SiTypescript color={"#48aaeb"} />
                </RubberBand>
              </Text>

              <Text color={"#48aaeb"} mt={["5px","","","",""]} ml={["-15px","-40px","0px","0px"]}>Typescript</Text>
            </GridItem>

            <GridItem border={"0px solid white"} justifyContent={'center'}  p={1}>
              <Text border={"0px solid red"} fontSize={"90px"} w={["100%", "90%", "80%", "60%", "50%"]} m={'auto'} textAlign={'center'}>
                <RubberBand>
                  {" "}
                  <FaNodeJs color={"#679d5a"} />
                </RubberBand>
              </Text>

              <Text color={"#679d5a"}>Node JS</Text>
            </GridItem>

            <GridItem border={"0px solid white"} justifyContent={'center'}  p={1}>
              <Text border={"0px solid red"} fontSize={"90px"} w={["100%", "90%", "80%", "60%", "50%"]} m={'auto'} textAlign={'center'}>
                <RubberBand>
                  {" "}
                  <SiRedux color={"#764abc"} />
                </RubberBand>
              </Text>

              <Text color={"#764abc"}>Redux</Text>
            </GridItem>

            <GridItem border={"0px solid white"} justifyContent={'center'}  p={1}>
              <Text border={"0px solid red"} fontSize={"90px"} w={["100%", "90%", "80%", "60%", "50%"]} m={'auto'} textAlign={'center'}>
                <RubberBand>
                  {" "}
                  <SiMongodb color={"#4ba13e"} />
                </RubberBand>
              </Text>

              <Text color={"#4ba13e"}>MongoDB</Text>
            </GridItem>

            <GridItem border={"0px solid white"} justifyContent={'center'}ml={["0px","0px","0px","14px"]}  p={1}>
              <Text border={"0px solid red"} fontSize={["88px","","",""]} w={["100%", "90%", "80%", "60%", "50%"]} m={'auto'} textAlign={'center'}>
                <RubberBand>
                  {" "}
                  <SiExpress color={"#d7c447"} />
                </RubberBand>
              </Text>

              <Text color={"#d7c447"}>Express JS</Text>
            </GridItem>

            <GridItem border={"0px solid white"} justifyContent={'center'} ml={["10px","","",""]}  p={1}>
              <Text border={"0px solid red"} fontSize={["78px", "80px", "70px", "80px"]} w={["100%", "90%", "80%", "60%", "50%"]} m={'auto'} mt={["9px","","",""]}textAlign={'center'}>
                <RubberBand>
                  {" "}
                  <SiAdobephotoshop color="#0070ba" />
                </RubberBand>
              </Text>

              <Text color={"white"} ml={["-16px","-23px","0px","0px"]}>Photoshop</Text>
            </GridItem>

            <GridItem border={"0px solid white"} justifyContent={'center'}  p={1}>
              <Text border={"0px solid red"} fontSize={"90px"} w={["100%", "90%", "80%", "60%", "50%"]} m={'auto'} textAlign={'center'}>
                <RubberBand>
                  {" "}
                  <FaBootstrap color={"#7910f2"} />
                </RubberBand>
              </Text>

              <Text color={"#7910f2"}>Bootstrap</Text>
            </GridItem>

            <GridItem border={"0px solid white"} justifyContent={'center'}  p={1}>
              <Text border={"0px solid red"} fontSize={"90px"} w={["100%", "90%", "80%", "60%", "50%"]} m={'auto'} textAlign={'center'}>
                <RubberBand>
                  {" "}
                  <SiChakraui color={"#44bcb9"} />
                </RubberBand>
              </Text>

              <Text color={"#44bcb9"} >Chakar UI</Text>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
