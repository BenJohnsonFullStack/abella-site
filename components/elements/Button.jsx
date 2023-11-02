const Button = ({ styleClass, link, children }) => {
  return (
    <div
      className={
        styleClass === "btn-primary"
          ? "hero-btn-container"
          : "action-btn-container"
      }
    >
      <a href={link}>
        <button className={styleClass}>{children}</button>
      </a>
    </div>
  );
};

export default Button;
