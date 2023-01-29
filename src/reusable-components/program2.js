import React, { useState, useEffect } from "react";
import "./style/program.css";

const Programme = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
  if (width < 900) {
    return (
      <div
        style={{
          fontFamily: "Roboto",
          color: "white",
          background: "linear-gradient(#E35944, #F19135)",
        }}
      >
        <div className="titre">{props.titre}</div>
        <div className="artiste">
          <div className="nomGr">
            {"" +
              props.infoGroupes["groupe1"]["horaire"] +
              " - " +
              props.infoGroupes["groupe1"]["nom"]}
          </div>
          <img src={props.infoGroupes["groupe1"]["image"]} className="image" />
          <div>
            {props.infoGroupes["groupe1"]["description"].map((text) => {
              return <div className="desc">{text}</div>;
            })}
            <div className="desc">
              Retrouvez-les sur :{" "}
              <a
                href={props.infoGroupes["groupe1"]["website"]}
                style={{ color: "white", textDecoration: "none" }}
              >
                {props.infoGroupes["groupe1"]["website"]}
              </a>
            </div>
          </div>
        </div>
        <div className="artiste">
          <div className="nomGr">
            {"" +
              props.infoGroupes["groupe2"]["horaire"] +
              " - " +
              props.infoGroupes["groupe2"]["nom"]}
          </div>
          <img src={props.infoGroupes["groupe2"]["image"]} className="image" />
          <div>
            {props.infoGroupes["groupe2"]["description"].map((text) => {
              return <div className="desc">{text}</div>;
            })}
            <div className="desc">
              Retrouvez-les sur :{" "}
              <a
                href={props.infoGroupes["groupe2"]["website"]}
                style={{ color: "white", textDecoration: "none" }}
              >
                {props.infoGroupes["groupe2"]["website"]}
              </a>
            </div>
          </div>
        </div>
        {props.infoGroupes["groupe3"] && (
          <div className="artiste">
            <div className="nomGr">
              {"" +
                props.infoGroupes["groupe3"]["horaire"] +
                " - " +
                props.infoGroupes["groupe3"]["nom"]}
            </div>
            <img
              src={props.infoGroupes["groupe3"]["image"]}
              className="image"
            />
            <div>
              {props.infoGroupes["groupe3"]["description"].map((text) => {
                return <div className="desc">{text}</div>;
              })}
              <div className="desc">
                Retrouvez-les sur :{" "}
                <a
                  href={props.infoGroupes["groupe3"]["website"]}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {props.infoGroupes["groupe3"]["website"]}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <div
      style={{
        fontFamily: "Roboto",
        color: "white",
        background: "linear-gradient(#E35944, #F19135)",
      }}
    >
      <div className="titre">{props.titre}</div>
      <div className="artiste">
        <div style={{ height: "100%" }}>
          <img src={props.infoGroupes["groupe1"]["image"]} className="image" />
        </div>
        <div>
          <div className="nomGr">
            {"" +
              props.infoGroupes["groupe1"]["horaire"] +
              " - " +
              props.infoGroupes["groupe1"]["nom"]}
          </div>
          {props.infoGroupes["groupe1"]["description"].map((text) => {
            return <div className="desc">{text}</div>;
          })}
          <div className="desc">
            Retrouvez-les sur :{" "}
            <a
              href={props.infoGroupes["groupe1"]["website"]}
              style={{ color: "white", textDecoration: "none" }}
            >
              {props.infoGroupes["groupe1"]["website"]}
            </a>
          </div>
        </div>
      </div>
      <div className="artiste">
        <div style={{ color: "white" }}>
          <div className="nomGr">
            {"" +
              props.infoGroupes["groupe2"]["horaire"] +
              " - " +
              props.infoGroupes["groupe2"]["nom"]}
          </div>
          {props.infoGroupes["groupe2"]["description"].map((text) => {
            return <div className="desc">{text}</div>;
          })}
          <div className="desc">
            Retrouvez-les sur :{" "}
            <a
              href={props.infoGroupes["groupe2"]["website"]}
              style={{ color: "white", textDecoration: "none" }}
            >
              {props.infoGroupes["groupe2"]["website"]}
            </a>
          </div>
        </div>
        <div style={{ height: "100%" }}>
          <img src={props.infoGroupes["groupe2"]["image"]} className="image" />
        </div>
      </div>
      {props.infoGroupes["groupe3"] && (
        <div className="artiste">
          <div style={{ height: "100%" }}>
            <img
              src={props.infoGroupes["groupe3"]["image"]}
              className="image"
            />
          </div>
          <div>
            <div className="nomGr">
              {"" +
                props.infoGroupes["groupe3"]["horaire"] +
                " - " +
                props.infoGroupes["groupe3"]["nom"]}
            </div>
            {props.infoGroupes["groupe3"]["description"].map((text) => {
              return <div className="desc">{text}</div>;
            })}
            <div className="desc">
              Retrouvez-les sur :{" "}
              <a
                href={props.infoGroupes["groupe3"]["website"]}
                style={{ color: "white", textDecoration: "none" }}
              >
                {props.infoGroupes["groupe3"]["website"]}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Programme;
