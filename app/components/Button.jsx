const Button = ({ children }) => {
  return (
    <div className="text-center pb-14">
      <button className="bg-[#24166d] mb-16 py-2 px-12 rounded-lg text-[#edece6] drop-shadow-md border-solid border-2 border-yellow-300">
        {children}
      </button>
    </div>
  );
};

export default Button;
