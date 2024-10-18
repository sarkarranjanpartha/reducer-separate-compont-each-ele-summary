import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/rootReducer";
import { setDiscountPercent } from "../slices/discountQuantitySlice";

const DiscountQuantity: React.FC = () => {
  const discountPercent = useSelector(
    (state: RootState) => state.discountQuantity.percent
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDiscountPercent(Number(e.target.value)));
  };

  return (
    <div>
      <h3>Discount Quantity</h3>
      <input
        type="number"
        value={discountPercent}
        onChange={handleChange}
        min="0"
        max="100"
      />
      %
    </div>
  );
};

export default DiscountQuantity;
