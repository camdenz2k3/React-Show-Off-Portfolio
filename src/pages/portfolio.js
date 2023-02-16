import React, { useState } from 'react';
import Project from "../components/project";
import TechBlog from '../images/TechBlog.png'
import RLServices from "../images/homepage.png"
// import TeamProfileGen from "../images/profile.png"
import Book from "../images/random-book.png"
import Weatherapp from "../images/weatherapp.png"
import Workday from "../images/workdayplanner.png"
function Portfolio() {


  const [projects] = useState([
    {
      name: 'Tech Blog',
      description: 'Simple Blog site that uses Handlebars/JavaScript',
      img: TechBlog,
      link: "https://techblogap.herokuapp.com/",
      repo: "https://github.com/camdenz2k3/CMS-Styled-Tech-Blog"
    },
    {
      name: 'Toss Me A Book',
      description: 'This application helps the user find a book to read in many different ways.',
      img: Book,
      link: "https://camdenz2k3.github.io/Toss-Me-A-Book-/",
      repo: "https://github.com/camdenz2k3/Toss-Me-A-Book"
    },
    {
      name: 'Weather Forecast',
      description: '5 day weather forecast for any city searched',
      img: Weatherapp,
      link: "https://camdenz2k3.github.io/Weather-Forecast/",
      repo: "https://github.com/camdenz2k3/Weather-Forecast"
    },
    {
      name: 'R and L Services',
      description: 'Product and service order site that uses Handlebars/CSS/JavaScript',
      img: RLServices,
      link: "https://rlservices.herokuapp.com/",
      repo: "https://github.com/camdenz2k3/RL-Services"
    },
    {
      name: 'Work Day Scheduler',
      description: 'This is a simple calendar application that allows a user to save events to local host for each hour of the day for normal bussiness hours.',
      img: Workday,
      link: "https://camdenz2k3.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/camdenz2k3/Work-Day-Scheduler"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

  export default Portfolio
