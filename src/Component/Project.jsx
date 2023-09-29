import { Box, Image, Text, Button } from "@chakra-ui/react";
import { MdSlideshow } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

import React, { useState } from "react";

function Project() {
  const [viewmore, setViewmore] = useState(false);

  let initialdata = [
    {
      name: "Trendsy",
      img: "https://user-images.githubusercontent.com/107534386/221490495-b11efa2e-2992-497d-bf90-be48e22022c2.png",
      type: "Group",
      desc: "A clone of Myntra,Online Shopping Site for Fashion & Lifestyle.Fashion Expert brings you a variety lifestyle products.",
      techstack:
        "HTML, CSS , JavaScript , React JS , Redux , Chakra UI, MongoDB , NodeJS , Express JS , Mongo Atlas",
      livelink: "https://trendsy.vercel.app/",
      gitlink: "https://github.com/Shalini1908/Trendsy-Myntra-Clone",
    },

    {
      name: "WishKart",
      img: "https://user-images.githubusercontent.com/107534386/215671577-26a75411-b5b7-452b-a17e-273f1eed89d8.png",
      type: "Group",
      desc: "A clone of Meesho , Users can buy lifestyle products like clothes , electronics , bag , home kitchen etc.",
      techstack:
        "HTML , CSS , JavaScript , React JS , Redux , Chakra UI, MongoDB , NodeJS , Express JS , Mongo Atlas, Auth0 , React-reveal",
      livelink: "https://wish-kart.vercel.app/",
      gitlink: "https://github.com/Rajendra3049/Wishkart",
    },
    {
      name: "MixMate",
      img: "https://user-images.githubusercontent.com/107534386/233964929-968a41d8-3d98-4f7d-a4a5-7b95ca566ccf.png",
      type: "Individual",
      desc: "Music App , where users can listen to the playlist , with previous , pause and next features.",
      techstack: "HTML, CSS, JavaScript",
      livelink: "https://tangerine-rugelach-03a25a.netlify.app/",
      gitlink: "https://github.com/Shalini1908/MixMate/tree/master",
    },

    {
      name: "Netflix",
      img: "https://user-images.githubusercontent.com/107534386/233796144-e226efee-457a-4eb0-a9d0-d0d1986593f0.png",
      type: "Individual",
      desc: "Movie App , It is a Netflix Clone , where user can find movies , sort the movies as per their ratings and search their favourite movies.",
      techstack: "HTML, CSS, JavaScript , OMDB-Api",
      livelink: "https://courageous-macaron-4af75e.netlify.app/",
      gitlink: "https://github.com/Shalini1908/Netflix/tree/master",
    },
  ];

  let projectdata = [
    {
      name: "Trendsy",
      img: "https://user-images.githubusercontent.com/107534386/221490495-b11efa2e-2992-497d-bf90-be48e22022c2.png",
      type: "Group",
      desc: "A clone of Myntra,Online Shopping Site for Fashion & Lifestyle.Fashion Expert brings you a variety lifestyle products.",
      techstack:
        "HTML, CSS , JavaScript , React JS , Redux , Chakra UI, MongoDB , NodeJS , Express JS , Mongo Atlas",
      livelink: "https://trendsy.vercel.app/",
      gitlink: "https://github.com/Shalini1908/Trendsy-Myntra-Clone",
    },

    {
      name: "WishKart",
      img: "https://user-images.githubusercontent.com/107534386/215671577-26a75411-b5b7-452b-a17e-273f1eed89d8.png",
      type: "Group",
      desc: "A clone of Meesho , Users can buy lifestyle products like clothes , electronics , bag , home kitchen etc.",
      techstack:
        "HTML , CSS , JavaScript , React JS , Redux , Chakra UI, MongoDB , NodeJS , Express JS , Mongo Atlas, Auth0 , React-reveal",
      livelink: "https://wish-kart.vercel.app/",
      gitlink: "https://github.com/Rajendra3049/Wishkart",
    },

    {
      name: "MixMate",
      img: "https://user-images.githubusercontent.com/107534386/233964929-968a41d8-3d98-4f7d-a4a5-7b95ca566ccf.png",
      type: "Individual",
      desc: "Music App , where users can listen to the playlist , with previous , pause and next features.",
      techstack: "HTML, CSS, JavaScript",
      livelink: "https://tangerine-rugelach-03a25a.netlify.app/",
      gitlink: "https://github.com/Shalini1908/MixMate/tree/master",
    },

    {
      name: "Netflix",
      img: "https://user-images.githubusercontent.com/107534386/233796144-e226efee-457a-4eb0-a9d0-d0d1986593f0.png",
      type: "Individual",
      desc: "Movie App , It is a Netflix Clone , where user can find movies , sort the movies as per their ratings and search their favourite movies.",
      techstack: "HTML, CSS, JavaScript , OMDB-Api",
      livelink: "https://courageous-macaron-4af75e.netlify.app/",
      gitlink: "https://github.com/Shalini1908/Netflix/tree/master",
    },

    {
      name: "YouTube",
      img: "https://user-images.githubusercontent.com/107534386/214225604-805f9f4e-1c5d-43d6-a4d5-d8bd19df7aeb.png",
      type: "Individual",
      desc: "Youtube App created by html , css and javascript, where user can search videos , see recommended videos and default videos also",
      techstack: "HTML, CSS, JavaScript",
      livelink: "https://youtube-lyart.vercel.app/",
      gitlink: "https://github.com/Shalini1908/Youtube",
    },

    {
      name: "Crystalvillas",
      img: "https://user-images.githubusercontent.com/107534386/210261964-a5cb2fa2-1162-4ceb-bcb6-6229e8eb2448.png",
      type: "Group",
      desc: "Cloned website of Tripvillas , a holiday homes - villas, apartments & homestays booking website ",
      techstack: "HTML, CSS, JavaScript",
      livelink: "https://venerable-beignet-fdbc14.netlify.app/",
      gitlink: "https://github.com/Shalini1908/-faithful-gun-126",
    },

    {
      name: "Bellavita",
      img: "https://user-images.githubusercontent.com/107534386/211152613-d4f2e55d-d491-47a7-bc91-21c791c819ec.png",
      type: "Group",
      desc: "This is a cloned website of Bellavita Organic , a digital first luxury yet affordable natural skincare brand in india",
      techstack: "HTML ,CSS,JavaScript",
      livelink: "https://sparkling-sable-5e1c8b.netlify.app/",
      gitlink: "https://github.com/Rafayal383/dreary-hand-8237",
    },
    {
      name: "Bigbite",
      img: "https://user-images.githubusercontent.com/107534386/208698525-65d89ea4-3752-4277-957d-75a9efc64648.png",
      type: "Individual",
      desc: "A cloned website of Kindmeal , which is meatfree lifestyle platform",
      techstack: "HTML, CSS, JavaScript,React JS,Chakra UI",
      livelink: "https://glittering-lamington-a7bf4c.netlify.app/",
      gitlink: "https://github.com/Shalini1908/daring-idea-7674",
    },
  ];

  return (
    <>
      <Box
        id="projects"
        className="project"
        w="full"
        color="#ffffff"
        p="30px 0px"
        textAlign="center"
        marginTop={["0", "0", "0", "150px"]}
      >
        <Box w="85%" m="auto">
          <Box
            gap={"10px"}
            display={"flex"}
            mb="25px"
            textAlign="center"
            fontWeight="400"
          >
            <Text
              ml={["110px", "235px", "240px","460px"]}
              color={"#00b9e8"}
              fontSize={["3xl", "4xl", "5xl"]}
            >
              Projects
            </Text>
            <Text mt={["8px", "10px", "15px"]} fontSize={["3xl", "4xl", "5xl"]}>
              <MdSlideshow className="bounce" color={"#00b9e8"} />
            </Text>
          </Box>
          {viewmore ? (
            <Box display="grid" gap="50px" gridTemplateColumns="repeat(1, 1fr)">
              {projectdata &&
                projectdata.map((project) => {
                  return (
                    <Box className="proj" bg={"#0c1014"}>
                      <Box
                        display={["inline", "inline", "flex"]}
                        justifyContent="space-between"
                        border={"3px solid #1877f2"}
                      >
                        <Image
                          w={["100%", "97%", "60%"]}
                          m="auto"
                          src={project.img}
                          alt="project-thumbnail"
                        />
                        <Box w={["100%", "97%", "39%"]} m="auto">
                          <Text fontSize={["2xl", "3xl", "4xl"]}>
                            {project.name}
                          </Text>
                          <Text fontSize={["xl", "2xl", "3xl"]}>
                            ( {project.type} )
                          </Text>
                          <Text
                            textAlign={"center"}
                            w={["100%", "90%", "70%"]}
                            m="auto"
                            fontSize={["sm", "md", "md"]}
                          >
                            {project.desc}
                          </Text>
                          <Text
                            w="85%"
                            m="auto"
                            mt="10px"
                            fontSize={["md", "mlgd", "lg"]}
                          >
                            Techstacks :-{project.techstack}
                          </Text>
                          <Box
                            display="flex"
                            w={["100%", "80%", "100%"]}
                            m="auto"
                            justifyContent="space-around"
                          >
                            <Button
                              as="a"
                              target="_blank"
                              href={project.livelink}
                              _hover={{ color: "blue" }}
                              mt="10px"
                              w={"100px"}
                              p={["5px 5px", "10px 10px", "10px 10px"]}
                              fontSize={["md", "lg", "lg"]}
                              color="black"
                              border="1px solid white"
                              variant="solid"
                              leftIcon={<BiLinkExternal />}
                            >
                              Live
                            </Button>
                            <Button
                              as="a"
                              target="_blank"
                              href={project.gitlink}
                              _hover={{ color: "blue" }}
                              mt="10px"
                              w={"100px"}
                              p={["5px 5px", "10px 10px", "10px 10px"]}
                              fontSize={["md", "lg", "lg"]}
                              color="black"
                              border="1px solid white"
                              variant="solid"
                              leftIcon={<BsGithub />}
                            >
                              Github
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
            </Box>
          ) : (
            <Box display="grid" gap="50px" gridTemplateColumns="repeat(1, 1fr)">
              {initialdata &&
                initialdata.map((project) => {
                  return (
                    <Box className="proj" bg={"#0c1014"}>
                      <Box
                        display={["inline", "inline", "flex"]}
                        justifyContent="space-between"
                        border={"3px solid #1877f2"}
                      >
                        <Image
                          w={["100%", "97%", "60%"]}
                          m="auto"
                          src={project.img}
                          alt="project-thumbnail"
                        />
                        <Box w={["100%", "97%", "39%"]} m="auto">
                          <Text fontSize={["2xl", "3xl", "4xl"]}>
                            {project.name}
                          </Text>
                          <Text fontSize={["xl", "2xl", "3xl"]}>
                            ( {project.type} )
                          </Text>
                          <Text
                            textAlign={"center"}
                            w={["100%", "90%", "70%"]}
                            m="auto"
                            fontSize={["sm", "md", "md"]}
                          >
                            {project.desc}
                          </Text>
                          <Text
                            w="85%"
                            m="auto"
                            mt="10px"
                            fontSize={["md", "mlgd", "lg"]}
                          >
                            Techstacks :-{project.techstack}
                          </Text>
                          <Box
                            display="flex"
                            w={["100%", "80%", "100%"]}
                            m="auto"
                            justifyContent="space-around"
                          >
                            <Button
                              as="a"
                              target="_blank"
                              href={project.livelink}
                              _hover={{ color: "blue" }}
                              mt="10px"
                              w={"100px"}
                              p={["5px 5px", "10px 10px", "10px 10px"]}
                              fontSize={["md", "lg", "lg"]}
                              color="black"
                              border="1px solid white"
                              variant="solid"
                              leftIcon={<BiLinkExternal />}
                            >
                              Live
                            </Button>
                            <Button
                              as="a"
                              target="_blank"
                              href={project.gitlink}
                              _hover={{ color: "blue" }}
                              mt="10px"
                              w={"100px"}
                              p={["5px 5px", "10px 10px", "10px 10px"]}
                              fontSize={["md", "lg", "lg"]}
                              color="black"
                              border="1px solid white"
                              variant="solid"
                              leftIcon={<BsGithub />}
                            >
                              Github
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
            </Box>
          )}
        </Box>
        <Button
          onClick={() => {
            setViewmore(!viewmore);
          }}
          marginTop={"18px"}
          color={"black"}
          fontSize={"18px"}
          bgColor={"#00b9e8"}
        >
          {viewmore ? "view less" : "view more"}
        </Button>
      </Box>
    </>
  );
}
export default Project;
