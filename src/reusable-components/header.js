import './style/Header.css'
//TODO Ajouter les redirections de Programme et Tickets 
function Header(props){
    return(
        <div className="main" >
            <div className="date">20 et 21 mai 2022</div>
            <div className="logo"> 
                <img src='/Images/Logo.svg' width="100%"/>
            </div>
            <div className="programme" onClick={()=>{props.buttonCallback("prog")}}>Programme</div>
            <div className="tickets" onClick={()=>{props.buttonCallback("ticket")}}>
                <div className="CTA">
                        Tickets
                </div>
            </div>
        </div>
    )
}
export default Header;