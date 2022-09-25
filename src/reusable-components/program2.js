import './style/program.css'

function Programme(props) {
     return (
          <div style={{ fontFamily: 'Roboto', color: "white", background: "linear-gradient(#E35944, #F19135)" }}>
               <div className="titre">{props.titre}</div>
               <div style={{display:"flex", height:400, width:"100%"}}>
                    <div >
                         <img src={props.infoGroupes["groupe1"]["image"]} style={{maxHeight:"100%",width:"auto"}} />
                    </div>
                    <div style={{color:'white'}}>
                         <div className="nomGr">{"" + props.infoGroupes["groupe1"]["horaire"] + " - " + props.infoGroupes["groupe1"]["nom"]}</div>
                         {props.infoGroupes["groupe1"]["description"].map(text =>{
                              return(<div className="desc">{text}</div>)
                         })}
                         <div className="desc">Retrouvez-les sur : <a href={props.infoGroupes["groupe1"]["website"]} style={{color:"white",textDecoration:"none"}}>{props.infoGroupes["groupe1"]["website"]}</a></div>
                    </div>
               </div>
               <div style={{display:"flex", height:400, width:"100%"}}>
                    <div style={{color:'white'}}>
                         <div className="nomGr">{"" + props.infoGroupes["groupe2"]["horaire"] + " - " + props.infoGroupes["groupe2"]["nom"]}</div>
                         {props.infoGroupes["groupe2"]["description"].map(text =>{
                              return(<div className="desc">{text}</div>)
                         })}
                         <div className="desc">Retrouvez-les sur : <a href={props.infoGroupes["groupe2"]["website"]} style={{color:"white",textDecoration:"none"}}>{props.infoGroupes["groupe2"]["website"]}</a></div>
                    </div>
                    <div>
                         <img src={props.infoGroupes["groupe2"]["image"]} style={{maxHeight:"100%",width:"auto"}} />
                    </div>
               </div>
               {props.infoGroupes["groupe3"] &&
                <div style={{display:"flex", height:400, width:"100%"}}>
                    <div>
                         <img src={props.infoGroupes["groupe3"]["image"]} style={{maxHeight:"100%",width:"auto"}} />
                    </div>
                    <div>
                         <div className="nomGr">{"" + props.infoGroupes["groupe3"]["horaire"] + " - " + props.infoGroupes["groupe3"]["nom"]}</div>
                         {props.infoGroupes["groupe3"]["description"].map(text =>{
                              return(<div className="desc">{text}</div>)
                         })}
                         <div className="desc">Retrouvez-les sur : <a href={props.infoGroupes["groupe3"]["website"]} style={{color:"white",textDecoration:"none"}}>{props.infoGroupes["groupe3"]["website"]}</a></div>
                    </div>
               </div>}
          </div>
     )
}
export default Programme;