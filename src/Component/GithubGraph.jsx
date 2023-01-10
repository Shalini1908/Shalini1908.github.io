import React from 'react';
import {Image , Box} from "@chakra-ui/react";
import GitHubCalendar from 'react-github-calendar';

// {
  
// "green_nur" : [
//   {
//   background: "#0a1e17",
//   border : "#e4e2e2",
//   stroke :"#e4e2e2",
//   ring :"#5affc8",
//   fire : "#5affc8",
//   currStreakNum : "#5affc8",
//   sideNums : "#5affc8",
//   currStreakLabel : "#5affc8",
//   sideLabels :"#5affc8",
//   dates : "#fff",
//   }
// ]
// }

const GithubGraph = () => {
  return (
    <Box style={{ marginLeft:"6%" , marginTop:"10%",width:"90%"}} >

<Image src="https://github-readme-activity-graph.cyclic.app/graph?username=Shalini1908&theme=gotham" alt="git" width={"89%"} ml={"5%"}/>

{/* <Box  fontSize={"40px"} marginTop={"10%"} marginLeft={"55px"} width={"90%"}  border={"1px solid #1877f2"} borderRadius={"10px"} padding={10}>
  <GitHubCalendar username="shalini1908" 
  blockSize={30}
  blockMargin={8}
  />
  </Box> */}

<Box border={"2px solid white"}
         borderRadius={"10px"}
          backgroundColor={"#0c1014"}
           padding={10} 
           color={"#1877f2"} 
           margin={"auto"}
           mt={"50px"}
            width={"90%"}>

       <GitHubCalendar  
        username="Shalini1908"
        blockSize={20}
        blockMargin={6}
        fontSize={20}
        color={"#1877f2"}
        
       />
       </Box>


    </Box>
   
  )
}

export default GithubGraph