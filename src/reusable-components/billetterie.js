import Pass from "./pass";
import "./style/billetterie.css";

const LINK_1_DAY = "https://www.billetweb.fr/rives-de-blues-co";
const LINK_2_DAYS = "https://www.billetweb.fr/rives-de-blues-co";
const LINK_PDV_TM =
  "https://www.ticketmaster.fr/static/html/fr/popups/pd_retrait.htm";
function Billetterie() {
  return (
    <div class="billetterie">
      <div class="pass-cards">
        <Pass label="Vendredi soir" prix="20€" lien={LINK_1_DAY}></Pass>
        <Pass label="Samedi soir" prix="20€" lien={LINK_1_DAY}></Pass>
        <Pass
          label="Pass 2 jours"
          prix="35€"
          reduction="40€"
          lien={LINK_2_DAYS}
        ></Pass>
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
      </div>
    </div>
  );
}
export default Billetterie;
