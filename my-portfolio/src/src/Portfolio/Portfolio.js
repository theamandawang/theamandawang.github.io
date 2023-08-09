import {useEffect, useRef} from 'react';
import Typed from 'react-typed';
import GitHubImage from '../../img/GitHub-Mark-Light-64px.png';
import Sidebar from '../Sidebar/Sidebar';
import './Portfolio.css';
import {EducationData} from './EducationData';
import {ProjectData} from './ProjectData';
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
          <div className='arrow arrow-first'></div>
          <div className='arrow arrow-second'></div>
          <div className='portfolio-container'>
            <div>
              <p className='portfolio-heading'>
                Education 📕📗📘
              </p>
              <hr className='portfolio-line'/>
                {EducationData.map((element) => {
                  return (
                    <div>
                      <p className='portfolio-subtext'>{element.subtext}</p>
                      <section style={{marginLeft: '5vh', color: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div>
                          {element.left.map((text) => {
                            return (
                              <p className='portfolio-description'>{text}</p>
                            );
                          })}
                        </div>
                      {element.right.map((text) => {
                        return (
                            <p className='portfolio-description right'>{text}</p>
                        );
                      })}
                      </section>
                    </div>
                  );
                })}
            </div>
            <br/>
            <div>
              <p className='portfolio-heading'>
                Experience 👩🏻‍💻👩🏻‍✈️👩🏻‍🔬
              </p>
              <hr className='portfolio-line'/>
              <div>
                <p className='portfolio-subtext'>Microsoft / SWE Intern : Summer 2023</p>
                <p className='portfolio-subtext'>Stripe / SWE Intern : Winter 2023</p>
                <p className='portfolio-subtext'>Meta / Intern : Summer 2022</p>
                <p className='portfolio-subtext'>UCLA CJ Kim Micro and Nano Manufacturing Lab / Undergraduate Researcher : Present</p>
                <p className='portfolio-subtext'>ACM AI Outreach Director : Present</p>
              </div>
              
            </div>
            <br/>
            <div>
              <p className='portfolio-heading'>
                Projects! 🖥📖🏞
              </p>
              <hr className='portfolio-line'/>
              {ProjectData.map((element) => {
                  return (
                    <div>
                      <a style={{color: 'white'}} href={element.link} className='portfolio-subtext'>{element.subtext}</a>
                      <section style={{marginLeft: '5vh', color: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div>
                          {element.left.map((text) => {
                            return (
                              <p className='portfolio-description'>{text}</p>
                            );
                          })}
                        </div>
                      {element.right.map((text) => {
                        return (
                            <p className='portfolio-description right'>{text}</p>
                        );
                      })}
                      </section>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className='footer'>
            <div className='column-center'>
                <a href='https://www.github.com/theamandawang' style={{color: '#FFFFFF'}}>
                  <img src={GitHubImage} alt='github'></img>
                </a>
            </div>
            <div className='column-center' style={{textAlign: 'center'}}>
              <a href='https://www.linkedin.com/in/amandawang22?trk=profile-badge' style={{color: '#FFFFFF'}}>LinkedIn</a>
              <div className='badge-base LI-profile-badge' data-locale='en_US' data-size='small' data-theme='light' data-type='HORIZONTAL' data-vanity='amandawang22' data-version='v1'/>    
            </div>
            <div className='column-center'>
                <a href='https://drive.google.com/file/d/1WiyEKFaOWNq8kKoshtTDoUoP1etM2abE/view?usp=sharing' style={{color: '#FFFFFF'}}>Resume</a>
            </div>
          </div>
        </div>
      );
};
export default Portfolio;