const SecondaryButton = ({ children }) => {
  return (
    <div className="action-btn-container">
      <button className="btn-secondary">{children}</button>
    </div>
  );
};

export default SecondaryButton;
