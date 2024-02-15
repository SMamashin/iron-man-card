import React from "react";
import cardData from "../Data.json"
import "../assets/styles/card.css";

export const CardID = () => {
    const data = cardData[0];
    return (
        <>
          <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet" />
          <div className="id-card-wrapper">
            <div className="id-card">
              <div className="profile-row">
                <div className="dp">
                  <div className="dp-arc-outer"></div>
                  <div className="dp-arc-inner"></div>
                  <img src={data.avatar} />
                </div>
                <div className="desc">
                  <h1>{data.fullname}</h1>
                    <p>Subnames: {data.subname}</p>
                    <p>Activity: {data.activity}</p>
                    <p>Weakness: {data.weakness}</p>
                    <p>Site: <a href={data.website}>mamashin.site</a></p>
                    <p>Contact: <a href={data.contact}>t.me</a></p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
      
}
