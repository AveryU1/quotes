import quotes from "../quotes.json";
const Authors = ({ color, index }) => {
  return <p style={{ color: color }}>{quotes[index].author}</p>;
};
export default Authors;
