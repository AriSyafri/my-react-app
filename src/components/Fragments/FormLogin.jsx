import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {

  const handleLogin = () => {
    event.preventDefault();

    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);

    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log("login");

    window.location.href = "/products";
  }

    return (
        <form onSubmit={handleLogin}>
        <div className="mb-6">
          <InputForm 
            label="Email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
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