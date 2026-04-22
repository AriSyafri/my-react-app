import { login } from "../../services/auth.service";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useEffect, useRef, useState } from "react";

const FormLogin = () => {

  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault(); 
    
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  }

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

    return (
        <form onSubmit={handleLogin}>
          {loginFailed && <p className="text-center text-red-500">{loginFailed}</p> }
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