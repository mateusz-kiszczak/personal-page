import Header from '../Header/Header';
import MyExperience from '../MyExperience/MyExperience';
import HighlightProjects from '../HighlightProjects/HighlightProjects';
import Footer from '../Footer/Footer';

import codeSamples from '../../utilities/codeSamples';


const Home = () => {
  return (
    <div className='home'>
      <Header 
        title="Mateusz Kiszczak" 
        codeString={codeSamples[0]}
      />
      <div className="main-content__wrapper">
        <main id="home__main-content">
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
