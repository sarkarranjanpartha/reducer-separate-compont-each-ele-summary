import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/rootReducer";
import { setFreeQuantity } from "../slices/freeQuantitySlice";

const FreeQuantity: React.FC = () => {
  const freeQuantity = useSelector(
    (state: RootState) => state.freeQuantity.quantity
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFreeQuantity(Number(e.target.value)));
  };

  return (
    <div>
      <h3>Free Quantity</h3>
      <input
        type="number"
        value={freeQuantity}
        onChange={handleChange}
        min="0"
      />
    </div>
  );
};

export default FreeQuantity;
