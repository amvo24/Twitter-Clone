import React from 'react';
import { Link } from 'react-router-dom'
import './Socials.css'



const SocialsWidget = () => {
  return (
    <>
    <div className='SocialsContainer'>
      <div className='MySocialsTitle'>My Socials</div>
      <div className='SocialsContent'>
    <div className='SocialsDiv'>
      <a className='LinkforSocial' href='https://www.linkedin.com/in/andrewmvo/'>
        <div className='linkedin'>
        <div className='logoContainer'>
          <img className='ImageLogoSocials' src='https://cdn-icons-png.flaticon.com/512/174/174857.png'/>
          </div>
          <div className='SocialsText'>Linked In</div>
        </div>
      </a>
    </div>
    <div className='SocialsDiv'>
      <a className='LinkforSocial' href='https://github.com/amvo24'>
      <div className='Github'>
        <div className='logoContainer'>
          <img className='ImageLogoSocials' src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'/>
        </div>
        <div className='SocialsText'>Github</div>
      </div>
      </a>
    </div>
    <div className='SocialsDiv'>
      <a className='LinkforSocial' href='https://airbnb-clone-final.herokuapp.com/'>
        <div className='Airbnb'>
        <div className='logoContainer'>
          <img className='ImageLogoSocials' src='https://companieslogo.com/img/orig/ABNB-4aaade0f.png'/>
          </div>
          <div className='SocialsText'>My Airbnb Project!</div>
        </div>
      </a>
    </div>

      </div>
    </div>

    </>
  );
}

export default SocialsWidget;
