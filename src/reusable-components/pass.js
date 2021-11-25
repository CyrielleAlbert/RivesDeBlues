import "./style/pass.css"
function Pass(props) {
    console.log(props.reduction)
    return(
        <div className="pass">
            <div className="intitule">{props.label}</div>
            <div className="content-6">
                <div className="prix">{props.prix} 
                {props.reduction !== undefined && <div className="reduc">{props.reduction}</div>}
                </div>
                <div className="CTA-3">Acheter</div> 
            </div> 
        </div>
    )
}
export default Pass;