import React from "react";
import { FaUser } from "react-icons/fa";
import "../Css/about.css";
import profile_img from "../images/profile_img.png";
import LightSpeed from "react-reveal/LightSpeed";

import { Box, Flex, Image, Text } from "@chakra-ui/react";

function About() {
  return (
    <Box id="about" width="80%" margin="auto" marginTop="100px">
      <Flex
        flexDirection={["row", "row", "row"]}
        justifyContent={["center", "center", "flex-start"]}
        alignItems={["center", "center", "center"]}
        border="0px solid red"
      >
        <Box
          width={["100%", "100%", "50%"]}
          border="0px solid green"
          marginLeft={["50px", "50px", "158px", "75px"]}
        >
          <Text
            color="#00b9e8"
            textAlign={["right", "right", "right"]}
            fontSize={["30px", "30px", "30px", "40px"]}
          >
            About Me
          </Text>
        </Box>
        <Box
          width={["90%", "100%", "50%"]}
          border="0px solid grey"
          padding="8px"
          marginLeft={["0", "0", "0"]}
        >
          <FaUser class="bounce" color="#00b9e8" fontSize="40px" />
        </Box>
      </Flex>
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        justifyContent={["center", "center", "space-evenly"]}
        alignItems={["center", "center", "center"]}
      >
        <Box
          width={["100%", "100%", "40%"]}
          border="0px solid yellow"
          mt={["20px", "20px", "0"]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={profile_img} width="60%" borderRadius="50px" />
        </Box>

        <Box
          width={["100%", "100%", "60%"]}
          border="0px solid orange"
          padding="18px"
        >
          <LightSpeed right big>
            <Text
              color="white"
              textAlign={["justify", "justify", "justify"]}
              fontSize={["18px", "18px", "18px"]}
              lineHeight={["34px", "34px", "45px"]}
            >
              As a highly motivated and innovative full-stack web developer, I
              have a strong track record of building websites using the MERN
              stack and a range of cutting-edge web technologies. My journey in
              web development began in 2019, and I honed my skills further by
              joining Masai School. I am deeply passionate about staying abreast
              of the latest advancements in software development. With extensive
              coding experience and a focus on problem-solving, I bring a wealth
              of knowledge to every project.
            </Text>
          </LightSpeed>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
