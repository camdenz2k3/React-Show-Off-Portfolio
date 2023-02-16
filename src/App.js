import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";

import AboutMe from './pages/aboutme'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Resume from './pages/resume'

function App() {
  const [pages] = useState([
    {
      name: "AboutMe"
    },
    { name: "Portfolio" },
    { name: "Contact" },
    {
      name: "Resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
