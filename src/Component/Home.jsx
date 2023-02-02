import {
  Stack,
  Flex,
  Button,
  Text,
  Box,
  VStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Shalini_Singh_Resume from "../images/Shalini-Singh-Resume.pdf";
import { DownloadIcon } from "@chakra-ui/icons";
export default function Banner() {
  return (
    <Flex
      w={"full"}
      id="home" 
      h={"100vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)"
      }
      backgroundSize={"cover"}
      backgroundColor={"black"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
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
            color={"white"}
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
          <Stack direction={"row"} >
            <IconButton
              as="a"
              href="https://github.com/Shalini1908"
              bg={'white'}
              // rounded={'full'}
              color={"white"}
         
              // fontSize={"40px"}
              mt={["0px","",""]}
              target="_blank"
              icon={<AiFillGithub color="black" fontSize={["38px","40px","40px"]}/>}
            />
            <IconButton
              as="a"
     
              color={"black"}
              mt={["-15px","",""]}
              href="https://www.linkedin.com/in/shalini-singh-705277257/"
     
              target="_blank"
              icon={<FaLinkedinIn fontSize={["38px","40px","40px"]}/>}
            />
          </Stack>
          <Box>
            <a 
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1R3Tl9YQxLJC9n9J75845FFfPaJUc4Nuc/view?usp=sharing",
                "blank"
              );
            }}
            href={Shalini_Singh_Resume}
            download="Shalini-Singh-Resume">
              <Button
                ml={["5px", "2%", "8px"]}
                mt={["-10px","20px",""]}
                p={["10px 10px", "18px 18px", "22px 22px"]}
                fontSize={["sm", "md", "lg"]}
                bg="white"
                color="black"
                border="none"
                w={['100px',"120px","120px"]}
                h={"36px"}
                variant="solid"
                leftIcon={<DownloadIcon/>}
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
    </Flex>
  );
}
