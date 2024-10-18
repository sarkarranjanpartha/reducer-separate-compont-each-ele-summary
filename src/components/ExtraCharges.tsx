import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/rootReducer";
import { toggleExtraCharge } from "../slices/extraChargesSlice";

const ExtraCharges: React.FC = () => {
  const selectedOptions = useSelector(
    (state: RootState) => state.extraCharges.selectedOptions
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleExtraCharge(e.target.value));
  };

  return (
    <div>
      <h3>Extra Charges</h3>
      <label>
        <input
          type="checkbox"
          value="extra1"
          checked={selectedOptions.includes("extra1")}
          onChange={handleChange}
        />
        Extra Charge 1
      </label>
      <label>
        <input
          type="checkbox"
          value="extra2"
          checked={selectedOptions.includes("extra2")}
          onChange={handleChange}
        />
        Extra Charge 2
      </label>
      <label>
        <input
          type="checkbox"
          value="extra3"
          checked={selectedOptions.includes("extra3")}
          onChange={handleChange}
        />
        Extra Charge 3
      </label>
    </div>
  );
};

export default ExtraCharges;
