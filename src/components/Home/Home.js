import { useRef } from 'react';

import Header from '../Header/Header';
import MyExperience from '../MyExperience/MyExperience';
import HighlightProjects from '../HighlightProjects/HighlightProjects';
import Footer from '../Footer/Footer';

import codeSamples from '../../utilities/codeSamples';


const Home = () => {
  const scrollRef = useRef(null);

  // HANDLE SCROLL DOWN.
  const handleScrollDown = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };
  
  return (
    <div className='home'>
      <Header 
        title="Mateusz Kiszczak" 
        codeString={codeSamples[0]}
        handleScrollDown={handleScrollDown}
      />
      <div className="main-content__wrapper">
        <main ref={scrollRef} id="home__main-content">
          <MyExperience />
          <div className='bg-wrapper--light'>
            <HighlightProjects />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}


export default Home;
