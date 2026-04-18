import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (
        <form action="">
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

        <Button
          classname="w-full bg-blue-500"
        >
          Login
        </Button>
        
      </form>
    );
}

export default FormLogin;