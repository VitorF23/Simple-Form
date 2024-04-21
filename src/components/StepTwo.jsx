const StepTwo = ({ name, email, password, setDisplayStepTwo }) => {
  return (
    <div className="steptwo-div">
      <h1>Results</h1>
      <div className="steptwo-div2">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
      <div className="steptwo-button">
        <button
          onClick={() => {
            setDisplayStepTwo(false);
          }}
        >
          Edit your information
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
