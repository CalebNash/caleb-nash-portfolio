import './App.css';
import profile from './images/profilepic.jpg';
import renewalCenter from './images/RenewalCenter.png';
import pixelPerfect from './images/PixelPerfect.png';
import newsApp from './images/NewsApp.png';

function App() {
  return (
    <>
   <nav className="navbar navbar-dark bg-dark">
     <div className="navbar-left">
       <span style={{fontWeight:'bold'}}>Caleb Nash</span>
     </div>
     <div className="navbar-right">
       <a href="#about">ABOUT</a>
       <a href="#portfolio">PROJECTS</a>
       <a href="#contact">CONTACT</a>
     </div>
   </nav>
   <section id="about">
     <div className="row col-12 d-flex bio-container">
       <div className="col-md-6 col-12 bio-left">
         <div className="pp-container">
           <img className="profile-pic"src={profile} alt="Brian Cambron"/>
           <h2>Caleb Nash</h2>
           <h3>Full Stack Developer</h3>
         </div>
       </div>
       <div className="col-md-6 col-12 bio-right">
         <h2>About Me</h2>
         <p>I grew up in Monroe Louisiana and in 2020 I moved to Greenville South Carolina to attend Carolina Code School. I have always enjoyed fixing things and solving problems, whether that was working on cars or remodeling houses. So when I started to code, I fell in love with it immediately! After a year of teaching myself to code I decided to attend Carolina Code School, where I was taught not only to code, but also to become a lifelong student. Having aquired these skills, I have thrown myeslf into the software development world and am constantly striving to learn and improve myself.</p>
       </div>
     </div>
   </section>
   <section id="portfolio" className="portfolio row justify-content-around mt-5">
   <div className="col-12 row justify-content-center mb-5">
      <div className="header-div">
        <h1 className="my-projects-header">My Projects</h1>
      </div>
    </div>
    <div className="col-10 col-md-3 card">
      <img src={renewalCenter} alt="Table App" className="work-picture"/>
      <h3 className="mt-3 work-title">Renewal Center</h3>
      <p className="work-description">A website for the Renewal Center, a homeless shelter and resource center.</p>
      <div className="row justify-content-center mt-3 mb-3">
        <a href="https://https://renewal-center.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="more-button">Website</a>
        <a href="https://github.com/CalebNash/ccs-final-project" target="_blank" rel="noopener noreferrer" className="more-button">GitHub</a>
      </div>
    </div>
    <div className="col-10 col-md-3 card">
      <img src={pixelPerfect} alt="Pixel Perfect" className="work-picture"/>
      <h3 className="mt-3 work-title">Pixel Perfect</h3>
      <p className="work-description">A mockup recreation using HTML and CSS.</p>
      <div className="row justify-content-center mt-3 mb-3">
      <a href="https://calebnash.github.io/pixel-perfect/" target="_blank" rel="noopener noreferrer" className="more-button">Website</a>
      <a href="https://github.com/CalebNash/pixel-perfect" target="_blank" rel="noopener noreferrer" className="more-button">GitHub</a>
      </div>
    </div>
    <div className="col-10 col-md-3 card">
      <img src={newsApp} alt="News App" className="work-picture"/>
      <h3 className="mt-3 work-title">News App</h3>
      <p className="work-description">A full stack app for publishing news articles.</p>
      <div className="row justify-content-center align-items-end mt-3 mb-3">
      <a href="https://secure-stream-89199.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="more-button">Website</a>
      <a href="https://github.com/CalebNash/fullstack-news-app" target="_blank" rel="noopener noreferrer" className="more-button">GitHub</a>
      </div>
    </div>
   </section>
   <section id='contact'>
     <div className="contact-container">
       <h1 style={{fontSize:'30px', fontWeight: '150'}}>Contact Me</h1>
       <div className="card-holder">
         <div className='card contact-card'>
           <a href="mailto:cejaynash@gmail.com" alt='email Brian'><i style={{fontSize:'25px', color:'white'}}className="far fa-envelope"></i>
           <p>cejaynash@gmail.com</p>
           </a>
         </div>
         <div className='card contact-card'>
           <a target="_blank" rel="noreferrer" href="https://github.com/CalebNash" alt="Caleb's github"><i style={{fontSize:'25px', color:'white'}}className="fab fa-github"></i>
           <h5 className="mt-2">GITHUB</h5>
           </a>
         </div>
         <div className='card contact-card'>
           <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/caleb-nash-69b0451a3/" alt="Caleb's linkedin"><i style={{fontSize:'25px', color:'white'}}className="fab fa-linkedin-in"></i>
           <h5 className="mt-2">LINKEDIN</h5>
           </a>
         </div>
       </div>
     </div>
   </section>
   </>

  );
}

export default App;
