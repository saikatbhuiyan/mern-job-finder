import { useState } from "react";
import {
  FormRow,
  FormRowSelect,
  FormRowTextArea,
  Alert,
} from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobDescription,
    jobType,
    jobTypeOptions,
    handleChange,
    createJob,
    editJob,
    clearValues,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation || !jobDescription) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Wrapper className="full-page">
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        {showAlert && <Alert />}
        {/* <div className="form-center"> */}
        {/* position */}
        <FormRow
          type="text"
          name="position"
          value={position}
          handleChange={handleJobInput}
        />
        {/* jobLocation */}
        <FormRow
          type="text"
          name="jobLocation"
          value={jobLocation}
          handleChange={handleJobInput}
        />
        {/* company */}
        <FormRow
          type="text"
          name="company"
          value={company}
          handleChange={handleJobInput}
        />
        {/* job type */}
        <FormRowSelect
          name="jobType"
          labelText="job type"
          value={jobType}
          handleChange={handleJobInput}
          list={jobTypeOptions}
        />
        {/* jobDescription */}
        <FormRowTextArea
          labelText="Description"
          name="jobDescription"
          value={jobDescription}
          handleChange={handleJobInput}
        />
        {/* btn container */}
        <div className="btn-container">
          <button
            type="submit"
            className="btn btn-block submit-btn"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            submit
          </button>
          <button
            className="btn btn-block clear-btn"
            onClick={(e) => {
              e.preventDefault();
              clearValues();
            }}
          >
            clear
          </button>
        </div>
        {/* </div> */}
      </form>
    </Wrapper>
  );
};

export default AddJob;
