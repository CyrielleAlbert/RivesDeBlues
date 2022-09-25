import Header from "../reusable-components/header";
import Footer1 from "../reusable-components/footer";
import React from "react"
import { useHistory } from "react-router-dom";

export default function Presse(){
    const history = useHistory();
  return (
    <div style={{height:window.innerHeight,backgroundColor:"#0a0e31"}}>
      <Header style={{ zIndex: 100 }} buttonCallback={()=>history.push("/")}/>
      <div style={{ marginTop:"3rem",paddingTop:"3rem", paddingLeft:"3rem",backgroundColor:"white", height:"70%", fontFamily:"Roboto"}}>
          <h2>Presse</h2>
          <div>
            {"Le dossier de presse contient : "}
            <ul>
                <li>une présentation des artistes de l'édition 2023</li>
                <li>les informations essentielles</li>
                <li>la scène du festival</li>
                <li>les informations sur les prestataires et les bénévoles</li>
                <li>le papier du président de l'association Tour de Scène</li>
                
                </ul>
            {"Pour le télécharger, cliquez "}<a href={"/dossier-presse-RDB.pdf"} download="Dossier-presse-RDB.pdf">ici</a>{"."}
          </div>
          <div>{"Pour télécharger l'affiche du festival, cliquez "}<a href={"/affiche-festival-RDB.pdf"} download="affiche-festival-RDB.pdf">ici</a>{"."}</div>
      </div>
      <Footer1 />
    </div>
  )}
