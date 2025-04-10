import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './pilihchar.css';

import bgImage from '../maen/asset/bgpilihchar.png';
import kiriArrow from '../maen/asset/kiri.png';
import kananArrow from '../maen/asset/kanan.png';
import papanNama from '../../karakter/asset/papan-nama.png';
import backBtn from '../asset/back.png';

import grimleaf from '../../karakter/asset/grimleaf.png';
import mosslyn from '../../karakter/asset/mosslyn.png';
import stonzel from '../../karakter/asset/stonzel.png';
import sylphern from '../../karakter/asset/sylphern.png';

const PilihKarakter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const characters = [
    { img: grimleaf, name: 'Grimleaf' },
    { img: mosslyn, name: 'Mosslyn' },
    { img: stonzel, name: 'Stonzel' },
    { img: sylphern, name: 'Sylphern' },
  ];

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + characters.length) % characters.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % characters.length);
  };

  const handleSelect = () => {
    navigate(`/maps?character=${characters[currentIndex].name}`);
  };

  return (
    <div className="pilih-char-container">
      <img src={bgImage} alt="Background" className="bgp" />
      <img src={characters[currentIndex].img} alt="Character" className="c1" onClick={handleSelect} />
      <img src={kiriArrow} alt="Previous" className="kiri" onClick={handlePrevious} />
      <img src={kananArrow} alt="Next" className="kanan" onClick={handleNext} />
      <img src={papanNama} alt="Papan Nama" className="p1" onClick={handleSelect} />
      <p className="n1" onClick={handleSelect}><b>{characters[currentIndex].name}</b></p>

      <Link to="/landingpage">
        <img src={backBtn} alt="Back" className="back-button" />
      </Link>
    </div>
  );
};

export default PilihKarakter;