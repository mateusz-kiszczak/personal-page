import { useRef } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import codeSamples from '../../utilities/codeSamples';
import ListOfProjects from '../ListOfProjects/ListOfProjects';


const Projects = () => {
  const scrollRef = useRef(null);

  // HANDLE SCROLL DOWN.
  const handleScrollDown = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };

  return (
    <div className="projects">
      <Header 
        title="Projects" 
        codeString={codeSamples[1]}
        handleScrollDown={handleScrollDown}
      />
      <div className="main-content__wrapper">
        <main ref={scrollRef} id="home__main-content">
          <div className='bg-wrapper--gradient'>
            <ListOfProjects />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}


export default Projects;
