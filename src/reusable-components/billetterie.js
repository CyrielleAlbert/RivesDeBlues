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
          flexDirection:"column",
          justifyContent: "center",
          textAlign: "center",
          paddingBottom: "3rem",
          paddingTop: "3rem",
          color:"white",
          fontSize:32,
          fontFamily:"Roboto",
          paddingLeft:"10%",
          paddingRight:"10%",
          backgroundColor:"#E35944",
          alignItems:"center"
        }}>
          <div>{"La billetterie ouvrira officiellement le 01 Octobre 2022 jusqu'au 31 décembre 2022 avec les tarifs PREUM'S."} 
          </div>
          <div class="info" style={{marginTop:"3rem"}}>
            <div class="info2">
              <img
                src="/Icons/info.svg"
                width={30}
                height={30}
                style={{ marginRight: 20, position: "relative", top: 15 }}
              />
              {
                "La billetterie se fera exclusivement sur la plateforme Billetweb.fr ou sur place"
              }
            </div>
        </div>
      </div>}
     {Date.now() >= 1664611200000 && Date.now() <= 1672527599000 &&  
     <>
      <div style={{textAlign:"center", fontSize: 40 }}>
              {"Tarifs  PREUM'S    -30% jusqu'au 31 décembre 2022 "}
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
          </div>
        <div class="info">
          <div class="info2">
            <img
              src="/Icons/info.svg"
              width={30}
              height={30}
              style={{ marginRight: 20, position: "relative", top: 15 }}
            />
            {
              "La billetterie se fera exclusivement sur la plateforme Billetweb ou sur place"
            }
          </div>
        </div>
        </>}
    
    </>
  );
}
export default Billetterie;
