import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbol = () => {
  const currentDisplay = useSelector(selectDisplay);
  console.log(currentDisplay);

  return (
    <div className="symbols">
      <div className="stack">
        <img src={currentDisplay.flags.png} />
      </div>
      <div className="stack">
        <img src={currentDisplay.coatOfArms.png} />
      </div>
    </div>
  );
};

export default Symbol;

//.flags.png
