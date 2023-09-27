import React from "react";

import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
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
import { GrMysql } from "react-icons/gr";
import RubberBand from "react-reveal/RubberBand";
import {
  SiRedux,
  SiMongodb,
  SiExpress,
  SiAdobephotoshop,
  SiChakraui,
  SiTypescript,
  SiPostgresql,
  SiGraphql,
  SiRedis,
  SiSocketdotio
} from "react-icons/si";
import { Image } from "@chakra-ui/react";
import liquibase from  "../images/Liquibase.png"
import sequelize from  "../images/sequelize.png"
import sql from "../images/sql.png"

const Skills = () => {
  return (
    <>
       <Box marginTop={["250px", "150px", "150px"]}>
      <Heading
        m="auto"
        display="flex"
        justifyContent="center"
        fontWeight="400"
        fontSize={["3xl", "4xl", "5xl"]}
        fontFamily="Lora, serif"
        color="#00b9e8"
      >
        <Text m="15px">Skills</Text>
        <Text m="10px" mt="15px">
          {" "}
          <SlSettings className="bounce" color="#00b9e8" />
        </Text>
      </Heading>
      <Box className="skills" border="0px solid white" mt="30px">
        <Grid
          templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
          w={["99%", "85%", "60%"]}
          rowGap="20px"
          padding="10px"
          m="auto"
        >
            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              ml={["-10px", "-34px", "0px", "0px"]}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"95px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <FaHtml5 color={"#e44f26"} />
                </RubberBand>
              </Text>

              <Text
                color={"#e44f26"}
                ml={["-12px", "-20px", "0px", "0px", "0px"]}
              >
                {" "}
                Html
              </Text>
            </GridItem>

            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <FaCss3 color={"#0066b6"} />
                </RubberBand>
              </Text>

              <Text color={"#0066b6"}>Css</Text>
            </GridItem>

            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <FaJs color={"#e4d04b"} />
                </RubberBand>
              </Text>

              <Text color={"#e4d04b"}>JavaScript</Text>
            </GridItem>

            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <FaReact color={"#00cdf2"} />
                </RubberBand>
              </Text>

              <Text color={"#00cdf2"}>React</Text>
            </GridItem>

            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              ml={["0px", "", "", "0px"]}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={["75px", "70px", "70px", "80px"]}
                w={["60%", "69%", "80%", "60%", "36%"]}
                m={"auto"}
                mt={["10px", "", "", ""]}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <SiTypescript color={"#48aaeb"} />
                </RubberBand>
              </Text>

              <Text
                color={"#48aaeb"}
                mt={["5px", "", "", "", ""]}
                ml={["-15px", "-40px", "0px", "0px"]}
              >
                Typescript
              </Text>
            </GridItem>

            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <FaNodeJs color={"#679d5a"} />
                </RubberBand>
              </Text>

              <Text color={"#679d5a"}>Node JS</Text>
            </GridItem>

            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <SiRedux color={"#764abc"} />
                </RubberBand>
              </Text>

              <Text color={"#764abc"}>Redux</Text>
            </GridItem>

            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <SiMongodb color={"#4ba13e"} />
                </RubberBand>
              </Text>

              <Text color={"#4ba13e"}>MongoDB</Text>
            </GridItem>

            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              ml={["0px", "0px", "0px", "14px"]}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={["88px", "", "", ""]}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <SiExpress color={"#d7c447"} />
                </RubberBand>
              </Text>

              <Text color={"#d7c447"}>Express JS</Text>
            </GridItem>

            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              ml={["10px", "", "", ""]}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={["78px", "80px", "70px", "80px"]}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                mt={["9px", "", "", ""]}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <SiAdobephotoshop color="#0070ba" />
                </RubberBand>
              </Text>

              <Text color={"white"} ml={["-16px", "-23px", "0px", "0px"]}>
                Photoshop
              </Text>
            </GridItem>

            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <FaBootstrap color={"#7910f2"} />
                </RubberBand>
              </Text>

              <Text color={"#7910f2"}>Bootstrap</Text>
            </GridItem>

            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <SiChakraui color={"#44bcb9"} />
                </RubberBand>
              </Text>

              <Text color={"#44bcb9"}>Chakar UI</Text>
            </GridItem>
            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  {/* <PiFileSql color={"#172b4d"} /> */}
                  <Image src={sql} width={"95px"}/>
                </RubberBand>
              </Text>

              <Text color={"white"}>SQL</Text>
            </GridItem>
            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <SiPostgresql color={"#172b4d"} />
                </RubberBand>
              </Text>

              <Text color={"white"}>Postgresql</Text>
            </GridItem>
            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <GrMysql color={"#00618b"} />
                </RubberBand>
              </Text>

              <Text color={"#00618b"}>MySQL</Text>
            </GridItem>
            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <SiGraphql color={"#e10098"} />
                </RubberBand>
              </Text>

              <Text color={"#e10098"}>Graphql</Text>
            </GridItem>
            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  {/* <SiGraphql color={"#e10098"} /> */}
                  <Image src={sequelize} w={"95px"}/>
                </RubberBand>
              </Text>

              <Text color={"#1e7abe"}>Sequelize</Text>
            </GridItem>
            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <SiRedis color={"#d92f27"} />
                </RubberBand>
              </Text>

              <Text color={"#d92f27"}>Redis</Text>
            </GridItem>
            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  <SiSocketdotio color={"white"} />
                </RubberBand>
              </Text>

              <Text color={"white"}>Socket IO</Text>
            </GridItem>
            <GridItem
              border={"0px solid white"}
              justifyContent={"center"}
              p={1}
            >
              <Text
                border={"0px solid red"}
                fontSize={"90px"}
                w={["60%", "69%", "80%", "60%", "50%"]}
                m={"auto"}
                textAlign={"center"}
              >
                <RubberBand>
                  {" "}
                  {/* <SiLiquibase color={"#e10098"} /> */}
                  <Image src ={liquibase} width={"95px"} margin={"auto"}/>
                </RubberBand>
              </Text>

              <Text color={"#ff3c00"}>Liquibase</Text>
            </GridItem>
          
          
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
