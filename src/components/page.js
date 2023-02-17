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
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <section>
      <div className='text-coloring'>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      </div>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
