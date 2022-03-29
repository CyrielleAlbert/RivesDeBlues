import { SocialIcon } from "react-social-icons"
import { ReactComponent as MailSVG } from './../Icons/mail.svg'
import { ReactComponent as PhoneSVG } from './../Icons/call-phone.svg'

//TODO Redirection vers infos
function Footer1() {
    return (
        <div style={{backgroundColor: "#0A0E31", width: "100%", height: "15.5rem", fontSize:"1rem",color:"white", fontFamily:"Roboto"}}>
            <div style={{ display: 'flex', flexDirection: "row",  justifyContent: "center", fontFamily: "Roboto", color: "white", fontSize: "1rem", paddingTop:"1.25rem" }}>
                <div style={{ width: "33%", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src="/Images/Logo.svg" width="50%" />
                </div>
                <div style={{ width: "33%", justifyContent: "center", display: "flex", alignItems: "center" }}>
                    <div style={{ justifyContent: "center", display: "flex", flexDirection: "column" }}>
                        <span style={{ margin: "0.75rem" }}>Le Festival</span>
                        <span style={{ margin: "0.75rem" }}>FAQ</span>
                        <span style={{ margin: "0.75rem" }}>Espace presse</span>
                        <span style={{ margin: "0.75rem" }}>Mentions légales</span>
                    </div>
                </div>
                <div style={{ width: "33%", justifyContent: "center", display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div style={{ justifyContent: "center", display: "flex", flexDirection: "column" }}>
                        {"Nous suivre : "}
                        <div style={{ justifyContent: "start", display: "flex", flexDirection: "row" }}>
                            <SocialIcon url="https://www.facebook.com/rives.de.blues.and.co/" bgColor="#FFFFFF" style={{ width: "2.625rem", height: "2.625rem", margin: "0.75rem 0.75rem 0.75rem 0rem" }} />
                            <SocialIcon url="https://www.instagram.com/rives.de.blues.and.co/" bgColor="#FFFFFF" style={{ width: "2.625rem", height: "2.625rem", margin: "0.75rem 0.75rem 0.75rem 0rem" }} />
                        </div>
                        {"Nous contacter : "}
                        <div style={{ justifyContent: "start", display: "flex", flexDirection: "column" }}>
                            <div style={{ marginTop: "1rem" }}>
                                <MailSVG fill="#FFF" width={"1.25rem"} height={"1.25rem"} style={{ marginRight: "0.75rem", position: "relative", top: "0.25rem" }} />
                                {"Tourdescene@gmail.com"}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{textAlign:"center",marginTop:25,fontSize:13}}>{"Copyright"} &copy; {"Rives de Blues & Co. All Rights Reserved."}</div>
        </div>
    )
}
export default Footer1;