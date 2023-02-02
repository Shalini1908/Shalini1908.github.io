import React from "react";
import {
  Box,
  Stack,
  Input,
  Text,
  Flex,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    // display={["inline", "inline", "inline"]}
    <>
      <Box h={["1000px", "1050px", "700px"]}>
        <Text
          mb="25px"
          textAlign="center"
          fontWeight="400"
          fontSize={["3xl", "4xl", "5xl"]}
          color={"#00b9e8"}
          mt={"10%"}
        >
          Contact Me
        </Text>
        <Box
          display={["inline", "inline", "flex"]}
          gap={"70px"}
          border={"0px solid red"}
          className="contact"
          id="contact"
          w={["100%", "97%", "79%"]}
          fontSize={30}
          color={"black"}
          m={"auto"}
          mt={"5%"}
          h={"500px"}
        >
          <Box w={["70%", "70%", "50%"]} ml={["15%", "15%", "5%"]}>
            <Stack>
              <Text
                color={"#00b9e8"}
                fontSize={["20px", "25px", "30px"]}
                textAlign={["center", "center", "left"]}
              >
                Get in Touch
              </Text>
              <Text
                fontSize={["14px", "15px", "20px"]}
                color={"white"}
                display={["none", "none", "center"]}
              >
                Got a project? Reach out and let's work together
              </Text>

              <Box ml={["10px", "100px", "1px"]}>
                <Box mt={"5px"}>
                  <Flex>
                    <Text
                      ml={["50px", "100px", "1px"]}
                      fontSize={["20px", "30px", "40px"]}
                      mt={"5px"}
                    >
                      <TfiEmail color="white" />
                    </Text>
                    <Text
                      color={"white"}
                      fontSize={["14px", "20px", "22px"]}
                      ml={["8%", "", ""]}
                      mt={["4px", "", ""]}
                    >
                      <a
                        href="mailto:singhparmar1908@gmail.com"
                        alt="githublink"
                        target="_blank"
                        rel="noreferrer"
                      >
                        singhparmar1908@gmail.com
                      </a>
                    </Text>
                  </Flex>
                </Box>

                <Box mt={"5px"}>
                  <Flex>
                    <Text
                      ml={["50px", "100px", "1px"]}
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <a
                        href="https://github.com/Shalini1908"
                        fontSize={["20px", "30px", "40px"]}
                      >
                        <AiFillGithub color="white" />
                      </a>
                    </Text>
                    <Text
                      color={"white"}
                      fontSize={["14px", "20px", "22px"]}
                      ml={["8%", "", ""]}
                      mt={["3px", "", ""]}
                    >
                      <a
                        href="https://github.com/Shalini1908"
                        alt="githublink"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </Text>
                  </Flex>
                </Box>

                <Box mt={"5px"}>
                  <Flex>
                    <Text
                      ml={["50px", "100px", "1px"]}
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <a
                        href="https://www.linkedin.com/in/shalini-singh-705277257/"
                        alt=""
                        fontSize={["20px", "30px", "40px"]}
                      >
                        <FaLinkedin color={"#4db5ff"} />
                      </a>
                    </Text>
                    <Text
                      color={"white"}
                      fontSize={["14px", "20px", "22px"]}
                      ml={["8%", "", ""]}
                      mt={["1px", "", ""]}
                    >
                      <a
                        href="https://www.linkedin.com/in/shalini-singh-705277257/"
                        alt="linkedinlink"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Shalini Singh
                      </a>
                    </Text>
                  </Flex>
                </Box>

                <Box mt={"5px"}>
                  <Flex>
                    <Text
                      ml={["50px", "100px", "1px"]}
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <a
                        href="https://github.com/Shalini1908"
                        fontSize={["20px", "30px", "40px"]}
                      >
                        <IoCall color="white" />
                      </a>
                    </Text>
                    <Text
                      color={"white"}
                      fontSize={["14px", "20px", "22px"]}
                      ml={["8%", "", ""]}
                      mt={["1px", "", ""]}
                    >
                      + 91 9959616898
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Stack>
          </Box>

          <form
            action="https://getform.io/f/f2cad863-a312-464c-bf76-973911fa56e1"
            method="POST"
          >
            <Box
              w={["70%", "70%", "90%"]}
              mt={["100px", "100px", "0px"]}
              h={"400px"}
              ml={["70px", "100px", "-5%"]}
            >
              <Stack>
                <Stack>
                  <Text
                    color={"#00b9e8"}
                    fontSize={["20px", "25px", "30px"]}
                    textAlign={["center", "center", "left"]}
                    mt={["-10px", "", ""]}
                  >
                    Message Me
                  </Text>
                  <Flex>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      size={["md", "lg", "lg"]}
                      color={"white"}
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      size={["md", "lg", "lg"]}
                      color={"white"}
                      ml={"20px"}
                    />
                  </Flex>
                </Stack>

                <Stack mt={"20px"}>
                  <Input
                    type="number"
                    name="number"
                    placeholder="Mobile Number"
                    size={["md", "lg", "lg"]}
                    color={"white"}
                    m={"auto"}
                    mt={"8%"}
                  />
                </Stack>

                <Stack mt={"20px"}>
                  <Textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    size={["md", "lg", "lg"]}
                    color={"white"}
                    m={"auto"}
                    mt={"8%"}
                  />
                </Stack>
                <Stack mt={"20px"}>
                  <Button
                    type="submit"
                    w={["50%", "30%", "50%"]}
                    h={["35px", "40px", "45px"]}
                    mt={"5%"}
                    ml={["56px", "170px", "100px"]}
                    size="lg"
                    color={"black"}
                    fontSize={["15px", "19px", "20px"]}
                    bg={"white"}
                    _hover={{
                      background: "#00b9e8",
                      color: "black",
                    }}
                  >
                    Send
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
