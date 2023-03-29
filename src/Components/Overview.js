import React from "react";
import { useSelector } from "react-redux";

import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  const currentDisplay = useSelector(selectDisplay);
  //console.log(currentDisplay);
  const currKeys = Object.keys(currentDisplay.currencies);
  let currInd = 0;
  let timeInd = 0;

  return (
    <div className="stack">
      <h1>{currentDisplay.name.official}</h1>
      <h2>{currentDisplay.name.common}</h2>

      <table className="overview-table">
        <tr>
          <td>Capital :</td>
          <td>{currentDisplay.capital}</td>
        </tr>

        <tr>
          <td>Continents :</td>
          {currentDisplay.continents.map((e) => (
            <td>{e}</td>
          ))}
        </tr>

        <tr>
          <td>Currencies :</td>
          {currKeys.map((e) => {
            currInd++;
            if (currInd === currKeys.length) {
              return (
                <td key={`curr${e}`}>{currentDisplay.currencies[e].name}</td>
              );
            } else {
              return (
                <td key={`curr${e}`}>{currentDisplay.currencies[e].name} +</td>
              );
            }
          })}
        </tr>

        <tr>
          <td>Population :</td>
          <td>{currentDisplay.population}</td>
        </tr>

        <tr>
          <td>Languages :</td>
          {Object.keys(currentDisplay.languages).map((e) => (
            <td key={`lang${e}`}>{currentDisplay.languages[e]}</td>
          ))}
        </tr>

        <tr>
          <td>Independent :</td>
          <td>{currentDisplay.independent ? "true" : "false"}</td>
        </tr>

        <tr>
          <td>Landlocked :</td>
          <td>{currentDisplay.landlocked ? "true" : "false"}</td>
        </tr>

        <tr>
          <td>Member of the UN : </td>
          <td>{currentDisplay.unMember ? "true" : "false"}</td>
        </tr>
      </table>

      <table>
        <tr>
          <th>Time Zones: </th>
          {currentDisplay.timezones.map((e) => {
            timeInd++;
            if (timeInd === currentDisplay.timezones.length) {
              return <td key={`time${timeInd}`}> {e} </td>;
            } else {
              return <td key={`time${timeInd}`}> {e} ||</td>;
            }
          })}
        </tr>
      </table>
    </div>
  );
};

export default Overview;

//Official Name // name.official
//Common Name // name.common
//Capital // capital
//Continent // continents[]
//Currencies // currencies{name}
//population // population
//languages // languages{}
