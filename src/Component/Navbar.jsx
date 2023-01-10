import  React , {useState , useEffect}from 'react';

import {Box,Flex,HStack,IconButton,useDisclosure,Stack,Text} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
 import NavLink from "../Component/Navlink"
import { Link } from 'react-scroll';



const links = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Project", id: "project" },
  { name: "Contact", id: "contact" },
  { name: "Resume", id: "resume" }

];



export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isscroll, setisscroll] = useState(false);

  function isScrolling() {
    if (window.scrollY > 80) {
    setisscroll(true);
    } else {
    setisscroll(false);
    }
}

useEffect(() => {
  window.addEventListener("scroll", isScrolling);
  return () => {
  window.removeEventListener("scroll");
  }
}, [])


  return (
    <>


      <Box  zIndex={1} bg={isscroll? "#1877f2" : "black"} color={isscroll? "black" : "white"}  position={"fixed"} width={"100%"} marginTop={"-30px"}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
      <Link to="/">
        <Text fontSize={"30px"} color={isscroll? "black" : "white"} ><ChevronLeftIcon color={isscroll? "red" : "white"} />Shalini<span color={isscroll? "red" : "black"} >/</span>
        <ChevronRightIcon color={isscroll? "red" : "white"} /></Text>
      </Link>
          <IconButton
          ml={"60%"}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
         
            <HStack
              as={'nav'}
              spacing={12}
              ml={"42%"}
              display={{ base: 'none', md: 'flex' }}>
            
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.id}
                name={link.name}
                fontSize={25}
           
                onClick={() => onClose()}
              />
            
            ))}
           
            </HStack>
          </HStack>
          <Flex alignItems={'center'} gap={2}>
        

          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} 
        
          >
            <Stack as={'nav'} spacing={4}  >
            {links.map((link, i) => (
              <NavLink
              
                key={i}
                to={link.id}
                name={link.name}
                w="xm"
                onClick={() => onClose() }
              />
            ))}
            </Stack>
            
          </Box>
        ) : null}

        
      </Box>

     
</>
);
}
