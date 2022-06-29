const Button = ({ color, changeQuote }) => {
  return (
    <div className="btn-container">
      <button className="btn" onClick={changeQuote}>
        <i class="fa-solid fa-angle-right" style={{ color: color }}></i>
      </button>
    </div>
  );
};
export default Button;
