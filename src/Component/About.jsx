import React from "react";
import { FaUser } from "react-icons/fa";
// import Zoom from 'react-reveal/Zoom';
import "../Css/about.css";
import profile_img from "../images/profile_img.png";
import LightSpeed from "react-reveal/LightSpeed";

import { Box, Image, Text } from "@chakra-ui/react";

function About() {
  return (
    <Box
      id="about"
      p="30px 0px"
      pt="10px"
      mt={"4%"}
      h={["650px", "670px", "570px"]}
    >
      <Box
        w="87%"
        m="auto"
        mt={"40px"}
        display={["inline", "inline", "flex"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <Image
          w={["50%", "40%", "28%"]}
          marginTop={"50px"}
          ml={["100px", "190px", "70px"]}
          borderRadius={"16%"}
          src={profile_img}
          alt="img"
        />
        <Box w={["90%", "90%", "40%"]} m="auto">
          <Box display={"flex"} gap={"15px"} ml={["110px", "230px", "92px"]}>
            <Text
              textAlign="center"
              fontWeight="400"
              mt="20px"
              fontSize={["3xl", "4xl", "5xl"]}
              color={"#00b9e8"}
            >
              About Me
            </Text>
            <Text fontSize={["3xl", "4xl", "5xl"]} marginTop={"28px"}>
              <FaUser className="bounce" color="#00b9e8" />
            </Text>
          </Box>
          <Text
            fontFamily="Geneva"
            w={["90%", "90%", "90%"]}
            mt={["7px", "4px", "10px"]}
            ml={["20px", "32px", "2px"]}
            fontSize={["18px", "20px", "20px"]}
            textAlign={"center"}
          >
            {/* <LightSpeed right big> */}
            <LightSpeed right big>
              <Text
                color={"white"}
                textAlign={"justify"}
                lineHeight={"34px"}
                w={["305px", "465px", "375px", "450px"]}
              >
                Motivated and innovating full-stack web developer with hands-on
                experience in building websites with MERN stack and various web
                technologies. I am passionate about staying up-to-date with the
                latest technologies and techniques in software development. I
                started learning Web Development in 2019 , for full stack web
                development I joined Masai School. Possessing experience of
                1200+ hours of coding and solved more than 950+ DSA questions.
              </Text>
            </LightSpeed>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default About;

{
  /* Motivated and innovativating full-stack web developer with
                hands-on experience in building websites with MERN stack and
                various web technologies.Possessing experience of 1200+ hours
                of coding and solved more than 950+ DSA questions. */
}
