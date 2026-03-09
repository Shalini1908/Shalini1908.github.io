import { Image, Box, Heading, Text , Stack , Link } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

const GithubGraph = () => {
  return (
    <Box mt={["80px", "50px", "100px"]}>
      <Heading
        mr={["10%", "0%", "5%"]}
        fontSize={["2xl", "3xl", "4xl"]}
        fontWeight="400"
        color={"#00b9e8"}
      >
        <Text ml={["", "", "10px"]} color={"#00b9e8"}>
          My Github Stats
        </Text>
        <Text
          mt={["-34px", "-42px", "-49px"]}
          marginLeft={["325px", "370px", "550px", "785px"]}
          fontSize={["3xl", "4xl", "5xl"]}
        >
        </Text>
      </Heading>

      <Box>
        <Box
          display={["inline", "inline", "flex"]}
          width={"79%"}
          margin={"auto"}
        >
          <Image
            ml={["28px", "20px", "0px"]}
            width={["85%", "95%", "50%"]}
            mt={["-30px", "30px", "30px"]}
            height={"300px"}
            src="https://github-readme-stats-sigma-five.vercel.app/api?username=Shalini1908&show_icons=true&theme=algolia"
          />

          <Image
            ml={["28px", "20px", "5px"]}
            width={["85%", "95%", "50%"]}
            mt={["-130px", "8px", "30px"]}
            height={"300px"}
            src="https://streak-stats.demolab.com/?user=Shalini1908&theme=algolia"
          />
        </Box>
        <Box
          border={"2px solid white"}
          borderRadius={"10px"}
          backgroundColor={"#282a36"}
          padding={[6, 8, 10]}
          color={"#1877f2"}
          margin={"auto"}
          textAlign={"left"}
          mt={["-30px", "-10px", "30px"]}
          fontSize={["12px", "20px", "20px"]}
          ml={["28px", "20px", "160px"]}
          width={["85%", "95%", "78%"]}
        >
          <GitHubCalendar
            username="Shalini1908"
            blockSize={20}
            blockMargin={6}
            color={"#1877f2"}
          />
        </Box>
      {/* GitHub Profile Link */}
      <Stack align="center" mt={8}>
        <Link
          href="https://github.com/Shalini1908"
          isExternal
          fontSize="lg"
          color="#00b9e8"
          fontWeight="500"
        >
          View My GitHub Profile
        </Link>
      </Stack>
      </Box>
    </Box>
  );
};

export default GithubGraph;
