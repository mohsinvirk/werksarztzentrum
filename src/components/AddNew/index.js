import React from "react";

function AddNew({ onChange, onClick, value }) {
  return (
    <div>
      <input
        className="node-input"
        name="child"
        onChange={onChange}
        value={value}
      />

      <button className="add-button" onClick={onClick}>
        Add New
      </button>
    </div>
  );
}

export default AddNew;
