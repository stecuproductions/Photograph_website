
const Paragraph = ({ children, className = "" }) => {
  return (
    <p className={`font-text text-base text-secondary   max-w-prose  leading-relaxed  ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
