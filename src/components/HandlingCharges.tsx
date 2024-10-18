import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/rootReducer";
import { setHandlingCharges } from "../slices/handlingChargesSlice";

const HandlingCharges: React.FC = () => {
  const handlingCharges = useSelector(
    (state: RootState) => state.handlingCharges.amount
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setHandlingCharges(Number(e.target.value)));
  };

  return (
    <div>
      <h3>Handling Charges</h3>
      <input
        type="number"
        value={handlingCharges}
        onChange={handleChange}
        min="0"
        step="0.01"
      />
    </div>
  );
};

export default HandlingCharges;
