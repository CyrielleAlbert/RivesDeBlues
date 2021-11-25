import { SocialIcon } from "react-social-icons"
//TODO Ajouter icons 
//TODO Changer le numéro de téléphone
//TODO "Nous contacter"?
//TODO Redirection vers infos
function Footer1() {
    return (
        <div style={{ display: 'flex', flexDirection: "row", backgroundColor: "#0A0E31", width: "100%", height: 250, justifyContent: "center", fontFamily: "Roboto", color: "white", fontSize:15 }}>
            <div style={{ width: "33%", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src="/Images/LOGO.png" width="50%" />
            </div>
            <div style={{ width: "33%", justifyContent: "center", display: "flex", alignItems: "center" }}>
                <div style={{ justifyContent: "center", display: "flex", flexDirection: "column" }}>
                    <span style={{ margin: 10 }}>Le Festival</span>
                    <span style={{ margin: 10 }}>FAQ</span>
                    <span style={{ margin: 10 }}>Espace presse</span>
                    <span style={{ margin: 10 }}>Mentions légales</span>
                </div>
            </div>
            <div style={{ width: "33%", justifyContent: "center", display: "flex", alignItems: "center", flexDirection: "column" }}>
                <div style={{ justifyContent: "center", display: "flex", flexDirection:"column"}}>
                    {"Nous suivre : "}
                    <div style={{ justifyContent: "start", display: "flex", flexDirection: "row" }}>
                        <SocialIcon url="https://www.facebook.com/rives.de.blues.and.co/" bgColor="#FFFFFF" style={{ width: 42, height: 42, margin:"10px 10px 10px 0px" }} />
                        <SocialIcon url="https://www.instagram.com/rives.de.blues.and.co/" bgColor="#FFFFFF" style={{ width: 42, height: 42, margin:"10px 10px 10px 0px" }} />
                    </div>
                    {"Nous contacter : "}
                    <div style={{ justifyContent: "start", display: "flex", flexDirection: "column" }}>
                        <div style={{marginTop:15}}>{"Tourdescene@gmail.com"}</div>
                        <div style={{marginTop:10}}>{"02.41.XX.XX.XX"}</div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer1;