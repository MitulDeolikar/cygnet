import React from 'react';
import HeaderImg from '../HeaderImg/HeaderImg'; // Adjust the import path
import About from '../About/About';
import BigTextTyped from '../BigTyped/BigTyped'; // Import BigTextTyped

import hImg from '../../Assets/cygnetimg.jpeg';

function Home() {
  return (
    <div>
      <HeaderImg imageUrl={hImg} /> {/* Remove the bigText prop */}
      <BigTextTyped /> {/* Render the BigTextTyped component */}
      <About />
    </div>
  );
}

export default Home;
