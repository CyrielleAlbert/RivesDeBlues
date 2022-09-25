import './style/Header.css'
function Header(props){
    return(
        <div className="main" >
            <div className="date">12 et 13 mai 2023</div>
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