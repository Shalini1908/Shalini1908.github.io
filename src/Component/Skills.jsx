
import  React from 'react';
import {TbBrandJavascript , TbBrandNextjs} from "react-icons/tb";
import {FaHtml5 , FaCss3Alt, FaReact,FaBootstrap,FaNodeJs} from "react-icons/fa";
import {SiTypescript , SiMongodb , SiRedux,SiChakraui} from "react-icons/si"
import {Box, Text,Container, Icon,Image} from "@chakra-ui/react";
import photoshop from "../images/photoshop.png"
import Pulse from 'react-reveal/Pulse';


import RubberBand from 'react-reveal/RubberBand';
// import { BiBorderRadius } from 'react-icons/bi';
const Skills = () => {
  return (
  
    <Box className="skills" id="skills"  fontSize={30}  bg={"1f1f38"} mt={"20%"} w="85%" textAlign={"center"} p="30px 0px" m={"auto"}>
    <Box w="85%" m="auto">
    <Text mb="25px" textAlign="center" fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>Technical Skills</Text>

    <Box  display={"grid"} gap="5px" gridTemplateColumns={ "repeat(2,1fr) repeat(3,1fr)  repeat(4,fr)"} ml={"8%"}> 
    <Pulse>
    <Container display={"flex"} m={"auto"}>
    <Box w ={"22%"} h={["45px","70px","100px"]} border={"1px solid #1877f2"} m={2} bg={"blackAlpha.400"}> <RubberBand><Icon as={FaHtml5} color={"#f16529"} w={["50px" ,"40px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"}></Icon></RubberBand></Box>
    <Box w ={"22%"} h={["45px","70px","100px"]}  border={"1px solid #1877f2"} m={2} bg={"blackAlpha.400"}><RubberBand><Icon as={FaCss3Alt} color={"#0070ba"} w={["50px" ,"55px","90px"]} margin={["2px" ,"1px" ,"16px"]} height={"60px"}></Icon></RubberBand></Box>
    <Box w ={"22%"}  h={["45px","70px","100px"]} border={"1px solid #1877f2"} m={2} bg={"blackAlpha.400"} ><RubberBand><Icon as={TbBrandJavascript} color={"#63a814"} w={["50px" ,"55px","90px"]} margin={["2px" ,"1px" ,"16px"]} height={"60px"}></Icon></RubberBand></Box>
    <Box w ={"22%"} h={["45px","70px","100px"]}  border={"1px solid #1877f2"} m={2}  bg={"blackAlpha.400"} ><RubberBand><Icon as={FaReact} color={"#00d8ff"} w={["50px" ,"40px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"}></Icon></RubberBand></Box>
    </Container>
    </Pulse>
    </Box>


    <Box display={"grid"} gap="5px" gridTemplateColumns={ "repeat(2,1fr) repeat(3,1fr)  repeat(4,fr)"}ml={"8%"}>
    <Pulse>
    <Container display={"flex"}>
    <Box w ={"22%"} h={["45px","70px","100px"]} border={"1px solid #1877f2"} m={2}  bg={"blackAlpha.400"}><RubberBand><Icon as={TbBrandNextjs} color={"white"} w={["50px" ,"40px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"}></Icon></RubberBand></Box>
    <Box w ={"22%"} h={["45px","70px","100px"]}  border={"1px solid #1877f2"} m={2}  bg={"blackAlpha.400"}><RubberBand><Icon as={SiTypescript} color={"#3178c6"} w={["50px" ,"40px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"}></Icon></RubberBand></Box>
    <Box w ={"22%"} h={["45px","70px","100px"]} border={"1px solid #1877f2"} m={2}  bg={"blackAlpha.400"} ><RubberBand><Icon as={SiRedux} color={"#7749bd"} w={["50px" ,"40px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"}></Icon></RubberBand></Box>
    <Box w ={"22%"} h={["45px","70px","100px"]} border={"1px solid #1877f2"} m={2} bg={"blackAlpha.400"} ><RubberBand><Icon as={SiMongodb} color={"#439934"}w={["50px" ,"40px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"}></Icon></RubberBand></Box>
    </Container>
    </Pulse>
    </Box>

    <Box display={"grid"} gap="5px" gridTemplateColumns={ "repeat(2,1fr) repeat(3,1fr)  repeat(4,fr)"}ml={"8%"}>
    <Pulse>
    <Container display={"flex"}>
    <Box  w ={"22%"} h={["45px","70px","100px"]} border={"1px solid #1877f2"} m={2}  bg={"blackAlpha.400"}><RubberBand><Icon as={FaBootstrap} color={"#5e3b7f"} w={["50px" ,"40px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"}></Icon></RubberBand></Box>
    <Box  w ={"22%"} h={["45px","70px","100px"]}   border={"1px solid #1877f2"} m={2}  bg={"blackAlpha.400"}><RubberBand><Icon as={FaNodeJs} color={"#8bc74b"}  w={["50px" ,"40px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"} ></Icon></RubberBand></Box>
    <Box  w ={"22%"} h={["45px","70px","100px"]}  border={"1px solid #1877f2"} m={2}  bg={"blackAlpha.400"} ><RubberBand><Image src={photoshop} color={"#001025"}  w={["100%" ,"100%", "80%","72%"]} margin={"auto"}  mt={"10px"} height={["40px","48px","72px"]} /></RubberBand></Box>
    <Box  w ={"22%"}  h={["45px","70px","100px"]}  border={"1px solid #1877f2"} m={2} bg={"blackAlpha.400"} ><RubberBand><Icon as={SiChakraui} color={"#6ecbd0"} w={["50px" ,"40px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"} ></Icon></RubberBand></Box>
    </Container>
    </Pulse> 
    </Box>
    </Box> 
    </Box>
   
   
  )
}

export default Skills