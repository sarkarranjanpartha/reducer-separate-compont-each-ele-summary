import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/rootReducer";
import { togglePerUnitExtraCharge } from "../slices/perUnitExtraChargesSlice";

const PerUnitExtraCharges: React.FC = () => {
  const selectedOptions = useSelector(
    (state: RootState) => state.perUnitExtraCharges.selectedOptions
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(togglePerUnitExtraCharge(e.target.value));
  };

  return (
    <div>
      <h3>Per Unit Extra Charges</h3>
      <label>
        <input
          type="checkbox"
          value="perUnit1"
          checked={selectedOptions.includes("perUnit1")}
          onChange={handleChange}
        />
        Per Unit Extra 1
      </label>
      <label>
        <input
          type="checkbox"
          value="perUnit2"
          checked={selectedOptions.includes("perUnit2")}
          onChange={handleChange}
        />
        Per Unit Extra 2
      </label>
      <label>
        <input
          type="checkbox"
          value="perUnit3"
          checked={selectedOptions.includes("perUnit3")}
          onChange={handleChange}
        />
        Per Unit Extra 3
      </label>
    </div>
  );
};

export default PerUnitExtraCharges;
