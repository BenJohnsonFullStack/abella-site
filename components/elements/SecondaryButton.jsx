const SecondaryButton = ({ children }) => {
  return (
    <div className="action-btn-container">
      <a href="#sign-up">
        <button className="btn-secondary">{children}</button>
      </a>
    </div>
  );
};

export default SecondaryButton;
