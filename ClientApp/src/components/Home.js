import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

export default function Home() {

  return (
    <div className='homeContainer'>
      <ol>
        <div className='flexEven'>
          <Link to='/team' className='pageLink'>Team Builder</Link>
          <Link to='/tierlist' className='pageLink'>Tier List</Link>
        </div>
      </ol>
    </div>
  );
}