import React from "react";
import DiscountQuantity from "./DiscountQuantity";
import FreeQuantity from "./FreeQuantity";
import ShippingCharges from "./ShippingCharges";
import HandlingCharges from "./HandlingCharges";
import Mainline from "./Mainline";
import Upsell from "./Upsell";
import AccessoryCharges from "./AccessoryCharges";
import ExtraCharges from "./ExtraCharges";
import PerUnitExtraCharges from "./PerUnitExtraCharges";
import Summary from "./Summary";

const ProductConfiguration: React.FC = () => {
  return (
    <div>
      <h2>Product Configuration</h2>
      <DiscountQuantity />
      <FreeQuantity />
      <ShippingCharges />
      <HandlingCharges />
      <Mainline />
      <Upsell />
      <AccessoryCharges />
      <ExtraCharges />
      <PerUnitExtraCharges />
      <Summary />
    </div>
  );
};

export default ProductConfiguration;
