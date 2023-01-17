import {Box , Image ,  Text ,  Button} from "@chakra-ui/react";
import {MdSlideshow} from "react-icons/md"
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

import React from 'react';

function Project(){

  let projectdata= [
      {
          name: "Survey Monkey",
          img: "https://user-images.githubusercontent.com/107534386/211152786-b07c4005-8a8e-43eb-aacd-07e65fdaf267.png",
          type: "Individual",
          desc: "A clone of the Survey Monkey which is a survey website for Easily create surveys, quizzes, and polls for any audience",
          techstack: "HTML, CSS",
          livelink: "https://clinquant-choux-36c177.netlify.app/",
          gitlink: "https://github.com/Shalini1908/-modest-invention-5857"
      },
      {
          name: "Bellavita",
          img: "https://user-images.githubusercontent.com/107534386/211152613-d4f2e55d-d491-47a7-bc91-21c791c819ec.png",
          type: "Group",
          desc: "This is a cloned website of Bellavita Organic , a digital first luxury yet affordable natural skincare brand in india",
          techstack: "HTML ,CSS,JavaScript",
          livelink: "https://sparkling-sable-5e1c8b.netlify.app/",
          gitlink: "https://github.com/Rafayal383/dreary-hand-8237"
      },
      {
          name: "Crystalvillas",
          img: "https://user-images.githubusercontent.com/107534386/210261964-a5cb2fa2-1162-4ceb-bcb6-6229e8eb2448.png",
          type: "Group",
          desc: "Cloned website of Tripvillas , a holiday homes - villas, apartments & homestays booking website ",
          techstack: "HTML, CSS, JavaScript",
          livelink: "https://venerable-beignet-fdbc14.netlify.app/",
          gitlink: "https://github.com/Shalini1908/-faithful-gun-126"
      },

      {
        name:"Bigbite",
        img: "https://user-images.githubusercontent.com/107534386/208698525-65d89ea4-3752-4277-957d-75a9efc64648.png",
        type: "Individual",
        desc: "A cloned website of Kindmeal , which is meatfree lifestyle platform",
        techstack: "HTML, CSS, JavaScript,React,Chakra UI",
        livelink: "https://glittering-lamington-a7bf4c.netlify.app/",
        gitlink: "https://github.com/Shalini1908/daring-idea-7674"
    }
  ]

  return <Box id="projects" className='project' w="full"  color="#ffffff" p="30px 0px" textAlign="center">
  <Box w="85%" m="auto">
   
      <Box gap={"10px"} display={"flex"} mb="25px" textAlign="center" fontWeight="400" fontSize={["2xl", "3xl", "4xl"]}>
        <Text ml={["120px","200px","490px"]} color={"#1877f2"}>Projects</Text>
        <Text mt={["10px","10px","10px"]}><MdSlideshow className="bounce"  color={"#1877f2"}/></Text>
        </Box>
      <Box display="grid" gap="50px" gridTemplateColumns= "repeat(1, 1fr)">
          {projectdata && projectdata.map((project)=> {
              return <Box className="proj" bg={"#0c1014"} >
                          <Box display={["inline", "inline", "flex"]} justifyContent="space-between"  border={"2px solid #1877f2"} >
                              <Image w={["100%", "97%", "60%"]} m="auto" src={project.img} alt="project-thumbnail" />
                              <Box w={["100%", "97%", "39%"]} m="auto">
                                  <Text fontSize={["2xl", "3xl", "4xl"]}>{project.name}</Text>
                                  <Text fontSize={["xl", "2xl", "3xl"]}>( {project.type} )</Text>
                                  <Text  textAlign={"center"}  w={["100%", "90%", "70%"]} m="auto" fontSize={["sm", "md", "md"]}>{project.desc}</Text>
                                  <Text w="85%" m="auto" mt="10px" fontSize={["md", "mlgd", "xl"]}>Techstacks :-{project.techstack}</Text>
                                  <Box display="flex" w={["100%", "80%", "100%"]} m="auto" justifyContent="space-around">
                                     
                                      <Button as='a' target='_blank' href={project.livelink} _hover={{color:"blue"}} mt="10px" w={"100px"} p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]}  color="black"  border="1px solid white" variant='solid' leftIcon={<BiLinkExternal />}>Live</Button>
                                      <Button as='a' target='_blank' href={project.gitlink} _hover={{color:"blue"}} mt="10px" w={"100px"} p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]}  color="black" border="1px solid white" variant='solid' leftIcon={<BsGithub />}>Github</Button>
                                  </Box>
                              </Box>
                          </Box>
                      </Box>
          })}
      </Box>
  </Box>
</Box>


}
export default Project