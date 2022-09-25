import { SocialIcon } from "react-social-icons"
import { ReactComponent as MailSVG } from './../Icons/mail.svg'
import { ReactComponent as PhoneSVG } from './../Icons/call-phone.svg'
import "./style/footer.css"
import { useHistory } from "react-router-dom"
//TODO Redirection vers infos
function Footer1() {
    const history=useHistory();
    return (
        <div class="footer">
            <div class="container">
                <div class="logof">
                    <img src="/Images/Logo.svg" width="50%" />
                </div>
                <div class="links">
                    <div style={{ justifyContent: "center", display: "flex", flexDirection: "column" }}>
                        {/* <span style={{ margin: "0.75rem" }}>Le Festival</span>
                        <span style={{ margin: "0.75rem" }}>FAQ</span> */}
                        <span style={{ margin: "0.75rem" }} onClick={()=>history.push("/presse")}>Espace presse</span>
                        {/* <span style={{ margin: "0.75rem" }}>Mentions légales</span> */}
                    </div>
                </div>
                <div class="socialNet">
                    <div style={{ justifyContent: "center", display: "flex", flexDirection: "column" }}>
                        {"Nous suivre : "}
                        <div class="networks">
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