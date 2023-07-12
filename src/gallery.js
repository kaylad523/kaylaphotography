import React from 'react';
import Masonry from "react-responsive-masonry";
import './App.css';

import img1 from './photog/1.JPG';
import img2 from './photog/2.JPG';
import img3 from './photog/3.JPG';
import img4 from './photog/4.JPG';
import img5 from './photog/5.JPG';
import img6 from './photog/6.JPG';
import img7 from './photog/7.JPG';
import img8 from './photog/8.JPG';
import img9 from './photog/9.JPG';
import img10 from './photog/10.JPG';
import img11 from './photog/11.JPG';
import img12 from './photog/12.JPG';
import img13 from './photog/13.JPG';
import img14 from './photog/14.JPG';
import img15 from './photog/15.jpg';
import img16 from './photog/16.JPG';
import img17 from './photog/17.JPG';
import img18 from './photog/18.JPG';
import img19 from './photog/19.JPG';
import img20 from './photog/20.jpeg';
import img21 from './photog/21.JPG';
import img22 from './photog/22.JPG';
import img23 from './photog/23.JPG';
import imglogo from './photog/logo.png';
import contact from './photog/contact.png';

function MasonryGrid() {
    <><h1>hey</h1></>
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
    ];
    
    
    return (
      <div>
        <img src={imglogo} style={{width: '40%'}}/>
        <Masonry columnsCount={3} gutter="2.5px">
          {images.map((image, i) => (
            <div className='pics'><img
              key={i}
              src={image}
              alt=""
              style={{ width: "100%", display: "block" }}
            /></div>
          ))}
        </Masonry>
        <div>
            <img src={contact} style={{width:'25%', paddingTop:'10%'}}/>
        </div>
      </div>
    );
  }
  export default MasonryGrid;