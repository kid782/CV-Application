import { useState } from "react";
import { useCvStateContext, useCvDispatch } from "../contexts/CvContext";

function EducationInputs() {
  const [editMode, setEditMode] = useState(true);
  const { university, major, dateOfStudy } = useCvStateContext().educationInfo;
  const dispatch = useCvDispatch();
  function handleSave() {
    toggleEdit();
  }

  function toggleEdit() {
    setEditMode(!editMode);
  }

  function handleUpdateInputs(name, value) {
    dispatch({
      type: "formTyping",
      formComponent: "educationInfo",
      name: name,
      value: value,
    });
  }

  return (
    <>
      <div className="flex flex--between form-item">
        <label htmlFor="university">University</label>
        {editMode ? (
          <input
            value={university}
            onChange={(e) => {
              handleUpdateInputs("university", e.target.value);
            }}
            id="university"
            type="text"
          />
        ) : (
          <div>{university}</div>
        )}
      </div>
      <div className="flex flex--between form-item">
        <label htmlFor="major">Major</label>
        {editMode ? (
          <input
            value={major}
            onChange={(e) => {
              handleUpdateInputs("major", e.target.value);
            }}
            id="major"
            type="text"
          />
        ) : (
          <div>{major}</div>
        )}
      </div>
      <div className="flex flex--between form-item">
        <label htmlFor="study-date">Date of study</label>
        {editMode ? (
          <input
            value={dateOfStudy}
            onChange={(e) => {
              handleUpdateInputs("dateOfStudy", e.target.value);
            }}
            id="study-date"
            type="date"
          />
        ) : (
          <div>{dateOfStudy}</div>
        )}
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={toggleEdit}>Edit</button>
    </>
  );
}

export default EducationInputs;
