import React, { useState } from 'react';
import Project from "../components/project";
import TechBlog from '../images/TechBlog.png'
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
      name: 'pastel-puzzels',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'led-wall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
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
