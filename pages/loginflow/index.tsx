import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DynamicContent from '../DynamicContent';
import "../../app/globals.css"
const choices = [
  {
    title: "Full Stack Web Development",
    pageContent: {
      title: "Full Stack Web Development",
      mainLine: "Explore the world of full stack web development.",
      points: ["Frontend technologies", "Backend technologies", "DB"]
    }
  },
  {
    title: "Front End Development",
    pageContent: {
      title: "Front End Development",
      mainLine: "Dive into the frontend technologies and frameworks.",
      points: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue"]
    }
  },

];

const App = () => {
  return (

    <div>
      <Route path="/dynamic-content" Component={DynamicContent} />
    </div>

  );
};

export default App;
