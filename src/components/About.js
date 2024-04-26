//have an aside element
//within the aside element, have an image element with a src attribute of the image variable
//within the aside element, have a paragraph element with the about variable

//this was my first aproach bur not all the tests were passing,i kept getting errors
// import React from 'react'
// function About({image, about}) {
//   const defaultImage= "https://via.placeholder.com/215"

//   return (
//    <aside>
//     <img src={image || defaultImage} alt="blogo logo"></img>
//     <p>{about}</p>
//    </aside>
//   )
// }

// export default About

import React from 'react';

const About = ({ image = "https://via.placeholder.com/215", about }) => {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;