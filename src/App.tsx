import { useEffect, useState, useRef } from "react";

import Button from "./components/Button";
import Quote from "./components/Quote";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Loading from "./components/Loading";
import ColorOptions from "./components/ColorOptions";

import html2canvas from "html2canvas";

import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchNewQuote = () => {
    setQuote("");
    setAuthor("");
    setLoading(true);
    fetch("/api/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(`“ ${data[0].q} ”`);
        setAuthor(`~ ${data[0].a}`);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
        setQuote("Error generating a quote");
      });
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  const handleScreenshot = async () => {
    try {
      // 1. Capture the screenshot of the body
      const canvas = await html2canvas(document.body, {
        allowTaint: true,
        useCORS: true,
      });

      // 2. Create a download link
      const link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = canvas.toDataURL("image/png");

      // 3. Trigger the download
      link.click();
    } catch (error) {
      console.error("Error taking screenshot:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="quote-body">
        <ColorOptions />
        <div className="quote-container">
          {loading && <Loading />}
          <Quote quote={quote} author={author} />
          <div className="buttons">
            <Button onClick={fetchNewQuote} />
            <Socials quote={quote} author={author} />
            <div className="icon-content">
              <button
                onClick={handleScreenshot}
                data-html2canvas-ignore
                className="download-button"
              >
                <svg
                  className="download-icon"
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
              </button>
              <span className="tooltip">Download screenshot</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
