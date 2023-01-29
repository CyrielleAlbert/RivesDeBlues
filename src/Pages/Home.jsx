import Header from "../reusable-components/header";
import "./style/Home.css";
import Countdown from "../reusable-components/countdown";
import Programme from "../reusable-components/program2";
import infoGroupes from "../Infos/Programmation_2023.json";
import InfosPratiques from "../reusable-components/infosPratiques";
import Billetterie from "../reusable-components/billetterie";
import Footer1 from "../reusable-components/footer";
import { ReactComponent as BilletSVG } from "./../Icons/coupon.svg";
import Partenaires from "../reusable-components/partenaires";
import React, { useRef, useEffect } from "react";
//TODO revoir les font-size (harmoniser)
//TODO revoir les marges (harmoniser)
const LINK_TM = "https://www.billetweb.fr/rives-de-blues-co1";

const Home = () => {
  const progScroll = useRef(null);
  const ticketScroll = useRef(null);
  function executeScroll(scroll) {
    if (scroll === "prog") {
      window.scrollTo(0, progScroll.current.offsetTop);
    } else if (scroll === "ticket") {
      window.scrollTo(0, ticketScroll.current.offsetTop);
    }
  }

  return (
    <div>
      <Header style={{ zIndex: 100 }} buttonCallback={executeScroll} />
      <div className="background">
        <img src="/Images/background.png" />
      </div>
      <div className="content">
        <div className="accroche">
          <span>
            {
              "Le festival Rives de Blues & Co revient pour une nouvelle édition."
            }
          </span>
          <span style={{ marginTop: 15 }}>{"Le 12 et 13 mai 2023"}</span>
        </div>
        <div className="countdown">
          <Countdown timestamp={1683910800} />
        </div>
        <a className="bouton1" href={LINK_TM}>
          Billetterie ouverte !{" "}
        </a>
      </div>
      <div>
        <div className="title" ref={progScroll}>
          <hr
            style={{
              width: "35%",
              height: 2,
              borderWidth: 0,
              backgroundColor: "black",
              position: "relative",
              top: 10,
              color: "#000000",
            }}
          />
          <img
            src="/Icons/calendar-dates.svg"
            width={36}
            style={{ marginRight: 20 }}
          />
          Programme
          <hr
            style={{
              width: "35%",
              height: 2,
              borderWidth: 0,
              backgroundColor: "black",
              position: "relative",
              top: 10,
              color: "#000000",
            }}
          />
        </div>

        <Programme
          titre={"Vendredi soir"}
          infoGroupes={{
            groupe1: { ...infoGroupes["groupe1"] },
            groupe2: { ...infoGroupes["groupe2"] },
          }}
        />
        <Programme
          titre={"Samedi soir"}
          infoGroupes={{
            groupe1: { ...infoGroupes["groupe3"] },
            groupe2: { ...infoGroupes["groupe4"] },
            groupe3: { ...infoGroupes["groupe5"] },
          }}
        />
      </div>
      <div>
        <div
          className="title"
          style={{ color: "white", backgroundColor: "#E35944" }}
          ref={ticketScroll}
        >
          <hr
            style={{
              width: "35%",
              height: 2,
              borderWidth: 0,
              backgroundColor: "white",
              position: "relative",
              top: 10,
              color: "#000000",
            }}
          />
          <BilletSVG
            fill="#FFF"
            width={38}
            height={38}
            style={{ marginRight: 20, position: "relative", top: 15 }}
          />
          Billetterie
          <hr
            style={{
              width: "35%",
              height: 2,
              borderWidth: 0,
              backgroundColor: "white",
              position: "relative",
              top: 10,
              color: "#000000",
            }}
          />
        </div>
        <Billetterie />
      </div>
      <div>
        <div className="title">
          <hr
            style={{
              width: "35%",
              height: 2,
              borderWidth: 0,
              backgroundColor: "black",
              position: "relative",
              top: 10,
              color: "#000000",
            }}
          />
          <img src="/Icons/info.svg" width={36} style={{ marginRight: 20 }} />
          Infos pratiques
          <hr
            style={{
              width: "35%",
              height: 2,
              borderWidth: 0,
              backgroundColor: "black",
              position: "relative",
              top: 10,
              color: "#000000",
            }}
          />
        </div>
        <InfosPratiques />
      </div>
      <div>
        <div className="title">
          <hr
            style={{
              width: "35%",
              height: 2,
              borderWidth: 0,
              backgroundColor: "black",
              position: "relative",
              top: 10,
              color: "#000000",
            }}
          />
          <img src="/Icons/rocket.svg" width={36} style={{ marginRight: 20 }} />
          Partenaires
          <hr
            style={{
              width: "35%",
              height: 2,
              borderWidth: 0,
              backgroundColor: "black",
              position: "relative",
              top: 10,
              color: "#000000",
            }}
          />
        </div>
        <div style={{ marginTop: 50, marginBottom: 100 }}>
          <Partenaires />
        </div>
      </div>

      <Footer1 />
    </div>
  );
};
export default Home;
