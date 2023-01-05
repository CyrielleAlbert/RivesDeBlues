import Pass from "./pass";
import "./style/billetterie.css";

const LINK_BILLET = "https://www.billetweb.fr/rives-de-blues-co1";

function Billetterie() {
  return (
    <>
      {/* <div style={{ textAlign: "center", fontSize: 40 }}>
        {"Tarifs  PREUM'S    -30% jusqu'au 31 décembre 2022 "}
      </div> */}
      <div class="billetterie">
        <div class="pass-cards">
          <Pass label="Vendredi soir" prix="22€" lien={LINK_BILLET}></Pass>
          <Pass label="Samedi soir" prix="22€" lien={LINK_BILLET}></Pass>
          <Pass
            label="Pass 2 jours"
            prix="40€"
            reduction="44€"
            lien={LINK_BILLET}
          ></Pass>
        </div>
      </div>
      <div class="info">
        <div class="info2">
          <img
            src="/Icons/info.svg"
            width={30}
            height={30}
            style={{ marginRight: 20 }}
          />
          <div>
            {
              "La billetterie se fera exclusivement sur la plateforme Billetweb ou sur place."
            }
          </div>
        </div>
      </div>
    </>
  );
}
export default Billetterie;
