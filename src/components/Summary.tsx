import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../types/rootReducer";

const Summary: React.FC = () => {
  const state = useSelector((state: RootState) => state);

  // This is a simplified calculation. You'll need to implement the actual logic
  // based on your specific pricing rules and how each option affects the total cost.
  const calculateTotalCost = () => {
    let total = 100; // Assume base price is 100

    // Apply discount
    total *= 1 - state.discountQuantity.percent / 100;

    // Add shipping and handling charges
    total += state.shippingCharges.amount + state.handlingCharges.amount;

    // Add costs for selected options (this is just an example, adjust as needed)
    if (state.mainline.selectedOption === "option2") total += 50;
    if (state.upsell.selectedOption === "upsell2") total += 30;
    state.accessoryCharges.selectedOptions.forEach(() => (total += 10));
    state.extraCharges.selectedOptions.forEach(() => (total += 15));
    state.perUnitExtraCharges.selectedOptions.forEach(() => (total += 5));

    return total.toFixed(2);
  };

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Total Cost: ${calculateTotalCost()}</p>
      {/* You can add more detailed breakdown here if needed */}
    </div>
  );
};

export default Summary;
