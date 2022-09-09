import React from 'react';
import './Criticism.css'



const CriticismWidget = () => {
  return (
    <>
    <div className='CriticismContainer'>
      <div className='CriticismContent'>
    <h2>Constructive Criticism Welcome!</h2>
    <form>
     <textarea
     placeholder='Leave A Comment!'
     ></textarea>
    </form>

      </div>
    </div>
    </>
  );
}

export default CriticismWidget;
