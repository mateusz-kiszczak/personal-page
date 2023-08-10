import { useRef } from 'react';

import Header from '../Header/Header';
import MyNameIs from '../MyNameIs/MyNameIs';
import Technologies from '../Technologies/Techonologies';
import Footer from '../Footer/Footer';

import codeSamples from '../../utilities/codeSamples';


const AboutMe = () => {
  const scrollRef = useRef(null);

  // HANDLE SCROLL DOWN.
  const handleScrollDown = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };

  return (
    <div className='about'>
      <Header 
        title="About Me" 
        codeString={codeSamples[2]}
        handleScrollDown={handleScrollDown}
      />
      <div className="main-content__wrapper">
        <main ref={scrollRef} id="home__main-content">
          <MyNameIs />
          <div className='bg-wrapper--light'>
            <Technologies />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}


export default AboutMe;
