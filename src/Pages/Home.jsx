import Header from '../reusable-components/header';
import './style/Home.css';
import Countdown from '../reusable-components/countdown';
import Programme from '../reusable-components/program';
import infoGroupes from "../Infos/Programmation.json";
import InfosPratiques from '../reusable-components/infosPratiques';
import Billetterie from '../reusable-components/billetterie';

function Home(props) {

    return (
        <div>
            <Header style={{
                zIndex: 100
            }}></Header>
            <div className="background">
                <img src="/Images/background.png" width={"100%"} style={{ overflow: "hidden" }} />
            </div>
            <div className="content" stle={{ width: window.innerWidth }}>
                <div className="accroche">{"Tenez vous prêts pour une déflagration de Rock & Blues à Rives-du-Loir-en-Anjou."}</div>
                <div className="countdown"><Countdown timestamp={1653073200}></Countdown></div>
                <div className="bouton1">Billetterie ouverte ! </div>
            </div>
            <div>
                <div className="title">Programme</div>

                <Programme titre={"Vendredi soir"} infoGroupes={{ "groupe1": { ...infoGroupes["groupe1"] }, "groupe2": { ...infoGroupes["groupe2"] }, "groupe3": { ...infoGroupes["groupe3"] } }}></Programme>
                <Programme titre={"Samedi soir"} infoGroupes={{ "groupe1": { ...infoGroupes["groupe4"] }, "groupe2": { ...infoGroupes["groupe5"] }, "groupe3": { ...infoGroupes["groupe6"] } }}></Programme>

            </div>
            <div className="billetterie">
                <div className="title" style={{color:"white"}}>Billetterie</div>
                <Billetterie></Billetterie>

            </div>
            <div>
                <div className="title">Infos pratiques</div>
                <InfosPratiques></InfosPratiques>
            </div>

        </div>
    )
}
export default Home;