import React from "react";
import "./BeachCard.css";
import { FaChevronRight } from "react-icons/fa";
import {
  sol,
  swellDuration,
  swellHeight,
  wind,
  location,
  lifeguard,
  equipment,
  firstAid,
  parking,
  freeParking,
  restaurants,
  showers,
  transportation,
  wc,
  accessibility,
} from "../../media/exportMedia.jsx";

const gradient =
  "linear-gradient(360deg, rgba(57, 73, 87, 0.9) 0%, rgba(255, 255, 255, 0) 100%)";

function BeachCard(props) {
  const { element, index } = props;

  const firstDay = element.filter((el, index) => index < 24);
  const secondDay = element.filter((el, index) => index > 23 && index < 48);
  const thirdDay = element.filter((el, index) => index > 47 && index < 72);
  const fourthDay = element.filter((el, index) => index > 71 && index < 96);
  const fifthDay = element.filter((el, index) => index > 95);

  console.log(firstDay);
  console.log(secondDay);
  console.log(thirdDay);
  console.log(fourthDay);
  console.log(element);

  let convertedWindDirection = "";
  const resolveWindDirection = () => {
    if (firstDay[0].windDirection.sg <= 22.5) {
      convertedWindDirection = "N";
    } else if (
      element[0].windDirection.sg > 22.5 &&
      element[0].windDirection.sg <= 67.5
    ) {
      convertedWindDirection = "NE";
    } else if (
      element[0].windDirection.sg > 67.5 &&
      element[0].windDirection.sg <= 112.5
    ) {
      convertedWindDirection = "E";
    } else if (
      element[0].windDirection.sg > 112.5 &&
      element[0].windDirection.sg <= 157.5
    ) {
      convertedWindDirection = "SE";
    } else if (
      element[0].windDirection.sg > 157.5 &&
      element[0].windDirection.sg <= 202.5
    ) {
      convertedWindDirection = "S";
    } else if (
      element[0].windDirection.sg > 202.5 &&
      element[0].windDirection.sg <= 247.5
    ) {
      convertedWindDirection = "SW";
    } else if (
      element[0].windDirection.sg > 247.5 &&
      element[0].windDirection.sg <= 292.5
    ) {
      convertedWindDirection = "W";
    } else if (
      element[0].windDirection.sg > 292.5 &&
      element[0].windDirection.sg <= 337.5
    ) {
      return (convertedWindDirection = "NW");
    } else if (
      element[0].windDirection.sg > 337.5 &&
      element[0].windDirection.sg <= 360
    ) {
      convertedWindDirection = "N";
    } else {
    }
  };
  resolveWindDirection();

  return (
    element && (
      <>
        <div className="beach-card">
          <div
            className="beach-card-row-1"
            style={{ backgroundImage: `url(${element.img}), ${gradient} ` }}
          >
            {console.log(element)}
            <h2>{element.name}</h2>

            <div>
              <img src={location} alt="" />
              <p>{element.county}</p>
            </div>
          </div>
          <div className="beach-card-row-2">
            <div className="beach-card-row-2-row-1">
              <div>
                <img src={sol} alt="" />
                <p>{parseInt(element[0].airTemperature.sg)}º</p>
              </div>
              <div>
                <img src={swellDuration} alt="" />
                <p>{element[0].wavePeriod.noaa}s</p>
              </div>
              <div>
                <img src={swellHeight} alt="" />
                <p>{element[0].waveHeight.sg}m</p>
              </div>
              <div>
                <img src={wind} alt="" />
                <p>
                  {element[0].windSpeed.sg}kts {convertedWindDirection}
                </p>
              </div>
            </div>
            <div className="beach-card-row-2-row-2">
              <img
                className={
                  element.services.includes("lifeguard")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={lifeguard}
                alt="lifeguard"
              />
              <img
                className={
                  element.services.includes("equipment")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={equipment}
                alt="equipment"
              />
              <img
                className={
                  element.services.includes("restaurants")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={restaurants}
                alt=""
              />
              <img
                className={
                  element.services.includes("showers")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={showers}
                alt=""
              />
              <img
                className={
                  element.services.includes("accessibility")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={accessibility}
                alt=""
              />
              <img
                className={
                  element.services.includes("transportation")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={transportation}
                alt=""
              />
              <img
                className={
                  element.services.includes("parking")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={parking}
                alt=""
              />
              <img
                className={
                  element.services.includes("freeParking")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={freeParking}
                alt=""
              />
              <img
                className={
                  element.services.includes("wc")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={wc}
                alt=""
              />
              <img
                className={
                  element.services.includes("firstAid")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={firstAid}
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default BeachCard;
