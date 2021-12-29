﻿import './style/program.css'

function Programme(props) {
     return (
          <div style={{ fontFamily: 'Roboto', backgroundColor: "#0A0E31", color: "white" }}>
               <div className="titre">{props.titre}</div>
               <div className="groupe">
                    <div className="moitie1">
                         <img src={props.infoGroupes["groupe1"]["image"]} />
                    </div>
                    <div className="moitie2">
                         <div className="nomGr">{"" + props.infoGroupes["groupe1"]["horaire"] + " - " + props.infoGroupes["groupe1"]["nom"]}</div>
                         {props.infoGroupes["groupe1"]["description"].map(text =>{
                              return(<div className="desc">{text}</div>)
                         })}
                    </div>
               </div>
               <div className="groupe">
                    <div className="moitie2">
                         <div className="nomGr">{"" + props.infoGroupes["groupe2"]["horaire"] + " - " + props.infoGroupes["groupe2"]["nom"]}</div>
                         {props.infoGroupes["groupe2"]["description"].map(text =>{
                              return(<div className="desc">{text}</div>)
                         })}
                    </div>
                    <div className="moitie1">
                         <img src={props.infoGroupes["groupe2"]["image"]} />
                    </div>
               </div>
               <div className="groupe">
                    <div className="moitie1">
                         <img src={props.infoGroupes["groupe3"]["image"]} />
                    </div>
                    <div className="moitie2">
                         <div className="nomGr">{"" + props.infoGroupes["groupe3"]["horaire"] + " - " + props.infoGroupes["groupe3"]["nom"]}</div>
                         {props.infoGroupes["groupe3"]["description"].map(text =>{
                              return(<div className="desc">{text}</div>)
                         })}
                    </div>
               </div>
          </div>
     )
}
export default Programme;