import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/rootReducer";
import { toggleAccessoryCharge } from "../slices/accessoryChargesSlice";

const AccessoryCharges: React.FC = () => {
  const selectedOptions = useSelector(
    (state: RootState) => state.accessoryCharges.selectedOptions
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleAccessoryCharge(e.target.value));
  };

  return (
    <div>
      <h3>Accessory Charges</h3>
      <label>
        <input
          type="checkbox"
          value="accessory1"
          checked={selectedOptions.includes("accessory1")}
          onChange={handleChange}
        />
        Accessory 1
      </label>
      <label>
        <input
          type="checkbox"
          value="accessory2"
          checked={selectedOptions.includes("accessory2")}
          onChange={handleChange}
        />
        Accessory 2
      </label>
      <label>
        <input
          type="checkbox"
          value="accessory3"
          checked={selectedOptions.includes("accessory3")}
          onChange={handleChange}
        />
        Accessory 3
      </label>
    </div>
  );
};

export default AccessoryCharges;
