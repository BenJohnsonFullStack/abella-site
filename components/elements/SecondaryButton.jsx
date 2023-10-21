const SecondaryButton = ({ children }) => {
  return (
    <div className="btn-container">
      <button className="btn-secondary">{children}</button>
    </div>
  );
};

export default SecondaryButton;
