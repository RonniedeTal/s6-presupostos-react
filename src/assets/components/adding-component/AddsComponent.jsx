import React from "react";
import ShowUsers from "../showUsers/ShowUsers";
import UserForm from "../User-form/UserForm";

function AddsComponent(props) {
  return (
    <div>
      <div>
        <span>
          {" "}
          <input
            type="checkbox"
            checked={props.check}
            onChange={props.handleCheckOnchange}
            onClick={props.HandleShowing}
            value={props.id}
          />
          Add
        </span>
        {props.isAddContentShowing ? (
          <div className="container">
            <div className="counter-row">
              <span>Pages:</span>
              <div className="counter-controls">
                <button
                  className="counter-button"
                  onClick={props.handleDecrease}
                >
                  ➖
                </button>
                <span className="counter-value">{props.numPages}</span>
                <button
                  className="counter-button"
                  onClick={props.handleIncrease}
                >
                  ➕
                </button>
              </div>
            </div>

            <div className="counter-row">
              <span>Languages:</span>
              <div className="counter-controls">
                <button
                  className="counter-button"
                  onClick={props.handleLanguagesDecrease}
                >
                  ➖
                </button>
                <span className="counter-value">{props.numLanguages}</span>
                <button
                  className="counter-button"
                  onClick={props.handleLanguagesIncrease}
                >
                  ➕
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AddsComponent;
