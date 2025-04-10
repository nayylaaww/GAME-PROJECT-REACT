import React from 'react';
import { Link } from 'react-router-dom';
import './gameinfo.css';

import bgHutan from '../assets/bg-hutan.png';
import gulunganKertas from '../assets/gulungan-kertas.png';
import logoIndex from '../assets/logo-index.png';
import backButton from '../assets/back.png';

const GameInfo = () => {
  return (
    <div className="gameinfo-container">
      <img src={bgHutan} className="bg-hutan" alt="Background Hutan" />
      <img src={gulunganKertas} className="scroll" alt="Scroll" />
      <img src={logoIndex} className="title-logo" alt="Logo" />
      
      <Link to="/">
        <img src={backButton} className="back-button" alt="Back" />
      </Link>

      <div className="scroll-text">
        <p>
          Selamat datang di dunia hijau yang penuh petualangan!<br />
          VreDevol adalah game platformer seru dengan suasana alam yang sejuk dan damai.
          Kendalikan karakter unik berbentuk makhluk lucu yang memiliki kekuatan spesial.
          Melompat, berlari, dan lawan berbagai tantangan untuk mencapai level tertinggi.
        </p>
      </div>
    </div>
  );
};

export default GameInfo;
