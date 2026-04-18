import { Link } from "react-router-dom";


const AuthLayout = (props) => {
    const { children, title, type } = props;
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-xs">
                <h1 className="mb-3 text-3xl font-bold text-blue-500">{title}</h1>
                <p className="mb-8 font-medium text-slate-500">
                    Welcome, Please enter your detail
                </p>
                {children}
                <p className="mt-5 text-sm text-center">
                    {type === "login" 
                        ? "Don't have an account ? " 
                        : "Already have an account "}
                        
                    {type === "login" && (
                        <Link to="/register" className="font-bold text-blue-600">
                            Register
                        </Link>
                    )}  

                    {type === "register" && (
                        <Link to="/login" className="font-bold text-blue-600">
                            Login
                        </Link>
                    )}  
                    
                </p>
            </div>
        </div>
    );
};

export default AuthLayout;