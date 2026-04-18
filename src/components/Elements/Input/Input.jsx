

const Input = (props) => {
    const {
        type,
        placeholder,
        name,
    } = props;
    return (
        <input
            type={type}
            className="w-full px-3 py-2 text-sm rounded text-slate-700"
            placeholder={placeholder}
            name={name}
            id={name}
        />
    )
};

export default Input;