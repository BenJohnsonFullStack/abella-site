const PrimaryButton = ({ children }) => {
  return (
    <div className="btn-container">
      <button className="btn-primary border-gradient">{children}</button>
    </div>
  );
};

export default PrimaryButton;
