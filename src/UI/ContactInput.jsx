const ContactInput = ({ onChange, value, placeholder, type = "text", name, className = "", label }) => {
    return (
        <div className="flex flex-col gap-1 w-full max-w-[680px]">
            {label && <label htmlFor={name} className="font-text uppercase text-base">{label}</label>}
            {name !== "message" ? (
                <input
                    id={name}
                    name={name}
                    type={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`border focus:outline-none px-2 py-1 border-black ${className}`}
                />
            ) : (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`border focus:outline-none px-2 py-2 border-black resize-none align-top ${className}`}
                    rows={5}
                />
            )}
        </div>
    );
};

export default ContactInput;
