
import './App.css';

import Simple from './Component/Navbar';
import React from 'react';
import Project from "./Component/Project";
import About from "./Component/About";
import Home from './Component/Home';
import Contact from "./Component/Contact";
import Skills from "./Component/Skills"
import GithubGraph from './Component/GithubGraph';
import { useState,useEffect } from 'react';
import Loader from './Component/Loader';
import {AiFillHeart } from 'react-icons/ai'
import { Text , Icon } from '@chakra-ui/react';


// import Fade from "react-reveal/Fade";



function App() {
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    setIsLoading(true);
    let timer = setTimeout(() => {
        setIsLoading(false);
        return () => clearInterval(timer);
    }, 1000);
}, []);
return isLoading ? (
    <Loader />
) : (
  <div className="App" style={{backgroundColor:"black",width:"100%"}}>
{/* width={{ base: '100%', sm: '50%', md: '25%'}}  */}
<Simple/>
 <Home/>
 <About/>
<Skills/>
<Project/>
<GithubGraph/>
<Contact/>

<Text color={"white"} fontSize={["8px","10px","16px"]} fontFamily={ 'Lora'} textAlign={"center"}>Designed and Developed By Shalini Singh</Text>
<Icon color={"red"} fontSize={["","","20px"]}><AiFillHeart /></Icon>

</div>
)


}

export default App;



