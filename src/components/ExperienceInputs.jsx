import { useState } from "react";
import { useCvDispatch, useCvStateContext } from "../contexts/CvContext";

function ExperienceInputs() {
  const [editMode, setEditMode] = useState(true);

  const {
    company,
    position,
    responsibility,
    previousWorkStartDate,
    previousWorkEndDate,
  } = useCvStateContext().practicalInfo;
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
      formComponent: "practicalInfo",
      name: name,
      value: value,
    });
  }

  return (
    <>
      <div className="flex flex--between form-item">
        <label htmlFor="company-name">Company name</label>
        {editMode ? (
          <input
            onChange={(e) => {
              handleUpdateInputs("company", e.target.value);
            }}
            value={company}
            type="text"
            id="company-name"
          />
        ) : (
          <div>{company}</div>
        )}
      </div>
      <div className="flex flex--between form-item">
        <label htmlFor="position-title">Position title</label>
        {editMode ? (
          <input
            value={position}
            onChange={(e) => {
              handleUpdateInputs("position", e.target.value);
            }}
            type="text"
            id="position-title"
          />
        ) : (
          <div>{position}</div>
        )}
      </div>
      <div className="flex flex--between form-item">
        <label htmlFor="job-responsibilities">
          Describe the main responsibilities of your job
        </label>
        {editMode ? (
          <textarea
            value={responsibility}
            onChange={(e) => {
              handleUpdateInputs("responsibility", e.target.value);
            }}
            type="text"
            id="job-responsibilities"
          />
        ) : (
          <div>{responsibility}</div>
        )}
      </div>
      <div className="flex flex--between form-item">
        <div className="previous-start">
          <label htmlFor="work-date">Start date</label>
          {editMode ? (
            <input
              onChange={(e) =>
                handleUpdateInputs("previousWorkStartDate", e.target.value)
              }
              type="date"
              id="work-date"
              value={previousWorkStartDate}
            />
          ) : (
            <div>{previousWorkStartDate}</div>
          )}
        </div>
        <div className="previous-end">
          <label htmlFor="work-date">End date</label>
          {editMode ? (
            <input
              onChange={(e) =>
                handleUpdateInputs("previousWorkEndDate", e.target.value)
              }
              type="date"
              id="work-date"
              value={previousWorkEndDate}
            />
          ) : (
            <div>{previousWorkEndDate}</div>
          )}
        </div>
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={toggleEdit}>Edit</button>
    </>
  );
}

export default ExperienceInputs;
