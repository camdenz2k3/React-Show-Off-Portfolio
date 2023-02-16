import React from 'react';
import PageContent from './PageContent';
import AboutMe from '../pages/aboutme';
import Portfolio from '../pages/portfolio';
import Contact from '../pages/contact';
import Resume from '../pages/resume';
import { capitalizeFirstLetter } from '../utils/helpers';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <AboutMe />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
