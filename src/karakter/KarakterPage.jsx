import React from "react";
import { Link } from "react-router-dom";
import "./Karakter.css";

const KarakterPage = () => {
  return (
    <div className="karakter-container">
      <h1 className="karakter-title">Pilih Karakter</h1>
      <div className="karakter-links">
        <Link to="/karakter/grimleaf">Grimleaf</Link>
        <Link to="/karakter/mosslyn">Mosslyn</Link>
        <Link to="/karakter/stonzel">Stonzel</Link>
        <Link to="/karakter/sylphern">Sylphern</Link>
      </div>
    </div>
  );
};

export default KarakterPage;
