import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Form = ({
  name,
  email,
  password,
  confirmpassword,
  passwordsMatch,
  errorMessage,
  setDisplayStepTwo,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setPasswordsMatch,
  showPassword,
  setShowPassword,
  setErrorMessage,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !password || !confirmpassword) {
      alert("Merci de remplir tous les champs requis");
    } else if (password.length < 7) {
      setErrorMessage("Le mot est trop court");
    } else if (password !== confirmpassword) {
      setPasswordsMatch(false);
      setErrorMessage("Vos deux mots de passe ne sont pas identiques");
    } else {
      setDisplayStepTwo(true);
      setPasswordsMatch(true);
    }
  };

  return (
    <div className="form">
      <h1>Create account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Jean Dupont"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="jeandupont@lereacteur.io"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Password"
          value={password}
          className={!passwordsMatch ? "error-input" : null}
          onChange={(event) => {
            setPassword(event.target.value);
            setErrorMessage("");
          }}
        />
        <label htmlFor="confirmpassword">Confirm your password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm your password"
          value={confirmpassword}
          className={!passwordsMatch ? "error-input" : null}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
            setErrorMessage("");
          }}
        />
        <div
          className="eye"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          <i>{showPassword ? <FaEye /> : <FaEyeSlash />}</i>
        </div>
        <div className="button">
          <p> {errorMessage}</p>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
