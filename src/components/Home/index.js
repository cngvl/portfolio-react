import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameString = 'lobodan';
  const nameArray = nameString.split('');
  const jobString = 'Web Developer.';
  const jobArray = jobString.split('');

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover');
  //   }, 4000);
  // });

  useEffect(() => {
    // console.log('s');
    //   return setTimeout(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  // function delayedFunction() {
  //   console.log('Delayed function executed after 2 seconds');
  // }

  // setTimeout(delayedFunction, 2000);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Jnr. Software Engineer / Science Content Specialist</h2>
        <Link to="/contact" className="flat-button">
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Home;
// 3300
