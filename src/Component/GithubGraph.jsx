import React from 'react';
import {Image ,GridItem, Box,Heading,Text,Grid} from "@chakra-ui/react";
import GitHubCalendar from 'react-github-calendar';
import {FaGithub} from "react-icons/fa";

// {
  

const GithubGraph = () => {
  return (

<Box mt={["80px","50px","100px"]}>
<Heading mr={["10%","0%","5%"]}  fontSize={["2xl", "3xl", "4xl"]} fontWeight="400" color={"#1877f2"}><Text ml={["","","10px"]} color={"#1877f2"}>My Github Stats</Text>
<Text mt={"-48px"} marginLeft={["330px","500px","800px"]}  fontSize={["3xl", "4xl", "5xl"]} ><FaGithub color='#1877f2' className='bounce'/></Text>
</Heading>

<Box>
  <Box display={["inline","inline","flex"]} width={"79%"}  margin={"auto"}>

 <Image ml={["28px","20px","0px"]}  width={["85%","95%","50%"]} mt={["-30px","30px","30px"]} height={"300px"} src='https://github-readme-stats.vercel.app/api?username=Shalini1908&show_icons=true&locale=en&theme=gotham'/>



 <Image ml={["28px","20px","5px"]}  width={["85%","95%","50%"]} mt={["-100px","30px","30px"]} height={"300px"}src='https://github-readme-streak-stats.herokuapp.com/?user=Shalini1908&theme=gotham' />

 </Box>
   <Grid mt={"50px"} mb={"50px"}>
   
    <GridItem>
    <Image  ml={["28px","20px","160px"]} mt={["-90px","-30px","-20px"]}  width={["85%","95%","78%"]} border={"1px solid white"} borderRadius={"10px"} src='https://github-readme-activity-graph.cyclic.app/graph?username=Shalini1908&theme=gotham'/> 
    </GridItem>
   
    
   </Grid>

    
     <Box border={"2px solid white"}
     borderRadius={"10px"}
      backgroundColor={"#282a36"}
       padding={[6,8,10]} 
       color={"#1877f2"} 
       margin={"auto"}
       textAlign={"left"}
       mt={["-30px","-10px","30px"]}
       fontSize={["12px","20px","20px"]}
       ml={["28px","20px","160px"]}
        width={["85%","95%","78%"]}>

   <GitHubCalendar  
    username="Shalini1908"
    blockSize={20}
    blockMargin={6} 
    
    color={"#1877f2"}
   />
   </Box>
   </Box>
   </Box>
   
  )
}

export default GithubGraph