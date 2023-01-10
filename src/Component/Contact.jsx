import React from 'react';
import {Box , Stack , Input , Text} from "@chakra-ui/react";

const Contact = () => {
  return (
    // display={["inline", "inline", "inline"]}
    <Box className="contact" id="contact" w={["100%", "97%", "59%"]} fontSize={30} color={"black"}   m={"auto"}  mt={"20%"} border={"1px solid #1877f2"} h={"470px"}>
   <Text mb="25px" textAlign="center" fontWeight="400" fontSize={["3xl", "4xl", "5xl"]} color={"white"} mt={"10%"}>Contact</Text>
<Stack  m={"auto"} w={"85%"} >

  <Input placeholder='Name' size='md' w={"40%"} m={"auto"}color={"white"}/>
  </Stack>
  <Stack  m={"auto"} w={"85%"}  mt={"20px"}>
  <Input placeholder='Email' size='md' w={"40%"} m={"auto"}color={"white"} />
  </Stack>
  <Stack  m={"auto"} w={"85%"}  mt={"20px"} >
  <Input placeholder='Mobile Number' size='md' w={"40%"} m={"auto"}color={"white"}/>
  </Stack>


    </Box>
  )
}

export default Contact