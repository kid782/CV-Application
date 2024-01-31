import { useState } from "react";
import { useCvDispatch, useCvStateContext } from "../contexts/CvContext";

function GenInfoInputs() {
  const [editMode, setEditMode] = useState(true);
  const dispatch = useCvDispatch();
  const state = useCvStateContext().generalInfo;
  const { name, email, phoneNumber } = state;
  function HandleSave() {
    toggleEdit();
  }

  function handleUpdateInputs(name, value) {
    dispatch({
      type: "formTyping",
      formComponent: "generalInfo",
      name: name,
      value: value,
    });
  }

  function toggleEdit() {
    setEditMode(!editMode);
  }

  return (
    <>
      <div className="flex flex--between form-item">
        <label htmlFor="name">Name</label>
        {editMode ? (
          <input
            value={name}
            onChange={(e) => {
              handleUpdateInputs("name", e.target.value);
            }}
            id="name"
            type="text"
          />
        ) : (
          <div>{name}</div>
        )}
      </div>
      <div className="flex flex--between form-item">
        <label htmlFor="email">Email</label>
        {editMode ? (
          <input
            value={email}
            onChange={(e) => {
              handleUpdateInputs("email", e.target.value);
            }}
            id="email"
            type="email"
          />
        ) : (
          <div>{email}</div>
        )}
      </div>
      <div className="flex flex--between form-item">
        <label htmlFor="phone">Phone number</label>
        {editMode ? (
          <input
            onChange={(e) => {
              handleUpdateInputs("phoneNumber", e.target.value);
            }}
            value={phoneNumber}
            id="phone"
            type="number"
          />
        ) : (
          <div>{phoneNumber}</div>
        )}
      </div>
      <button type="button" onClick={HandleSave}>
        Save
      </button>
      <button onClick={toggleEdit}>Edit</button>
    </>
  );
}

export default GenInfoInputs;
