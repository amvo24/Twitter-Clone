import React from 'react';
import './Criticism.css'



const CriticismWidget = () => {
  return (
    <>
    <div className='CriticismContainer'>
      <div className='CriticismContent'>
        <div className='CriticismTitleContainer'>
          <div className='CriticismTitle'>Constructive Criticism Welcome</div>
        </div>
            <div className='CriticismFormContainer'>
              {/* <form className='CriticismForm'> */}
              <textarea
                className='CriticismFormTextArea'
                placeholder='Let me know what you like about the site, as well as what you think I can do to improve it!'
              ></textarea>
              {/* </form> */}
              <button className='CriticismFormTextAreaButton'>Submit</button>
            <div className='CriticismComments'>
              Comments are here
            </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default CriticismWidget;
