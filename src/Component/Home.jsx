import React from 'react'
import { Image,Flex , Button ,Box, Text , Container} from "@chakra-ui/react";
// import LightSpeed from 'react-reveal/LightSpeed';
import {FaLinkedin} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";

import lap4 from "../images/lap4.png";
import Typewriter from 'typewriter-effect';

import "../Css/home.css";
const Home = () => {
  return (
    <div className='home' style={{margin:"auto"}} width={{ base: '100%', sm: '50%', md: '25%' }}>

{/* <Flex mt={"50px"} w={['70vw' , '70vw' , '70vw']}
direction ={['column' , 'column' ,'row' ]} justifyContent="space-between"> */}


  <Image src={lap4}  w={["100%","100%","100%"]}  style={{backgroundColor:"black" , marginTop:"30px"}} />
  <Container fontFamily="cursive"  color={"white"}  mt={"-25%"} ml={["20%" , "22%","60%"]}><Text fontSize={["xl" , "2xl" , "3xl"]}>Shalini Singh</Text></Container>
 
  <Box style={{color:"white" , fontFamily:"cursive" }} ml={["20%" , "22%","60%"]} fontSize={["xl" , "2xl" , "3xl"]}>

<Typewriter

  options={{
  strings: [
  "I'm a Full Stack Web Developer.",
  "I Love To Code.",
 
  ],
  autoStart: true,
  loop: true,
  deleteSpeed: 50,
  }}
  />

</Box>

<Box  w={["xl","2xl" ,"3xl"]} marginTop={"10px"}>
 <Flex  ml={["30%" , "52%","138%"]} >

<Box><a href="https://www.linkedin.com/in/shalini-singh-705277257/" alt=""><FaLinkedin color={"#4db5ff"} size={28}/></a></Box>

<Box><a href="https://github.com/Shalini1908"><AiFillGithub color='white'  size={28} /></a> </Box>

</Flex>
</Box>
<Button bg={"white"}  color={"#2c2c6c"} border={"1px solid #4db5ff"} fontSize={22} fontWeight={800} marginTop="40px" ml={["20%" , "22%","60%"]}>Resume</Button>
</div>
  )
}

export default Home


