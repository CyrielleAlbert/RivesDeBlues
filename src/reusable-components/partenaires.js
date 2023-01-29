import React from "react";
import "./style/partenaires.css";

function Partenaires() {
  return (
    <div
      style={{
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 25,
      }}
    >
      <div>Partenaires officiels</div>
      <div className="slide">
        <img
          src="/Partenaires/LOGO_CA_anjou_maine-1.png"
          style={{ height: 100, width: "auto", margin: 10 }}
        />
        <img
          src="/Partenaires/logo_capifrance.png"
          style={{ height: 100, width: "auto", margin: 10 }}
        />
        <img
          src="/Partenaires/LOGO_TiERCE_VISION_HD.jpg"
          style={{ height: 100, width: "auto", margin: 10 }}
        />
        <img
          src="/Partenaires/logo_polyphonic-1.png"
          style={{ height: 100, width: "auto", margin: 10 }}
        />
      </div>
      <div>Partenaire institutionnel</div>

      <div className="slide">
        <img
          src="/Partenaires/Logo_RivesDuLoir.jpeg"
          style={{ height: 100, width: "auto", margin: 10 }}
        />
      </div>
      <div>Partenaires Médias</div>
      <div className="slide">
        <img
          src="/Partenaires/logo_mds2.jpg"
          style={{ height: 100, width: "auto", margin: 10 }}
        />
        <img
          src="/Partenaires/LOGO_STUDIO_M.png"
          style={{ height: 100, width: "auto", margin: 10 }}
        />
        <img
          src="/Partenaires/LOGO_SONS_OF_BLUESjpg.jpeg"
          style={{ height: 100, width: "auto", margin: 10 }}
        />
        <img
          src="/Partenaires/ludovic-sal.png"
          style={{ height: 100, width: "auto", margin: 10 }}
        />
      </div>

      <div>Autres partenaires</div>
      <div className="slide">
        <img
          src="/Partenaires/logo_DD.jpg"
          style={{ height: 100, width: "auto", margin: 10 }}
        />
        <img
          src="/Partenaires/Logo_Jacques_BRIANT.jpg"
          style={{ height: 100, width: "auto", margin: 10 }}
        />
        <img
          src="/Partenaires/logo_rdve.jpeg"
          style={{ height: 100, width: "auto", margin: 10 }}
        />
        <img
          src="/Partenaires/logofb.jpeg"
          style={{ height: 100, width: "auto", margin: 10 }}
        />
      </div>
    </div>
  );
}
export default Partenaires;
