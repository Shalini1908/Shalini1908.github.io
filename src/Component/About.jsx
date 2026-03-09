import React from "react";
import { FaUser } from "react-icons/fa";
import "../Css/about.css";

import { Box, Flex, Text } from "@chakra-ui/react";

function About() {
  return (
    <Box
      id="about"
      width="80%"
      margin="auto"
      marginTop={["250px", "150px", "150px"]}
    >
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
          width={["100%", "100%", "60%"]}
          border="0px solid orange"
          padding="18px"
        >
          <Text
            color="white"
            textAlign={["justify", "justify", "justify"]}
            fontSize={["18px", "18px", "20px"]}
            lineHeight={["34px", "34px", "45px"]}
          >
            Frontend-focused Full Stack Developer with 3 years of experience
            building scalable, user-centric web applications using modern
            JavaScript technologies. While I have hands-on experience across the
            stack, my core strength lies in frontend development, where I
            specialize in creating responsive, high-performance, and intuitive
            user interfaces using React and the MERN stack. Since beginning my
            development journey in 2019 and strengthening my foundation at Masai
            School, I have continuously focused on improving problem-solving
            skills and writing clean, maintainable, and production-ready code. I
            am passionate about building seamless user experiences and staying
            aligned with evolving industry standards.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
