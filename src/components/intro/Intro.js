import React from 'react';
import Me from '../../images/Me.jpeg';
import './Intro.css';

const Intro = (props) => {
  return (
    <div className='intro' ref={props.refObj}>
        <div className='intro-left'>
            <div className='intro-left-wrapper'>
                <h2 className='intro-intro'>Hello, my name is</h2>
                <h1 className='intro-name'>Jenny Yang</h1>
                <div className='intro-title'>
                    <div className='intro-title-wrapper'>
                        <div className='intro-title-item'>UI Developer</div>
                        <div className='intro-title-item'>UX Designer</div>
                        <div className='intro-title-item'>Problem Solver</div>
                    </div>
                </div>
                <p className='intro-desc'>
                    I am a UI Developer, a UX Designer, a Problem Solver.
                    I love coding and I love using React to build wonderful components.
                </p>
            </div>
        </div>

        <div className='intro-right'>           
            <div className='img-container'>
                <img src={ Me } alt='Me' className='intro-img' />
            </div>           
        </div>
    </div>
  )
}

export default Intro;