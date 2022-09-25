import Pass from "./pass";
import "./style/billetterie.css";

const LINK_1_DAY = "https://www.billetweb.fr/rives-de-blues-co";
const LINK_2_DAYS = "https://www.billetweb.fr/rives-de-blues-co";
const LINK_PDV_TM =
  "https://www.ticketmaster.fr/static/html/fr/popups/pd_retrait.htm";
function Billetterie() {
  return (
    <>
    {Date.now() < 1664611200000 &&
        <div style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          paddingBottom: "3rem",
          paddingTop: "3rem",
          color:"white",
          fontSize:32,
          fontFamily:"Roboto",
          paddingLeft:"10%",
          paddingRight:"10%",
          backgroundColor:"#E35944"
        }}>{"La billetterie ouvrira officiellement le 01 Octobre 2022 avec les tarifs PREUMS."} 
        </div>}
     {Date.now() >= 1664611200000 && Date.now() <= 1672527599000 &&  
     <>
      <div style={{textAlign:"center", fontSize: 40 }}>
              {"Tarifs  PREUMS    -5€ jusqu'au 31 décembre 2022 "}
      </div>
      <div class="billetterie">
            <div class="pass-cards">
              <Pass label="Vendredi soir" prix="17€" reduction="22€" lien={LINK_1_DAY}></Pass>
              <Pass label="Samedi soir" prix="17€" reduction="22€" lien={LINK_1_DAY}></Pass>
              <Pass
                label="Pass 2 jours"
                prix="30€"
                reduction="35€"
                lien={LINK_2_DAYS}
              ></Pass>
            </div>
          </div></>}
        {/* <div class="info">
          <div class="info2">
            <img
              src="/Icons/info.svg"
              width={30}
              height={30}
              style={{ marginRight: 20, position: "relative", top: 15 }}
            />
            {
              "Aucune vente ne se fera sur place. Achat exclusivement en ligne ou dans les points de vente partenaires."
            }
          </div>
          <div
            style={{
              fontSize: 20,
              marginTop: 10,
              marginBottom: 10,
              marginLeft: 50,
              marginTop: 20,
            }}
          >
            Trouver un point de vente <a href={LINK_1_DAY}>billetweb</a> ou{" "}
            <a href={LINK_PDV_TM}>TicketMaster</a>.
          </div>
        </div> */}
    
    </>
  );
}
export default Billetterie;
