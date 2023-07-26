import Header from '../Header/Header';

import codeSamples from '../../utilities/codeSamples';

const Projects = () => {
  return (
    <div className="projects">
      <Header 
        title="Projects" 
        codeString={codeSamples[1]}
      />
    </div>
  );
}

export default Projects;