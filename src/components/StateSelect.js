import React from "react";
import Option from "./Option";

export default function StateSelect({ options }) {
  const optionArray = options.map((type, i) => {
    return <Option key={options[i]} value={options[i]} />;
  });

  return (
    <div className="select-container">
      <select className="select">
        <option value="" selected>
          Select your state
        </option>
        {optionArray}
      </select>
    </div>
  );
}
