import React from "react";
import Option from "./Option";

export default function AgeSelect({ options }) {
  const optionArray = options.map((type, i) => {
    return <Option key={options[i]} value={options[i]} />;
  });

  return (
    <div className="select-container">
      <select className="select age-select">
        <option value="" selected>
          Select your age
        </option>
        {optionArray}
      </select>
    </div>
  );
}
