import { useState } from "react";
import "./Quote.css";
import "../fonts.css";

interface Props {
  quote: string;
  author: string;
}

const Quote = ({ quote, author }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const text = `${quote}\n${author}`;

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="container">
      <p className="copy-notif">
        {isCopied ? "Copied!" : "Click on the quote to copy"}
      </p>
      <button className="quote" onClick={handleCopyClick}>
        <h2>{quote}</h2>
        <h3>{author}</h3>
      </button>
    </div>
  );
};

export default Quote;
