

import  React from 'react';
import {TbBrandJavascript , TbBrandNextjs} from "react-icons/tb";
import {FaHtml5 , FaCss3Alt, FaReact,FaBootstrap,FaNodeJs} from "react-icons/fa";
import {SiTypescript , SiMongodb , SiRedux,SiChakraui,SiAdobephotoshop} from "react-icons/si"
import {Box, Text,Container, Icon} from "@chakra-ui/react";
// import photoshop from "../images/photoshop.png"
import Pulse from 'react-reveal/Pulse';


import RubberBand from 'react-reveal/RubberBand';
// import { BiBorderRadius } from 'react-icons/bi';
const Skills = () => {
  return (
  
    <Box className="skills" border={"0px solid red"} id="skills"  fontSize={30} height={["500px","500px","550px"]}  bg={"1f1f38"} mt={["100px","100px","20px"]} w={["50%","60%","85%"]}  p="30px 0px" m={"auto"}>
    <Box w="85%" m="auto">
    <Text  color={"#1877f2"} mb="25px" ml={"-20px"}  fontWeight="400" fontSize={["2xl", "4xl", "4xl"]}>Technical Skills</Text>

    <Box  display={"grid"} gap="5px" gridTemplateColumns={ "repeat(2,1fr) repeat(3,1fr)  repeat(4,fr)"} ml={["-122%","-7%","8%"]}> 
    <Pulse>
    <Container  marginTop={["5px","5px","5px"]}  ml={["180px","-45px","-40px"]} display={"flex"}  border={"0px solid white"} w={["65%","85%","100%"]}>
    <Box w ={"30%"} h={["45px","80px","100px"]}  border={["0px solid #1877f2","0px solid #1877f2","1px solid #1877f2"]} m={2} bg={"blackAlpha.400"}>
    <RubberBand><Icon as={FaHtml5} color={"blue"} w={["50px" ,"90px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"}>
    </Icon></RubberBand><Text marginTop={["3px","-18px","-29px"]} color={"white"} fontSize={["xs","sm","md"]}>HTML</Text></Box>
    <Box w ={"30%"} h={["45px","80px","100px"]}  border={["0px solid #1877f2","0px solid #1877f2","1px solid #1877f2"]} m={2} bg={"blackAlpha.400"}><RubberBand><Icon as={FaCss3Alt} color={"#0070ba"} w={["50px" ,"90px","90px"]} margin={["2px" ,"6px" ,"16px"]} height={"60px"}></Icon></RubberBand><Text marginTop={["3px","-18px","-29px"]} color={"white"}  fontSize={["xs","sm","md"]}>CSS</Text></Box>
    <Box w ={"30%"}  h={["45px","80px","100px"]}  border={["0px solid #1877f2","0px solid #1877f2","1px solid #1877f2"]} m={2} bg={"blackAlpha.400"} ><RubberBand><Icon as={TbBrandJavascript} color={"#63a814"} w={["50px" ,"90px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"}></Icon></RubberBand><Text marginTop={["3px","-18px","-29px"]} color={"white"}  fontSize={["xs","sm","md"]}>Javascript</Text></Box>
    <Box w ={"30%"} h={["45px","80px","100px"]}   border={["0px solid #1877f2","0px solid #1877f2","1px solid #1877f2"]} m={2}  bg={"blackAlpha.400"} ><RubberBand><Icon as={FaReact} color={"#00d8ff"} w={["50px" ,"90px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"}></Icon></RubberBand><Text marginTop={["3px","-18px","-29px"]}  color={"white"}  fontSize={["xs","sm","md"]}>React</Text></Box>
    </Container>
    </Pulse>
    
    </Box>


    <Box display={"grid"} gap="5px"  marginTop={"10px"} gridTemplateColumns={ "repeat(2,1fr) repeat(3,1fr)  repeat(4,fr)"} ml={["-122%","-7%","8%"]}>
    <Pulse>
    <Container  marginTop={["35px","10px","5px"]} ml={["180px","-45px","-40px"]} display={"flex"} border={"0px solid white"} w={["65%","85%","100%"]}>
    <Box w ={"30%"} h={["45px","80px","100px"]}  border={["0px solid #1877f2","0px solid #1877f2","1px solid #1877f2"]} m={2}  bg={"blackAlpha.400"}><RubberBand><Icon as={TbBrandNextjs} color={"white"} w={["50px" ,"90px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"}></Icon></RubberBand><Text marginTop={["3px","-18px","-29px"]}  color={"white"}  fontSize={["xs","sm","md"]}>NextJS</Text></Box>
    <Box w ={"30%"} h={["45px","80px","100px"]}   border={["0px solid #1877f2","0px solid #1877f2","1px solid #1877f2"]} m={2}  bg={"blackAlpha.400"}><RubberBand><Icon as={SiTypescript} color={"#3178c6"} w={["50px" ,"90px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"}></Icon></RubberBand><Text marginTop={["3px","-16px","-29px"]}  color={"white"}  fontSize={["xs","sm","md"]}>Typescript</Text></Box>
    <Box w ={"30%"} h={["45px","80px","100px"]}  border={["0px solid #1877f2","0px solid #1877f2","1px solid #1877f2"]} m={2}  bg={"blackAlpha.400"} ><RubberBand><Icon as={SiRedux} color={"#7749bd"} w={["50px" ,"90px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"}></Icon></RubberBand><Text marginTop={["3px","-18px","-29px"]}  color={"white"}  fontSize={["xs","sm","md"]}>Redux</Text></Box>
    <Box w ={"30%"} h={["45px","80px","100px"]}  border={["0px solid #1877f2","0px solid #1877f2","1px solid #1877f2"]} m={2} bg={"blackAlpha.400"} ><RubberBand><Icon as={SiMongodb} color={"#439934"}w={["50px" ,"90px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"}></Icon></RubberBand><Text marginTop={["3px","-18px","-29px"]}  color={"white"}  fontSize={["xs","sm","md"]}>MongoDB</Text></Box>
    </Container>
    </Pulse>
    </Box>

    <Box display={"grid"} gap="5px" marginTop={"10px"} gridTemplateColumns={ "repeat(2,1fr) repeat(3,1fr)  repeat(4,fr)"}  ml={["-122%","-7%","8%"]}>
    <Pulse>
    <Container   marginTop={["35px","10px","5px"]}ml={["180px","-40px","-40px"]} display={"flex"} border={"0px solid white"} w={["65%","85%","100%"]}>
  <Box  w ={"30%"} h={["45px","80px","100px"]}   border={["0px solid #1877f2","0px solid #1877f2","1px solid #1877f2"]} m={2}   bg={"blackAlpha.400"}><RubberBand><Icon as={FaBootstrap}  color={"#5e3b7f"} w={["50px" ,"90px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"}></Icon></RubberBand><Text marginTop={["3px","-18px","-29px"]} color={"white"} fontSize={["xs","sm","md"]}>Bootstrap</Text></Box>
    <Box  w ={"30%"} h={["45px","80px","100px"]}    border={["0px solid #1877f2","0px solid #1877f2","1px solid #1877f2"]} m={2}  bg={"blackAlpha.400"}><RubberBand><Icon as={FaNodeJs} color={"#8bc74b"}  w={["50px" ,"90px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"} ></Icon></RubberBand><Text marginTop={["3px","-18px","-29px"]}  color={"white"}  fontSize={["xs","sm","md"]}>NodeJS</Text></Box>
    <Box  w ={"30%"} h={["45px","80px","100px"]}    border={["0px solid #1877f2","0px solid #1877f2","1px solid #1877f2"]} m={2}  bg={"blackAlpha.400"}><RubberBand><Icon as={SiAdobephotoshop} color={"#001d34"}  w={["50px" ,"90px","90px"]} margin={["2px" ,"5px" ,"16px"]} height={"60px"} ></Icon></RubberBand><Text marginTop={["3px","-18px","-29px"]}  color={"white"}  fontSize={["xs","sm","md"]}>Photoshop</Text></Box>
    <Box  w ={"30%"}  h={["45px","80px","100px"]}   border={["0px solid #1877f2","0px solid #1877f2","1px solid #1877f2"]} m={2} bg={"blackAlpha.400"} ><RubberBand><Icon as={SiChakraui} color={"#6ecbd0"} ml={"20px"} w={["50px" ,"90px","90px"]} margin={["2px" ,"5px" ,"14px"]} height={"60px"} ></Icon></RubberBand><Text marginTop={["3px","-18px","-29px"]}  color={"white"}  fontSize={["xs","sm","md"]}>ChakraUI</Text></Box>
    </Container>
    </Pulse>
    </Box>
    </Box> 
    </Box>
   
   
  )
}

export default Skills;