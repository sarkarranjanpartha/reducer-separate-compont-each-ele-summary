import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/rootReducer";
import { setUpsellOption } from "../slices/upsellSlice";

const Upsell: React.FC = () => {
  const selectedOption = useSelector(
    (state: RootState) => state.upsell.selectedOption
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUpsellOption(e.target.value));
  };

  return (
    <div>
      <h3>Upsell</h3>
      <label>
        <input
          type="radio"
          value="upsell1"
          checked={selectedOption === "upsell1"}
          onChange={handleChange}
        />
        Upsell 1
      </label>
      <label>
        <input
          type="radio"
          value="upsell2"
          checked={selectedOption === "upsell2"}
          onChange={handleChange}
        />
        Upsell 2
      </label>
    </div>
  );
};

export default Upsell;
