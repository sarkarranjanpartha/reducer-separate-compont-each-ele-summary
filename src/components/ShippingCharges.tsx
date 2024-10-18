import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/rootReducer";
import { setShippingCharges } from "../slices/shippingChargesSlice";

const ShippingCharges: React.FC = () => {
  const shippingCharges = useSelector(
    (state: RootState) => state.shippingCharges.amount
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setShippingCharges(Number(e.target.value)));
  };

  return (
    <div>
      <h3>Shipping Charges</h3>
      <input
        type="number"
        value={shippingCharges}
        onChange={handleChange}
        min="0"
        step="0.01"
      />
    </div>
  );
};

export default ShippingCharges;
