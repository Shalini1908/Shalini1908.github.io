import React from "react";
import { FaUser } from "react-icons/fa";
// import Zoom from 'react-reveal/Zoom';
import "../Css/about.css";
import profile_img from "../images/profile_img.png";
import LightSpeed from "react-reveal/LightSpeed";

import { Box, Flex, Image, Text } from "@chakra-ui/react";

function About() {
  return (
    // <Box
    //   id="about"
    //   p="30px 0px"
    //   pt="10px"
    //   m={["auto","auto","auto","auto"]}
    //   alignItems={"center"}
    //   textAlign={"center"}
    //   mt={"4%"}
    //   h={["auto","auto", "670px", "570px"]}
    //   border={"1px solid blue"}
    //   w={"95%"}
    // >
    //   <Box
    //     w="87%"
    //     m="auto"
    //     mt={"40px"}
    //     display={["inline", "inline", "flex"]}
    //     justifyContent="space-between"
    //     alignItems="center"
    //   >
    //     <Image
    //       w={["50%", "40%", "28%"]}
    //       marginTop={"50px"}
    //       ml={["160px", "195px", "70px"]}
    //       borderRadius={"16%"}
    //       src={profile_img}
    //       alt="img"
    //     />
    //     <Box w={["90%", "90%", "40%"]} m="auto">
    //       <Box display={"flex"} gap={"15px"} ml={["110px", "195px", "92px"]}>
    //         <Text
    //           textAlign="center"
    //           fontWeight="400"
    //           mt="20px"
    //           fontSize={["3xl", "4xl", "5xl"]}
    //           color={"#00b9e8"}
    //         >
    //           About Me
    //         </Text>
    //         <Text fontSize={["3xl", "4xl", "5xl"]} marginTop={"28px"}>
    //           <FaUser className="bounce" color="#00b9e8" />
    //         </Text>
    //       </Box>
    
    //       <Text
    //         fontFamily="Geneva"
    //         w={["90%", "90%", "90%"]}
    //         mt={["7px", "4px", "10px"]}
    //         // ml={["20px", "0px", "2px"]}
    //         fontSize={["18px", "20px", "20px"]}
    //         textAlign={"center"}
    //       >
    //         {/* <LightSpeed right big> */}
    //         <LightSpeed right big>
    //           <Text
    //             color={"white"}
    //             textAlign={"justify"}
    //             lineHeight={"34px"}
    //             w={["520px", "515px", "380px"]}
    //           >
    //             {/* Motivated and innovating full-stack web developer with hands-on
    //             experience in building websites with MERN stack and various web
    //             technologies. I am passionate about staying up-to-date with the
    //             latest technologies and techniques in software development. I
    //             started learning Web Development in 2019 , for full stack web
    //             development I joined Masai School. Possessing experience of
    //             1200+ hours of coding and solved more than 950+ DSA questions. */}
    //             As a highly motivated and innovative full-stack web developer, I
    //             have a strong track record of building websites using the MERN
    //             stack and a range of cutting-edge web technologies. My journey
    //             in web development began in 2019, and I honed my skills further
    //             by joining Masai School. I am deeply passionate about staying
    //             abreast of the latest advancements in software development. With
    //             extensive coding experience and a focus on problem-solving, I
    //             bring a wealth of knowledge to every project
    //           </Text>
    //         </LightSpeed>
    //       </Text>
         
    //     </Box>
    //   </Box>
    // </Box>

    // <Box border={"1px solid white"} width={"80%"} margin={"auto"} marginTop={"100px"}>
    //   <Box margin={"auto"}  border={"1px solid red"} display={"flex"}>

    //     <Box  width={"50%"} border={"1px solid green"} marginLeft={"0px"}>
    //     <Text color={"white"}  textAlign={"center"} fontSize={"40px"} marginLeft={"300px"}>About Me</Text>
    //     </Box>
    //     <Box w={"50%"}  border={"1px solid grey"} padding={"8px"} marginLeft={"0px"}>
    //     <FaUser className="bounce" color="#00b9e8" marginLeft={"30px"} fontSize={"40px"} />
    //     </Box>
    //   </Box>
    //   <Box  padding={"20px"} display={"flex"} justifyContent={"space-evenly"} >

    // <Box w={"40%"} border={"1px solid yellow"} mt={"0px"}>

    //   <Image src={profile_img} width={"70%"}margin={"auto"} mt={"20px"}/>
    // </Box>

    //   <Box w={"60%"} border={"1px solid orange"} padding={"18px"}>
    //     <Text color={"white"} textAlign={"justify"} fontSize={"18px"} lineHeight={"45px"} >
    //             As a highly motivated and innovative full-stack web developer, I
    //             have a strong track record of building websites using the MERN
    //             stack and a range of cutting-edge web technologies. My journey
    //             in web development began in 2019, and I honed my skills further
    //             by joining Masai School. I am deeply passionate about staying
    //             abreast of the latest advancements in software development. With
    //             extensive coding experience and a focus on problem-solving, I
    //             bring a wealth of knowledge to every project
    //     </Text>
    //   </Box>
    //   </Box>
    // </Box>



    <Box
    id="about"
    width="80%"
    margin="auto"
    marginTop="100px"
  >
    <Flex
      flexDirection={['row', 'row', 'row']}
      justifyContent={['center', 'center', 'flex-start']}
      alignItems={['center', 'center', 'center']}
      border="0px solid red"
    >
      <Box
        width={['100%', '100%', '50%']}
        border="0px solid green"
        marginLeft={['50px', '50px', "158px", '75px']}
      >
        <Text
          color="#00b9e8"
          textAlign={['right','right', 'right']}
          fontSize={["30px",'30px', '30px', '40px']}
  
        >
          About Me
        </Text>
      </Box>
      <Box
        width={['90%', '100%', '50%']}
        border="0px solid grey"
        padding="8px"
        marginLeft={['0', '0', '0']}
      >
        <FaUser class="bounce" color="#00b9e8" fontSize="40px" />
      </Box>
    </Flex>
    <Flex
      flexDirection={['column', 'column',"column", 'row']}
      justifyContent={['center', 'center', 'space-evenly']}
      alignItems={['center', 'center', 'center']}
    >
<Box
  width={['100%', '100%', '40%']}
  border="0px solid yellow"
  mt={['20px', '20px', '0']}
  display="flex"
  justifyContent="center"
  alignItems="center"
>
  <Image src={profile_img} width="60%" borderRadius="50px" />
</Box>

      <Box
        width={['100%', '100%', '60%']}
        border="0px solid orange"
        padding="18px"
      >
        <LightSpeed right big>
        <Text
          color="white"
          textAlign={['justify', 'justify', 'justify']}
          fontSize={['18px', '18px', '18px']}
          lineHeight={['34px', '34px', '45px']}
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

































  //   <Box
  //   id="about"
  //   p="30px 0px"
  //   pt="10px"
  //   m="auto"
  //   mt="4%"
  //   h={['auto', 'auto', '570px']}
  //   border="1px solid blue"
  //   w="95%"
  // >
  //   <Flex
  //     w="100%"
  //     m="auto"
  //     mt="40px"
  //     flexWrap="wrap"
  //     justifyContent="center"
  //     alignItems="center"
  //   >
  //     <Image
  //       w={['100%', '70%', '28%']}
  //       maxWidth="400px"
  //       marginBottom={['20px', '0', '0']}
  //       borderRadius="16%"
  //       src={profile_img}
  //       alt="img"
  //     />
  //     <Flex
  //       flex="1"
  //       flexDir="column"
  //       justifyContent="center"
  //       alignItems={['center', 'center', 'flex-start']}
  //       mt={['20px', '0', '0']}
  //       ml={['0', '0', '70px']}
  //     >
  //       <Text
  //         textAlign={['center', 'center', 'left']}
  //         fontWeight="400"
  //         fontSize={['3xl', '4xl', '5xl']}
  //         color="#00b9e8"
  //         fontFamily="Geneva"
  //       >
  //         About Me
  //       </Text>
  //       <Text
  //         fontSize={['3xl', '4xl', '5xl']}
  //         marginTop="28px"
  //         fontFamily="Geneva"
  //       >
  //         <FaUser className="bounce" color="#00b9e8" />
  //       </Text>
  //       <Text
  //         fontFamily="Geneva"
  //         mt="20px"
  //         fontSize={['18px', '20px', '20px']}
  //         textAlign={['center', 'center', 'justify']}
  //         color="white"
  //         lineHeight={['1.5', '1.5', '1.8']}
  //       >
  //         As a highly motivated and innovative full-stack web developer, I
  //         have a strong track record of building websites using the MERN stack
  //         and a range of cutting-edge web technologies. My journey in web
  //         development began in 2019, and I honed my skills further by joining
  //         Masai School. I am deeply passionate about staying abreast of the
  //         latest advancements in software development. With extensive coding
  //         experience and a focus on problem-solving, I bring a wealth of
  //         knowledge to every project.
  //       </Text>
  //     </Flex>
  //   </Flex>
  // </Box>

    //     <Box
    //       id="about"
    //       p="30px 0px"
    //       pt="10px"
    //       mt={["4%", "4%", "4%"]}
    //       w={["100%", "100%", "100%"]}
    //       h={["650px", "670px", "621px"]}
    //       border={"1px solid red"}
    //       justifyContent="space-between"
    //       alignItems="center"
    //       flexDirection={["column", "column", "row"]}
    //     >
    //            <Box display={"flex"} gap={"15px"} float={"right"} marginRight={["","","280px"]}>
    //             <Text
    //               textAlign="center"
    //               fontWeight="400"
    //               mt="20px"
    //               fontSize={["3xl", "4xl", "5xl"]}
    //               color={"#00b9e8"}
    //             >
    //               About Me
    //             </Text>
    //             <Text fontSize={["3xl", "4xl", "5xl"]} marginTop={"28px"}>
    //               <FaUser className="bounce" color="#00b9e8" />
    //             </Text>
    //           </Box>
    //       <Box
    //         // w="87%"
    //         w={["100%", "40%", "90%"]}
    //         m="auto"
    //         mt={["40px", "40px", "40px"]}
    //         display={["block", "block", "flex"]}
    //         h={["650px", "670px", "399px"]}
    //         justifyContent="space-between"
    //         alignItems="center"
    //         flexDirection={["column", "column", "row"]}
    //         border={"1px solid blue"}
    //       >
    //         <Box border={"1px solid white"} w={["90%", "90%", "40%"]} m="auto" h={"auto"} >
    //         <Image
    //           w={["100%", "40%", "70%"]}

    //           ml={["0px", "0px", "70px"]}
    //           borderRadius={"16%"}
    //           src={profile_img}
    //           alt="img"
    //         />
    //         </Box>
    //         <Box w={["90%", "90%", "60%"]} m="auto"  h={["","","395px"]} marginLeft={["","","30px"]} >
    //           <Box display={"flex"} gap={"15px"} ml={["0px", "0px", "92px"]}>
    //             <Text
    //               textAlign="center"
    //               fontWeight="400"
    //               mt="20px"
    //               fontSize={["3xl", "4xl", "5xl"]}
    //               color={"#00b9e8"}
    //             >
    //               About Me
    //             </Text>
    //             <Text fontSize={["3xl", "4xl", "5xl"]} marginTop={"28px"}>
    //               <FaUser className="bounce" color="#00b9e8" />
    //             </Text>
    //           </Box>
    //           <Text
    //             fontFamily="Geneva"
    //             w={["90%", "90%", "95%"]}

    //             mt={["7px", "4px", "10px"]}
    //             ml={["0px", "0px", "2px"]}
    //             fontSize={["20px", "20px", "23px"]}
    //              textAlign={"justify"}
    //           >
    //             {/* <LightSpeed right big> */}
    //             <Text
    //               color={"white"}
    //               textAlign={"justify"}
    //               lineHeight={"48px"}

    //             >
    //               Motivated and innovating full-stack web developer with hands-on
    //               experience in building websites with MERN stack and various web
    //               technologies. I am passionate about staying up-to-date with the
    //               latest technologies and techniques in software development. I
    //               started learning Web Development in 2019, and for full-stack web
    //               development, I joined Masai School. Possessing experience of 1200+
    //               hours of coding and solved more than 950+ DSA questions.
    //             </Text>
    //             {/* </LightSpeed> */}
    //           </Text>
    //         </Box>
    //       </Box>
    //  </Box>
  );
}

export default About;
