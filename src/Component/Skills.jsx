import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
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
import { AttentionSeeker } from "react-awesome-reveal";
import {
  SiRedux,
  SiMongodb,
  SiExpress,
  SiAdobephotoshop,
  SiChakraui,
  SiTypescript,
  SiGraphql,
} from "react-icons/si";
import { Image } from "@chakra-ui/react";
import liquibase from "../images/Liquibase.png";
import sequelize from "../images/sequelize.png";
import sql from "../images/sql.png";

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
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  <FaHtml5 color={"#e44f26"} />
                </AttentionSeeker>
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  <FaCss3 color={"#0066b6"} />
                </AttentionSeeker>
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  <FaJs color={"#e4d04b"} />
                </AttentionSeeker>
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  <FaReact color={"#00cdf2"} />
                </AttentionSeeker>
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  <SiTypescript color={"#48aaeb"} />
                </AttentionSeeker>
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  <FaNodeJs color={"#679d5a"} />
                </AttentionSeeker>
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  <SiRedux color={"#764abc"} />
                </AttentionSeeker>
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  <SiMongodb color={"#4ba13e"} />
                </AttentionSeeker>
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  <SiExpress color={"#d7c447"} />
                </AttentionSeeker>
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  <SiAdobephotoshop color="#0070ba" />
                </AttentionSeeker>
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  <FaBootstrap color={"#7910f2"} />
                </AttentionSeeker>
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  <SiChakraui color={"#44bcb9"} />
                </AttentionSeeker>
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  <Image src={sql} width={"95px"} />
                </AttentionSeeker>
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  <GrMysql color={"#00618b"} />
                </AttentionSeeker>
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  <SiGraphql color={"#e10098"} />
                </AttentionSeeker>
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
                <AttentionSeeker effect="rubberBand">
                  {" "}
                  {/* <SiGraphql color={"#e10098"} /> */}
                  <Image src={sequelize} w={"95px"} />
                </AttentionSeeker>
              </Text>

              <Text color={"#1e7abe"}>Sequelize</Text>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
