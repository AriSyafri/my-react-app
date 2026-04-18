import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
    return (
      <form action="">
        <div className="mb-6">
          <InputForm 
            label="Fullname"
            name="fullname"
            type="fullname"
            placeholder="name example"
          />

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

          <InputForm 
            label="Confirm Password"
            name="confirmPassword"
            type="confirmPassword"
            placeholder="*****"
          />
        </div>

        <Button
          classname="w-full bg-blue-500"
        >
          Register
        </Button>
        
      </form>
    );
}

export default FormRegister;