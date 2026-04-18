

const AuthLayout = (props) => {
    const { children, title } = props;
    return (
        <div className="w-full max-w-xs">
            <h1 className="mb-3 text-3xl font-bold text-blue-500">{title}</h1>
            <p className="mb-8 font-medium text-slate-500">
                Welcome, Please enter your detail
            </p>
            {children}
        </div>
    );
};

export default AuthLayout;