import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './tutor.css';

import bg from './asset/background.png';
import keyA from './asset/a.png';
import keyW from './asset/w.png';
import keyD from './asset/d.png';
import space from './asset/space.png';
import hand from './asset/blue.png';
import platform from './asset/platfrom.png';
import grimleaf from '../karakter/asset/grimleaf.png';
import warning from './asset/warning.png';
import skip from './asset/skip.png';
import item from './asset/item.png';
import lamp from './asset/lampubang.png';
import info from './asset/info.png';

const Tutorial = () => {
  useEffect(() => {
    const character = document.getElementById('character');
    let positionX = 50;
    let positionY = 50;
    let velocityY = 7;
    let gravity = 0.5;
    let jumpPower = 12;
    let isJumping = false;
    let speed = 5;
    let groundY = 50;
    let keys = {};

    const keyDownHandler = (event) => {
      keys[event.key.toLowerCase()] = true;
      if (!isJumping && (event.key === 'w' || event.key === ' ')) {
        isJumping = true;
        velocityY = jumpPower;
      }
    };

    const keyUpHandler = (event) => {
      delete keys[event.key.toLowerCase()];
    };

    const gameLoop = () => {
      if (keys['a']) positionX -= speed;
      if (keys['d']) positionX += speed;

      if (isJumping) {
        positionY += velocityY;
        velocityY -= gravity;

        if (positionY <= groundY) {
          positionY = groundY;
          velocityY = 0;
          isJumping = false;
        }
      }

      if (character) {
        character.style.left = `${positionX}px`;
        character.style.bottom = `${positionY}px`;
      }

      requestAnimationFrame(gameLoop);
    };

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
    gameLoop();

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, []);

  const openModal = () => {
    document.getElementById("popupImage").src = info;
    document.getElementById("myModal").style.display = "flex";
  };

  const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
  };

  return (
    <div>
      <img src={bg} className="bg" alt="Background" />
      <img src={keyA} className="keyboarda" alt="A key" />
      <img src={keyW} className="keyboardw" alt="W key" />
      <img src={keyD} className="keyboardd" alt="D key" />
      <img src={space} className="space" alt="Space bar" />
      <img src={hand} className="tangan" alt="Hand" />
      <img src={platform} className="platfrom1" alt="Platform" />
      <img src={platform} className="platfrom2" alt="Platform" />
      <img src={platform} className="platfrom3" alt="Platform" />
      <img src={platform} className="platfrom4" alt="Platform" />
      <img src={platform} className="platfrom5" alt="Platform" />
      <img src={grimleaf} id="character" className="grimleaf" alt="Character" />
      <img src={warning} className="warning" alt="Warning" />
      <Link to="/">
        <img src={skip} className="skippp" alt="Skip" />
      </Link>
      <img src={item} className="itemw" alt="Item" />
      <img src={lamp} className="lampu" alt="Lampu" onClick={openModal} />

      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close-btn" onClick={closeModal}>&times;</span>
          <img id="popupImage" src={info} alt="Popup Info" />
          <img src="" className="back-button" onClick={closeModal} alt="Back" />
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
