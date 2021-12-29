import "./style/pass.css"
import { ReactComponent as BilletSVG } from './../Icons/coupon.svg'

function Pass(props) {
    console.log(props.reduction)
    return (
        <div className="pass">
            <div className="intitule">{props.label}</div>
            <div className="content-6">
                <div className="prix">{props.prix}
                    {props.reduction !== undefined && <div className="reduc">{props.reduction}</div>}
                </div>
                <div className="CTA-3" >
                    <a href={props.lien} style={{textDecoration:"none",color:"white"}}>
                        <BilletSVG fill="#FFF" width={20} height={20} style={{ marginRight: 10, position: "relative", top: 4 }} />
                        Acheter
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Pass;