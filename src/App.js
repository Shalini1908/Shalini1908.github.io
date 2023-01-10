
import './App.css';

import Simple from './Component/Navbar';
import React from 'react';
import Project from "./Component/Project";
import About from "./Component/About";
import Home from './Component/Home';
import Contact from "./Component/Contact";
import Skills from "./Component/Skills"
import GithubGraph from './Component/GithubGraph';
import Stars from "./Component/particles";

// import Fade from "react-reveal/Fade";



function App() {

<Stars />;
  return (
<div className="App"  width={{ base: '100%', sm: '50%', md: '25%'}} style={{backgroundColor:"black"}}>

<Simple/>


<Home/>

<About/>


<Skills/>


<Project/>

<GithubGraph/>

<Contact/>

    </div>
  );
}

export default App;






