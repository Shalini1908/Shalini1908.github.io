import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavLink from "../Component/Navlink";
import Resume from "../images/Shalini_Singh _fw20_0377.pdf";
import { Link } from "react-scroll";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
  { name: "Resume", id: "resume" },
];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isscroll, setisscroll] = useState(false);

  function isScrolling() {
    if (window.scrollY > 80) {
      setisscroll(true);
    } else {
      setisscroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <>
      <Box
        top={0}
        m={0}
        p={0}
        zIndex={1}
        bg={isscroll ? "#00b9e8" : "black"}
        fontWeight={isscroll ? "600" : "400"}
        color={isscroll ? "black" : "#00b9e8"}
        position={"fixed"}
        width={"100%"}
        justifyContent={"center"}
      >
        <Flex h={16} alignItems={"center"} gap={1}>
          <Link to="/">
            <Flex>
              <Text
                fontSize={["20px", "xl", "3xl"]}
                fontWeight={isscroll ? "600" : "400"}
                color={isscroll ? "black" : "#00b9e8"}
                ml={"20px"}
              >
                Shalini
              </Text>
            </Flex>
          </Link>
          <IconButton
            ml={["65%", "78%", ""]}
            size={"sm"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon color={"black"} />}
            aria-label={"Open Menu"}
            // display={{ xl: "none" }}
            display={{xl: "none" }} 
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={12}
              ml={"55%"}
              display={{ base: "none", md: "flex" }}
            >
              {links.map((link, i) => (
                <>
                  {link.name === "Resume" ? (
                    <a
                      onClick={() => {
                        window.open(
                          "https://drive.google.com/file/d/1bHbetP8M7UJAlTLy9mgakKwiMDVisn0y/view?usp=sharing",
                          
                          "blank"
                        );
                      }}
                      href={Resume}
                      download="Shalini_Singh _fw20_0377.pdf"
                    >
                      <Text fontSize={["lg", "xl", "2xl"]} cursor={"pointer"}>
                        {link.name}
                      </Text>
                    </a>
                  ) : (
                    <NavLink
                      fontSize={["lg", "xl", "2xl"]}
                      key={i}
                      to={link.id}
                      name={link.name}
                      onClick={() => onClose()}
                    />
                  )}
                </>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={2}></Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "block" }} ml="20px">
            <Stack as={"nav"} spacing={4}>
              {links.map((link, i) => (
                <>
                  {link.name === "Resume" ? (
                    <a
                      onClick={() => {
                        window.open(
                          "https://drive.google.com/file/d/1bHbetP8M7UJAlTLy9mgakKwiMDVisn0y/view?usp=sharing",
                          "blank"
                        );
                      }}
                      href={Resume}
                      download="fw20_0377-Shalini-Singh-Resume"
                    >
                      <Text fontSize={["lg", "xl", "2xl"]} cursor={"pointer"}>
                        {link.name}
                      </Text>
                    </a>
                  ) : (
                    <NavLink
                      key={i}
                      to={link.id}
                      name={link.name}
                      w="xm"
                      onClick={() => onClose()}
                    />
                  )}
                </>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
