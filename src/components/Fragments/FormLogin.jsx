import { login } from "../../services/auth.service";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useEffect, useRef } from "react";

const FormLogin = () => {

  const handleLogin = (event) => {
    event.preventDefault();

    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    // console.log("login");
    // window.location.href = "/products";

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data);
  }

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

    return (
        <form onSubmit={handleLogin}>
        <div className="mb-6">
          <InputForm 
            label="Username"
            name="username"
            type="username"
            placeholder="username01"
            ref={usernameRef}
          />

          <InputForm 
            label="Password"
            name="password"
            type="password"
            placeholder="*****"
          />
        </div>

        <Button classname="w-full bg-blue-500" type="submit">
          Login
        </Button>
        
      </form>
    );
}

export default FormLogin;