import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Project from './Project';
// import PlaceHolderImage from '../../assets/images/placeholder-image.png';
import MelbourneParkFinder from '../../assets/images/MelbParkFinder.png';
import WeatherScheduler from '../../assets/images/WeatherScheduler.jpg';
import PDFMerge from '../../assets/images/PDFmerge.png';
import PhraseTracker from '../../assets/images/PhraseTracker.png';
import ReactPortfolio from '../../assets/images/ReactPortfolio.png';
import DiscordPy from '../../assets/images/DiscordPy.png';

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
            ProjectPreview={MelbourneParkFinder}
            ProjectLink={'https://melbourne-park-finder.herokuapp.com/'}
            ProjectLive={'x'}
          />
          <Project
            ProjectTitle={'PhraseTracker Discord Bot'}
            ProjectPreview={PhraseTracker}
            ProjectStack={'Javascript, Node.js, Discord.js'}
            ProjectDescription={
              'This was a small project I wanted to make for my friends to use on our Discord channel. It works by calling the command with a phrase to look out for and a target user ( can also be randomised ). After the phrase has been mentioned a certain amount of times, the bot will generate a playful message.'
            }
            ProjectLink={'https://github.com/cngvl/discord-bot-phrase-tracker'}
          />
          <Project
            ProjectTitle={'Personal Portfolio'}
            ProjectPreview={ReactPortfolio}
            ProjectStack={'HTML, CSS, React'}
            ProjectDescription={
              "This is the Portfolio you're looking at right now. What else is there to say here."
            }
            ProjectLink={'https://github.com/cngvl/portfolio-react'}
          />
          <Project
            ProjectTitle={'Weather Scheduler'}
            ProjectPreview={WeatherScheduler}
            ProjectStack={'Python, Twilio'}
            ProjectDescription={
              'I drew inspiration for this project from a TikTik video by @tech_sis8. I thought that this was a good beginner-friendly project that I could eventually up-scale when I want to get into tools that require CRON scheduling and / or SMS messaging'
            }
            ProjectLink={'https://github.com/cngvl/weather-scheduler'}
          />
          <Project
            ProjectTitle={'PDF Merger'}
            ProjectStack={'Python, Shell Scripting'}
            ProjectPreview={PDFMerge}
            ProjectDescription={
              "A quick python script I made because I found myself often using online PDF editors which seemed super sketchy, especially when I was working with documents containing sensitive information. Works completely offline so I won't need to worry about my info being stolen. I plan to add additional features such as removing and reordering files soon!"
            }
            ProjectLink={'https://github.com/cngvl/pdf-merger'}
          />
          <Project
            ProjectTitle={'Petrol Scraper - Python Discord Bot '}
            ProjectStack={'Python, Geocoding API, Discord.py'}
            ProjectPreview={DiscordPy}
            ProjectDescription={
              "This is another discord bot I made that can scrape for petrol prices for a given postcode. I opted to build another discord bot as I just didn't want to deal with the hassle of setting up additionals service like Twilio which I used in the past. This discord bot streamlines processes as it's much more convenient for me to add features to this bot whenever I wish, without having to juggle multiple apps and services to provide me all the benefits."
            }
            ProjectLink={'https://github.com/cngvl/discord-pybot'}
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
