import Header from '../reusable-components/header';
import './style/Home.css';
import Countdown from '../reusable-components/countdown';
import Programme from '../reusable-components/program';
import infoGroupes from "../Infos/Programmation.json";
import InfosPratiques from '../reusable-components/infosPratiques';
import Billetterie from '../reusable-components/billetterie';
import Footer1 from '../reusable-components/footer';
import { ReactComponent as BilletSVG } from './../Icons/coupon.svg'
import Partenaires from '../reusable-components/partenaires';
import { useRef } from 'react';
//TODO revoir les font-size (harmoniser)
//TODO revoir les marges (harmoniser)

const LINK_TM = "https://www.ticketmaster.fr/fr/manifestation/rives-de-blues-and-co-billet/idmanif/515408#"

function Home(props) {
    const progScroll = useRef(null);
    const ticketScroll = useRef(null);
    
    function executeScroll(scroll){
        if (scroll === "prog"){
            window.scrollTo(0,progScroll.current.offsetTop)
        }
        else if (scroll==="ticket"){
            window.scrollTo(0,ticketScroll.current.offsetTop)

        }

    }

    return (
        <div>
            <Header style={{ zIndex: 100 }} buttonCallback={executeScroll}></Header>
            <div className="background">
                <img src="/Images/background.png" />
            </div>
            <div className="content" stle={{ width: window.innerWidth }}>
                <div className="accroche">{"Tenez-vous prêts pour une déflagration de Rock & Blues à Rives-du-Loir-en-Anjou."}</div>
                <div className="countdown"><Countdown timestamp={1653073200}></Countdown></div>
                <a className="bouton1" href={LINK_TM}>Billetterie ouverte ! </a>
            </div>
            <div>
                <div className="title" ref={progScroll}>
                    <hr style={{ width:"35%", height: 2, borderWidth: 0, backgroundColor: "black", position: 'relative', top: 10, color: "#0A0E31" }} />
                    <img src="/Icons/calendar-dates.svg" width={36} style={{ marginRight: 20 }} />
                    Programme
                    <hr style={{ width:"35%", height: 2, borderWidth: 0, backgroundColor: "black", position: 'relative', top: 10, color: "#0A0E31" }} />

                </div>

                <Programme titre={"Vendredi soir"} infoGroupes={{ "groupe1": { ...infoGroupes["groupe1"] }, "groupe2": { ...infoGroupes["groupe2"] }, "groupe3": { ...infoGroupes["groupe3"] } }}></Programme>
                <Programme titre={"Samedi soir"} infoGroupes={{ "groupe1": { ...infoGroupes["groupe4"] }, "groupe2": { ...infoGroupes["groupe5"] }, "groupe3": { ...infoGroupes["groupe6"] } }}></Programme>

            </div>
            <div>
                <div className="title" style={{ color: "white", backgroundColor:"#0a0e31" }} ref={ticketScroll}>
                    <hr style={{ width:"35%", height: 2, borderWidth: 0, backgroundColor: "white", position: 'relative', top: 10, color: "#0A0E31" }} />
                    <BilletSVG fill="#FFF" width={38} height={38} style={{ marginRight: 20, position: 'relative', top: 15 }} />
                    Billetterie
                    <hr style={{ width:"35%", height: 2, borderWidth: 0, backgroundColor: "white", position: 'relative', top: 10, color: "#0A0E31" }} />

                </div>
                <Billetterie></Billetterie>

            </div>
            <div>
                <div className="title">
                    <hr style={{ width:"35%", height: 2, borderWidth: 0, backgroundColor: "black", position: 'relative', top: 10, color: "#0A0E31" }} />
                    <img src="/Icons/info.svg" width={36} style={{ marginRight: 20 }} />
                    Infos pratiques
                    <hr style={{ width:"35%", height: 2, borderWidth: 0, backgroundColor: "black", position: 'relative', top: 10, color: "#0A0E31" }} />

                </div>
                <InfosPratiques></InfosPratiques>
            </div>
            <div>
                <div className="title">
                    <hr style={{ width:"35%", height: 2, borderWidth: 0, backgroundColor: "black", position: 'relative', top: 10, color: "#0A0E31" }} />
                    <img src="/Icons/rocket.svg" width={36} style={{ marginRight: 20 }} />
                    Partenaires
                    <hr style={{ width:"35%", height: 2, borderWidth: 0, backgroundColor: "black", position: 'relative', top: 10, color: "#0A0E31" }} />
                </div>
                <div style={{marginTop:50, marginBottom:100}}>
                <Partenaires></Partenaires>
                </div>
            </div>

            <Footer1></Footer1>
        </div>
    )
}
export default Home;