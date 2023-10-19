const PrimaryButton = ({ children }) => {
  return (
    <div className="btn-container">
      <button className="btn-primary">{children}</button>
    </div>
  );
};

export default PrimaryButton;
