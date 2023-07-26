import Header from '../Header/Header';
import codeSamples from '../../utilities/codeSamples';

const AboutMe = () => {
  return (
    <div className='about'>
      <Header 
        title="About Me" 
        codeString={codeSamples[2]}
      />
    </div>
  );
}

export default AboutMe;