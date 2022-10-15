import React from "react";
import '../FilterCheckbox/FilterCheckBox.css';

function FilterCheckBox() {
    return (
        <div className="filter__checkbox">
            <label className="filter__checkbox-label">
             <input className="filter__checkbox-input" type="checkbox"></input>
             <span className="filter__checkbox-switch"></span>
             Короткометражки
             </label>
        </div>
    )
}

export default FilterCheckBox;