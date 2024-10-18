import { combineReducers } from "@reduxjs/toolkit";
import discountQuantityReducer from "../slices/discountQuantitySlice";
import freeQuantityReducer from "../slices/freeQuantitySlice";
import shippingChargesReducer from "../slices/shippingChargesSlice";
import handlingChargesReducer from "../slices/handlingChargesSlice";
import mainlineReducer from "../slices/mainlineSlice";
import upsellReducer from "../slices/upsellSlice";
import accessoryChargesReducer from "../slices/accessoryChargesSlice";
import extraChargesReducer from "../slices/extraChargesSlice";
import perUnitExtraChargesReducer from "../slices/perUnitExtraChargesSlice";

const rootReducer = combineReducers({
  discountQuantity: discountQuantityReducer,
  freeQuantity: freeQuantityReducer,
  shippingCharges: shippingChargesReducer,
  handlingCharges: handlingChargesReducer,
  mainline: mainlineReducer,
  upsell: upsellReducer,
  accessoryCharges: accessoryChargesReducer,
  extraCharges: extraChargesReducer,
  perUnitExtraCharges: perUnitExtraChargesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
