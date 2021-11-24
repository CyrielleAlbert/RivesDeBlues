import './style/Header.css'

function Header(){
    return(
        <div className="main" >
            <div className="date">20 et 21 mai 2022</div>
            <div className="logo"> 
                <img src='/Images/LOGO.png' width="75%"/>
            </div>
            <div className="programme">Programme</div>
            <div className="tickets">
                <div className="CTA">
                        Tickets
                </div>
            </div>
        </div>
    )
}
export default Header;