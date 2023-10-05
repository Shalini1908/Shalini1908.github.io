import {
  Stack,
  Flex,
  Button,
  Text,
  Box,
  VStack,
  IconButton,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Resume from "../images/Shalini_Singh _fw20_0377.pdf";
import { DownloadIcon } from "@chakra-ui/icons";
import profile_img from "../images/profile_img.png";

export default function Banner() {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex
      w={"full"}
      id="home"
      h={"auto"}
      border={"0px solid yellow"}
      flexDirection={isMobile ? "column" : "row"}
      marginTop={["200px", "100px", "80px"]}
      alignItems="center"
    >
      {isMobile && (
        <Box
          border="0px solid red"
          mt={["-115px", "20px", "30px", "70px"]}
          ml={["20px", "20px", "50px"]}
          h={"auto"}
          width={["100%", "100%", "50%"]}
          display="flex"
          justifyContent="center"
        >
          <Image src={profile_img} maxW={["65%", "50%", "75%","100%"]} borderRadius={"20px"} />
        </Box>
      )}
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Text
            marginTop={["90px", "100px", "0px"]}
            color={"white"}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "4xl", md: "5xl" })}
          >
            Hi, I'm Shalini Singh
          </Text>

          <Box
            color={"#00ff2a"}
            fontSize={["18px", "24px", "32px"]}
            textAlign={["left", "left", "left"]}
            fontWeight={"500"}
          >
            <Typewriter
              options={{
                strings: ["I'm a Full Stack Web Developer.", "I Love To Code."],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </Box>
          <Stack direction={"row"}>
            <IconButton
              as="a"
              href="https://github.com/Shalini1908"
              bg={"white"}
              color={"white"}
              _hover={{
                background: "#1877f2",
                color: "black",
              }}
              target="_blank"
              icon={
                <AiFillGithub
                  color="black"
                  fontSize={["38px", "40px", "40px"]}
                />
              }
            />
            <IconButton
              as="a"
              color={"black"}
              href="https://www.linkedin.com/in/shalini-singh-705277257/"
              target="_blank"
              _hover={{
                background: "#1877f2",
                color: "black",
              }}
              icon={<FaLinkedinIn fontSize={["38px", "40px", "40px"]} />}
            />
          </Stack>
          <Box>
            <a
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1bHbetP8M7UJAlTLy9mgakKwiMDVisn0y/view?usp=sharing",
                  "blank"
                );
              }}
              href={Resume}
              download="Shalini_Singh_fw20_0377.pdf"
            >
              <Button
                ml={["5px", "2%", "8px"]}
                mt={["-10px", "20px", ""]}
                p={["10px 10px", "18px 18px", "22px 22px"]}
                fontSize={["sm", "md", "lg"]}
                bg="white"
                color="black"
                border="none"
                w={["100px", "120px", "120px"]}
                h={"36px"}
                variant="solid"
                leftIcon={<DownloadIcon />}
                _hover={{
                  background: "#1877f2",
                  color: "black",
                }}
              >
                Resume
              </Button>
            </a>
          </Box>
        </Stack>
      </VStack>
      {!isMobile && (
        <Box
          border="0px solid red"
          mt={["20px", "20px", "30px", "100px"]}
          mr={["20px", "20px", "100px"]}
          width={["200px", "300px", "550px"]}
          h={"auto"}
        >
          <Image src={profile_img} maxW={["60%", "80%", "100%"]}   borderTopLeftRadius="90px"
  borderTopRightRadius="10px"  
  borderBottomRightRadius="50px" 
  borderBottomLeftRadius="50px"
 />
        </Box>
      )}
    </Flex>
  );
}
