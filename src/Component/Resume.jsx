import {Box , Text} from "@chakra-ui/react";
import React from 'react'

const Resume = () => {
  return (
    <Box className='resume' id="resume"  fontSize={["lg", "xl", "2xl"]}>
    <a href="https://drive.google.com/file/d/17M5DxELGX6P0bhxSK1wOAUXzHd-BDdFI/view?usp=sharing" target="_blank" rel="noreferrer">
    <Text color={"#1877f2"}>Resume</Text>
</a>
 
  </Box>

  )
}

export default Resume;