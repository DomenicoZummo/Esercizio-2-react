import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    if (enteredValue.trim().length !== 0) {
      event.preventDefault();
      props.onAddGoal(enteredValue);
      setEnteredValue("");
    } else {
      setIsValid(false);
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label className={!isValid ? "not-valid" : "valid"}>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          className={!isValid ? "not-valid" : "valid"}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
