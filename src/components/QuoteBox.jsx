import { useState } from "react";
import quotes from "../quotes.json";
let colors = [
  "#34EF51",
  "#00D183",
  "#EFD734",
  "#2EAD73",
  "#2EAD73",
  "#34E4EF",
  "#40EEDC",
  "#F9F871",
  "#C8FB86",
  "#00C8FB",
  "#A754A6",
  "#AD2763",
  "#FFE8D2",
  "#C1BFFF",
  "#8989D4",
  "#E6F4F1",
];
const QuoteBox = () => {
  const randomQuotes = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomQuotes);

  const changeCita = () => {
    let random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
  };
  const randomColor = Math.floor(Math.random() * colors.length);
  const color = colors[randomColor];
  document.body.style = `background: ${color}`;
  return (
    <div className="container" style={{ color: color }}>
      <div className="quotes-container">
        <div>
          <i class="fa-solid fa-quote-left"></i>
        </div>
        <article className="quotes">
          <h4>{quotes[index].quote}</h4>
        </article>
        <div style={{ textAlign: "right" }}>
          <i class="fa-solid fa-quote-right"></i>
        </div>
        <p style={{ textAlign: "right" }}>{quotes[index].author}</p>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={changeCita}>
          <i class="fa-solid fa-angle-right" style={{ color: color }}></i>
        </button>
      </div>
    </div>
  );
};
export default QuoteBox;
