import React from "react";
import "./karakter.css";

const Stonzel = () => {
  return (
    <div className="karakter-page">
      <a href="/karakter">
        <img src="/karakter/asset/back.png" alt="Back" className="back-button" />
      </a>
      <img src="/karakter/asset/charbg.png" alt="Background" className="background" />
      <img src="/karakter/asset/papan-char.png" alt="Papan Karakter" className="papan-char1" />
      <img src="/karakter/asset/stonzel.png" alt="Stonzel" className="karakter-img" />
      <img src="/karakter/asset/kertas3.png" alt="Deskripsi" className="kertas" />
    </div>
  );
};

export default Stonzel;
