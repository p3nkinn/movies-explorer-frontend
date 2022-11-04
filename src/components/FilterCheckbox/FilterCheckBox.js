import React from "react";
import '../FilterCheckbox/FilterCheckBox.css';

const FilterCheckBox = ({onFilterChange}) => {
    return (
        <div className="filter__checkbox">
            <label className="filter__checkbox-label">
             <input onClick={onFilterChange} className="filter__checkbox-input" type="checkbox"></input>
             <span className="filter__checkbox-switch"></span>
             Короткометражки
             </label>
        </div>
    )
}

export default FilterCheckBox;