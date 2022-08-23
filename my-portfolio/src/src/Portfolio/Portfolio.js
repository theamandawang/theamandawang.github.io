import {useEffect, useRef} from 'react';
import Typed from 'react-typed';
import GitHubImage from '../../img/GitHub-Mark-Light-64px.png';
import Sidebar from '../Sidebar/Sidebar';
import './Portfolio.css';
const Portfolio = () => {
    const sidebarRef = useRef();
    const topRef = useRef();
    useEffect(() => {
      if(sidebarRef.current && topRef.current) {
        let shift = -1 * sidebarRef.current.clientHeight;
        topRef.current.style.marginTop = `${shift}px`;
      }
      const script = document.createElement('script');

      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      return () => {
       document.body.removeChild(script);
      };
    }, [sidebarRef, topRef]);

    return (
        <div className='page'>
          <Sidebar ref={sidebarRef}/>
          <div className='img-container' ref={topRef}>
            <p className='header-text'>
              Hey, I'm Amanda Wang
            </p>
            <p className='header-text'>
            <Typed
                strings={[
                    'I am a student','I am a developer', 'I am an explorer']}
                    typeSpeed={100}
                    backSpeed={100}
                    backDelay={1400}
                    showCursor={true}
                    loop >
              </Typed>
            </p>
          </div>
          <div className='portfolio-container'>
            <div>
              <p className='portfolio-heading'>
                Education 📕📗📘
              </p>
              <hr className='portfolio-line'/>
              <div>
                <p className='portfolio-subtext'>UCLA / B.S. Computer Engineering</p>
              </div>
            </div>
            <br/>
            <div>
              <p className='portfolio-heading'>
                Experience 👩🏻‍💻👩🏻‍✈️👩🏻‍🔬
              </p>
              <hr className='portfolio-line'/>
              <div>
                <p className='portfolio-subtext'>Meta / Intern</p>
              </div>
              
            </div>
          </div>
          <div className='footer'>
            <section style={{display: 'flex', flexDirection: 'row', justifyContent:'space-evenly'}}>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                  <a href='https://www.github.com/theamandawang' style={{color: '#FFFFFF'}}>
                    <img src={GitHubImage} alt='github'></img>
                  </a>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/amandawang22?trk=profile-badge" style={{color: '#FFFFFF'}}>LinkedIn</a>
                <div className="badge-base LI-profile-badge" data-locale="en_US" data-size='small' data-theme="light" data-type="HORIZONTAL" data-vanity="amandawang22" data-version="v1">
                </div>    
              </div>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                  <a href='https://drive.google.com/file/d/137oYN1hQJTMNFEo_Fe309y4K-9mRyzU8/view?usp=sharing' style={{color: '#FFFFFF'}}>Resume</a>
              </div>
            </section>
          </div>
        </div>
      );
};
export default Portfolio;