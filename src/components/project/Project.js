// import React from 'react';
// import './Project.css';
// import Website from '../../images/website.png';
// import BIA from '../../images/BIA.png';
// import Game from '../../images/game.png';
// import Pokedex from '../../images/pokedex.png';
// import Movies from '../../images/movies.png';
// import Home from '../../images/home.png';
// import Flip from '../../images/flip.png';

// const Project = () => {
//   return (
//     <div className='projects'>
//       <div className='projects-header'>
//         <h1>Projects and Portfolio</h1>
//       </div>
//       <div className='projects-header-quote'>
//         <h3>Sharing my endeavors and passions...</h3>
//       </div>
//       <div className='projects-post'>
//         <div className='projects-post-box'>
//           <div className='project-post-container'>
//             <div className='img-box'>
//               <img src={ Website } alt='website' className='projects-img' />
//             </div>
//             <div className='projects-sub'>
//               <h3>This is a small personal website, which was created during my intership. It utilized HTML, CSS, and JavaScript. </h3>
//               <a href="#" className='projects-btn'>Read More</a>
//             </div>
//           </div>
//           <div className='project-post-container'>
//             <div className='img-box'>
//               <img src={ Pokedex } alt='Pokedex' className='projects-img' />
//             </div>
//             <div className='projects-sub'>
//               <h3>This is a small personal website, which was created during my intership. It utilized HTML, CSS, and JavaScript. </h3>
//               <a href="#" className='projects-btn'>Read More</a>
//             </div>
//           </div>
//           <div className='project-post-container'>
//             <div className='img-box'>
//               <img src={ BIA } alt='BIA' className='projects-img' />
//             </div>
//             <div className='projects-sub'>
//               <h3>This is a small personal website, which was created during my intership. It utilized HTML, CSS, and JavaScript. </h3>
//               <a href="#" className='projects-btn'>Read More</a>
//             </div>
//           </div>
//         </div>
        


//       </div>
//     </div>
//   )
// }

// export default Project;

import React from 'react';
import './Project.css';

const Project = ({img, desc}) => {
  return (
    <div className='pro'>
      <div className='pro-broswer'>
        <div className='pro-circle'></div>
        <div className='pro-circle'></div>
        <div className='pro-circle'></div>
      </div>
      <div className='pro-item'>
        <div className='pro-list'> 
          <img className='pro-img' src={img} alt="" />
        </div>

        <div className='pro-text'>
          <h4>{desc}</h4>
          <a href='#' className='pro-btn'>Read More</a>
        </div>
      </div> 
    </div>
  )
}

export default Project;