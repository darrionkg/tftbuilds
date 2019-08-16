import React, { Component } from 'react';
import Link from 'react-router-dom';

export default function Home() {

  return (
    <div>
      <ol>
        <Link to='/team' Team Builder/>
        <Link to='/tierlist' Tier List/>
      </ol>
      <h1>HomePage</h1>
    </div>
  );
}