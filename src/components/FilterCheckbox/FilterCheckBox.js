import React from "react";
import "../FilterCheckbox/FilterCheckBox.css";

const FilterCheckBox = ({ handleFilterChange, filterIsOn }) => {
  return (
    <div className="filter__checkbox">
      <label className="filter__checkbox-label">
        <input
          onChange={handleFilterChange}
          className="filter__checkbox-input"
          type="checkbox"
          checked={filterIsOn}
        ></input>
        <span className="filter__checkbox-switch"></span>
        Короткометражки
      </label>
    </div>
  );
};

export default FilterCheckBox;
