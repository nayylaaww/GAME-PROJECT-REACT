import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './maps.css';

import loc1Img from './asset/loc 1.png';
import loc2Img from './asset/loc 2.png';
import loc3Img from './asset/loc 3.png';
import loc4Img from './asset/loc 4.png';
import backImg from '../asset/back.png';
import mapImg from './asset/mapss.png';
import playBtnImg from './ingame/conten/play-btn.png';

import greenForestImg from './ingame/conten/pu-green-forest.png';
import emeraldImg from './ingame/conten/pu-emerald.png';
import mythicImg from './ingame/conten/pu-mythic.png';
import duskwitherImg from './ingame/conten/pu-duskwither.png';

const Maps = () => {
  const [modalImage, setModalImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('');
  const navigate = useNavigate();

  const imageMap = {
    loc1: greenForestImg,
    loc2: emeraldImg,
    loc3: mythicImg,
    loc4: duskwitherImg
  };

  const pageMap = {
    loc1: '/maen/ingame/loc1',
    loc2: '/maen/ingame/loc2',
    loc3: '/maen/ingame/loc3',
    loc4: '/maen/ingame/loc4'
  };

  const openModal = (location) => {
    if (imageMap[location]) {
      setModalImage(imageMap[location]);
      setCurrentLocation(pageMap[location]);
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalImage(null);
  };

  const navigatePage = () => {
    if (currentLocation) {
      navigate(currentLocation);
    }
  };

  return (
    <div className="maps-container">
      <img src={mapImg} alt="Map Background" className="maps" />

      <img src={loc1Img} alt="Loc 1" className="loc1" onClick={() => openModal('loc1')} />
      <img src={loc2Img} alt="Loc 2" className="loc2" onClick={() => openModal('loc2')} />
      <img src={loc3Img} alt="Loc 3" className="loc3" onClick={() => openModal('loc3')} />
      <img src={loc4Img} alt="Loc 4" className="loc4" onClick={() => openModal('loc4')} />

      <Link to="/pilihchar">
        <img src={backImg} alt="Back" className="back" />
      </Link>

      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={modalImage} alt="Location Preview" />
          <div className="modal-button" onClick={(e) => { e.stopPropagation(); navigatePage(); }}>
            <img src={playBtnImg} alt="Play Button" className="pl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Maps;