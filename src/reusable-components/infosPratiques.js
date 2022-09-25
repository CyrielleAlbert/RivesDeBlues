
import './style/infosPratiques.css'
import { ReactComponent as InfoSVG } from './../Icons/info.svg'
import { ReactComponent as WarningSVG } from './../Icons/alert-triangle.svg'

function InfosPratiques() {
    return (
        <div>
            <div className="titre-info-p">Mesures sanitaire</div>
            <div className="content-2">{"L’accueil du public s’effectue dans le strict respect des protocoles sanitaires en vigueur au moment de l’événement, en accord avec les autorités préfectorales. Nos équipes et agents d’accueil sont à votre disposition pour vous orienter dans vos déplacements et vous accompagner."}</div>
            {/* <div className="content-3">
                <div style={{ display: 'flex' }}>
                    <InfoSVG fill="#A90000" width={100} height={100} style={{ marginRight: 20, position: 'relative', top: -15 }} />
                    <div>{"Nous vous remercions de respecter la distanciation physique en toute circonstance (y compris dans les files d’attente), les marquages au sol et à suivre les consignes de circulation données dans chaque lieu. Le port d’un masque couvrant le nez, la bouche et le menton est obligatoire pour toute personne de plus de 11 ans (à défaut l’accueil sera refusé). Nos espaces sont aérés et nettoyés régulièrement pour vous garantir un accueil optimal."}</div>
                </div>
                <div style={{display:'flex'}}>
                    <WarningSVG fill="#A90000" width={36} height={36} style={{ marginRight: 20,position:"relative",top:15 }} />
                    <div style={{ marginTop: 20 }}>{"Le pass sanitaire est obligatoire et devra être présenté à l’entrée avec une pièce d’identité valide (à défaut l’accueil sera refusé) ."}</div>
                </div>
            </div> */}
            <div className="titre-info-p">Restauration sur place</div>
            <div style={{fontFamily:"Roboto",fontSize:20,marginLeft:20}}>{"Un food Truck  ainsi qu'une buvette seront présents sur place."}</div>
            <div className="titre-info-p">Accès</div>
            <div className="content-5">
                <div>Salle Hervé Bazin,</div>
                <div>49140 Soucelles, Rives-du-Loir-en-Anjou</div>
                <div style={{ fontWeight: "bolder" }}>Parking gratuit sur place.</div>
                <div style={{marginTop:20}}>
                    <iframe class="maps-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9646.467973704264!2d-0.4250246963101618!3d47.57234685304493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48087134117ca223%3A0x44b1cf840441fe5b!2sCentre%20culturel%20Herv%C3%A9%20Bazin!5e1!3m2!1sen!2sfr!4v1637832250990!5m2!1sen!2sfr" width={"600"} height={"450"} style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>

        </div>
    )
}
export default InfosPratiques;