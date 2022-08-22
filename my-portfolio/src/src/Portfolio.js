import {useEffect} from 'react';
import './Portfolio.css';
export default function Portfolio() {
    useEffect(() => {
      const script = document.createElement('script');

      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;

      document.body.appendChild(script);

      return () => {
       document.body.removeChild(script);
      };
    }, []);

    return (
        <div>
          <div className='img-container'>
            <header className="portfolio-header">
              <p className='header-text'>
                Hey! I'm Amanda Wang.
              </p>
              <div></div>
              <p className='header-text'>
                I'm currently studying computer engineering at UCLA!
              </p>
            </header>
          </div>
          <div className='portfolio-container'>
 
          </div>
          <footer>
            <div>
              <p style={{color: '#FFFFFF'}}>LinkedIn</p>  
              <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="amandawang22" data-version="v1">
                <a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/amandawang22?trk=profile-badge">Amanda Wang</a>
              </div>    
            </div>
          </footer>
        </div>
      );
};