import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Project from './Project';
import PlaceHolderImage from '../../assets/images/placeholder-image.png';

const Portfolio = () => {
  const portfolioArray = 'Portfolio'.split('');
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container portfolio-page">
        <div className="portfolio-header">
          <h1>
            <AnimatedLetters
              strArray={portfolioArray}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
        </div>
        <div className="project-container columns">
          <Project
            ProjectTitle={'MelbParkFinder'}
            ProjectStack={
              'MapBox GL JS, Stimulus, Javascript, Ruby on Rails, Tailwind, Heroku, Flowbite'
            }
            ProjectDescription={
              'Designed an app to find available on-street parking in Melbourne CBD in real time. Using City of Melbourne’s database API, MapBox GL JS, Ruby on Rails and Google Maps to display the latest data.'
            }
            ProjectPreview={PlaceHolderImage}
          />
          <Project
            ProjectTitle={'PhraseTracker Discord Bot'}
            ProjectPreview={PlaceHolderImage}
            ProjectStack={'Javascript, Node.js, Discord.js'}
          />
          <Project
            ProjectTitle={'React Portfolio'}
            ProjectPreview={PlaceHolderImage}
            ProjectStack={'HTML, CSS, React'}
          />
          <Project
            ProjectTitle={'WeatherScheduler'}
            ProjectPreview={PlaceHolderImage}
            ProjectStack={('Python', 'Twilio')}
          />
          <Project
            ProjectTitle={'PDF Merger'}
            ProjectStack={'Python, Shell Scripting'}
            ProjectPreview={PlaceHolderImage}
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
