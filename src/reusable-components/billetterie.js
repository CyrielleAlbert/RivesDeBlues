import Pass from "./pass"
function Billetterie() {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: 50 }}>
            <div style={{ padding: 20, display: "flex", flexDirection: "row" }}>
                <Pass label="Pass vendredi" prix="20€" lien=""></Pass>
                <Pass label="Pass samedi" prix="20€" lien=""></Pass>
                <Pass label="Pass 2 jours" prix="35€" reduction="40€" lien=""></Pass>
            </div>
            <div style={{ color: "black", backgroundColor: "white", fontFamily: "Roboto", padding: 10, width: 770, borderRadius: 12 }}>
                <div style={{ fontSize: 25, marginTop: 10, marginBottom: 10, display: "flex" }}>
                    <img src="/Icons/info.svg" width={30} height={30} style={{ marginRight: 20, position:"relative",top:15 }} />
                    {"Aucune vente ne se fera sur place. Achat exclusivement en ligne ou dans les points de vente partenaires."}</div>
                <div style={{ fontSize: 20, marginTop: 10, marginBottom: 10, marginLeft:50,marginTop:20}}>Trouver un point de vente <a href="https://google.fr/" >FranceBillet</a> ou <a href="https://google.fr/">TicketMaster</a>.</div>
            </div>
        </div>
    )
}
export default Billetterie;