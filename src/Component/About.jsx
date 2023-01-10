import React from 'react';
import {Box , Container, Flex, Heading , Image } from "@chakra-ui/react";
import Zoom from 'react-reveal/Zoom'; 
import profile from "../images/profile.png";
import LightSpeed from 'react-reveal/LightSpeed';

const About = () => {
  return (
<Box className="about" id="about" ml={"10%"}>
<Flex >
{/* maxW="1000px" w={['70vw' , '70vw' , '70vw' , '90vw']}direction ={['column' , 'column' ,'row' , 'row']} */}
<Box>
  <Zoom>
  <Image src={profile}  alt="profile" w={"80%"} style={{ marginLeft:"10%" , borderRadius:"50%"}}/>
  </Zoom>
  </Box>
  
<Container textAlign={"justify"} ml={"10px"}>

 <Heading ml={"150px"} color={"#4db5ff"} mt={"30px"} style={{fontFamily:"cursive"}}>About Me</Heading> 

<LightSpeed right big>
<p style={{width:"500px" , fontSize:"18px" , color:"white" , marginTop:"20px" , fontFamily: "cursive" , fontWeight:"300" , lineHeight:"35px"}}>
Motivated and innovative aspiring full-stack web developer with
hands-on experience in building websites with MERN stack and
various web technologies including HTML, CSS and JS. As an
individual like to challenge myself to push boundaries and discover
innovative solutions as well as upgrading my skillset. Have
experience of 1200 hours of coding.</p>
</LightSpeed>
</Container> 
</Flex>
    
    </Box>
  )
}

export default About