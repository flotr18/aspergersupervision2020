import "./css/style_partners.css";
import React from "react";
import block1 from "./css/img/ASA.png";
import block2 from "./css/img/Skid.png";

function Julien_part_4() {
  return (
    <div>
      <p className="ourPartners">Our Partners</p>
      <p className="Paragraph">
          We would like to express a special thanks to Autism Society and Aspire
          who accompanied us in this project and provided us all what we needed
          to reach the finality of this serious game.
        </p>
      <div className="container">
        <div className="row">
          <img className="col-6 foo" src={block1}></img>
          <img className="col-6 foo" src={block2}></img>
        </div>
      </div>
    </div>
  );
}

export default Julien_part_4;
