import "./App.css";
import StepTwo from "./components/StepTwo";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [displayStepTwo, setDisplayStepTwo] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <main>
        {displayStepTwo ? (
          <StepTwo
            name={name}
            email={email}
            password={password}
            setDisplayStepTwo={setDisplayStepTwo}
          />
        ) : (
          <Form
            name={name}
            email={email}
            password={password}
            confirmpassword={confirmpassword}
            passwordsMatch={passwordsMatch}
            showPassword={showPassword}
            errorMessage={errorMessage}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            setDisplayStepTwo={setDisplayStepTwo}
            setPasswordsMatch={setPasswordsMatch}
            setShowPassword={setShowPassword}
            setErrorMessage={setErrorMessage}
          />
        )}
      </main>
    </>
  );
}

export default App;
