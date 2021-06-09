import logo from './logo.svg';
import './App.scss';
import Nav from './Navbar.js'
import Portfolio from './portfolio.js'
import About from './about.js';
import {useState} from 'react';
import './themes.scss';
import Contact from './contactme.js';
import Social from './socials.js'

function App() {
  // const data = portfolioData;

  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    
  }


  return (
    <div className={`App ${theme}`}>
      <Nav toggler={themeToggler}/>
      <Social />
      <div className="content-page">
        <div className="title">
          <p>Hi my name is,</p>
          <h2>shivam.</h2>
          <p>I am a San Francisco based Full-Stack engineer who
            <br></br>
            specializes in building exceptional web applications.
          </p>
        </div>


        <div className="portfolio">
          <h2>Portfolio<span className="portfolio-period">.</span></h2>
          <Portfolio/>

        </div>
        <div className="about-me-app">
          <h2>About Me<span className="portfolio-period">.</span></h2>
          <About/>

        </div>

        <div className="footer">
          <span>Designed and Built by Shivam Patel</span>
        </div>


      </div>
      

    </div>
    
   

  );
}

export default App;
