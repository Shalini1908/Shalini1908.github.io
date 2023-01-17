import {
  Stack,
  Flex,
  Button,
  Text,
  Box,

  VStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import {AiFillGithub } from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
 import Typewriter from 'typewriter-effect';
 import Shalini_Singh_Resume from "../images/Shalini_Singh_Resume.pdf";
 import { DownloadIcon } from "@chakra-ui/icons";
export default function Banner() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'
      }
      backgroundSize={'cover'}
      backgroundColor={"black"}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
          <Text
            marginTop={["90px","100px","0px"]}
            color={'white'}
            fontWeight={500}
             lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '4xl', md: '5xl'})}>
          Hi, 
          I'm Shalini Singh
            
          </Text>
          {/* <Code
          bgColor={'black'}
          color={'white'}
          fontSize={'2rem'}
          >
           <a href="#"><img src="https://readme-typing-svg.herokuapp.com?color=FFF&center=true&lines=Full+Stack+Web+Developer" ></img></a>
          </Code> */}
          <Box color={"white"} 
           fontSize={["18px","24px","32px"]}
           textAlign={["left","left","left"]}
          fontWeight={"500"}> 
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
          <Stack direction={'row'}>
            <IconButton
            as='a'
            href='https://github.com/Shalini1908'
              // bg={'blue.400'}
              // rounded={'full'}
              color={'white'}
              fontSize={"40px"}
              target='_blank'
             icon={<AiFillGithub />}/>
            <IconButton
            as='a'
              // bg={'whiteAlpha.300'}
              // rounded={'full'}
              fontSize={"40px"}

              color={'blue.400'}
              href='https://www.linkedin.com/in/shalini-singh-705277257/'
              target='_blank'
             icon={<FaLinkedinIn/>}/>
             
          
          </Stack>
                <Box>
                <a href={Shalini_Singh_Resume} download>
                  <Button ml={["18px", "1%", "8px"]} mt="15px"  p={["15px 15px", "20px 20px", "25px 25px"]} fontSize={["md", "lg", "xl"]} bg="white" color="black" border="none" variant='solid' leftIcon={<DownloadIcon />} _hover={{
    background: "#1877f2",
    color: "black",
  }}>
                    Resume</Button>
                </a>
              </Box>
        </Stack>
      </VStack>
  </Flex>
);
}