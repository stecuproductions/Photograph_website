const Button = ({ children, className = "", onClick }) => {
    return (
        <button
        onClick={onClick}
        className={`font-text px-4 py-2 border-1  hover:bg-secondary hover:text-primary transition-all duration-300  ${className}`}
        >
        {children}
        </button>
    );
    }
export default Button;