import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/rootReducer";
import { setMainlineOption } from "../slices/mainlineSlice";

const Mainline: React.FC = () => {
  const selectedOption = useSelector(
    (state: RootState) => state.mainline.selectedOption
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMainlineOption(e.target.value));
  };

  return (
    <div>
      <h3>Mainline</h3>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleChange}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleChange}
        />
        Option 2
      </label>
    </div>
  );
};

export default Mainline;
