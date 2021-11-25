import Header from '../reusable-components/header';
import './style/Home.css';
import Countdown from '../reusable-components/countdown';
import Programme from '../reusable-components/program';
import infoGroupes from "../Infos/Programmation.json";
import InfosPratiques from '../reusable-components/infosPratiques';
import Billetterie from '../reusable-components/billetterie';
import Footer1 from '../reusable-components/footer';
import { ReactComponent as BilletSVG} from './../Icons/coupon.svg'
//TODO ajouter le lien pour bouton1
//TODO ajouter les séparateurs lignes des titres
//TODO revoir les font-size (harmoniser)
//TODO revoir les marges (harmoniser)

function Home(props) {

    return (
        <div>
            <Header style={{ zIndex: 100 }}></Header>
            <div className="background">
                <img src="/Images/background.png" width={"100%"} style={{ overflow: "hidden" }} />
            </div>
            <div className="content" stle={{ width: window.innerWidth }}>
                <div className="accroche">{"Tenez vous prêts pour une déflagration de Rock & Blues à Rives-du-Loir-en-Anjou."}</div>
                <div className="countdown"><Countdown timestamp={1653073200}></Countdown></div>
                <div className="bouton1">Billetterie ouverte ! </div>
            </div>
            <div>
                <div className="title">
                    <img src="/Icons/calendar-dates.svg" width={36} style={{ marginRight: 20 }} />
                    Programme
                </div>

                <Programme titre={"Vendredi soir"} infoGroupes={{ "groupe1": { ...infoGroupes["groupe1"] }, "groupe2": { ...infoGroupes["groupe2"] }, "groupe3": { ...infoGroupes["groupe3"] } }}></Programme>
                <Programme titre={"Samedi soir"} infoGroupes={{ "groupe1": { ...infoGroupes["groupe4"] }, "groupe2": { ...infoGroupes["groupe5"] }, "groupe3": { ...infoGroupes["groupe6"] } }}></Programme>

            </div>
            <div className="billetterie">
                <div className="title" style={{ color: "white" }}>
                    <BilletSVG fill="#FFF" width={38} height={38} style={{marginRight:20, position:'relative',top:5}}/>
                    Billetterie
                </div>
                <Billetterie></Billetterie>

            </div>
            <div>
                <div className="title">
                    <img src="/Icons/info.svg" width={36} style={{ marginRight: 20 }} />
                    Infos pratiques
                </div>
                <InfosPratiques></InfosPratiques>
            </div>

            <Footer1></Footer1>
        </div>
    )
}
export default Home;