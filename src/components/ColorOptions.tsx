import { useEffect, useState } from "react";

import "./ColorOptions.css";

const ColorOptions = () => {
  const [bgColor, setBgColor] = useState(
    localStorage.getItem("bgColor") || "#ffffff"
  );
  const [fontColor, setFontColor] = useState(
    localStorage.getItem("fontColor") || "#000000"
  );
  const [manual, setManual] = useState(false);

  const handleBgColorChange = (event: any) => {
    setBgColor(event.target.value);
  };

  const handleFontColorChange = (event: any) => {
    setFontColor(event.target.value);
  };

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;
    localStorage.setItem("bgColor", bgColor);
    localStorage.setItem("fontColor", fontColor);
  }, [bgColor, fontColor]);

  if (manual) {
    return (
      <div className="manual-buttons" data-html2canvas-ignore>
        <div className="background">
          <input
            type="color"
            id="bg-color"
            value={bgColor}
            onChange={handleBgColorChange}
            className="background-input"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            className="background-icon"
          >
            <path
              d="M24,6.59L6.59,24h-1.59c-1.02,0-1.97-.31-2.76-.83L23.17,2.24c.52,.79,.83,1.74,.83,2.76v1.59ZM0,14.59L14.59,0h-5.17L0,9.41v5.17Zm24-5.17l-14.59,14.59h5.17l9.41-9.41v-5.17ZM19,0h-1.59L0,17.41v1.59c0,1.02,.31,1.97,.83,2.76L21.76,.83c-.79-.52-1.74-.83-2.76-.83ZM6.59,0h-1.59C2.24,0,0,2.24,0,5v1.59L6.59,0Zm10.83,24h1.59c2.76,0,5-2.24,5-5v-1.59l-6.59,6.59Z"
              style={{ fill: fontColor }}
            />
          </svg>
        </div>

        <div className="foreground">
          <input
            type="color"
            id="font-color"
            value={fontColor}
            onChange={handleFontColorChange}
            className="foreground-input"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            className="foreground-icon"
          >
            <path
              d="M7.4,5.553a1.041,1.041,0,0,0-1.789,0l-5.5,11a1,1,0,1,0,1.789.894L3.619,14H9.383l1.724,3.447a1,1,0,1,0,1.789-.894ZM4.619,12,6.5,8.236,8.383,12Z"
              style={{ fill: bgColor }}
            />
            <path
              d="M23,8a1,1,0,0,0-1,1v.026A4.948,4.948,0,0,0,19,8a5,5,0,0,0,0,10,4.948,4.948,0,0,0,3-1.026V17a1,1,0,0,0,2,0V9A1,1,0,0,0,23,8Zm-4,8a3,3,0,1,1,3-3A3,3,0,0,1,19,16Z"
              style={{ fill: bgColor }}
            />
          </svg>
        </div>

        <button
          className="back-button"
          onClick={() => {
            setManual(!manual);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="35"
            height="35"
            className="back-icon"
          >
            <path
              d="M10,22.03c-.77,0-1.51-.3-2.09-.88L1.18,14.82c-1.57-1.57-1.57-4.09-.02-5.64,0,0,.01-.01,.02-.02L7.93,2.81c.84-.85,2.09-1.1,3.22-.63s1.84,1.52,1.85,2.74v2.06h7.03c2.19,0,3.97,1.8,3.97,4.01v1.98c0,2.21-1.78,4.01-3.97,4.01h-7.03v2.06c0,1.23-.71,2.28-1.85,2.75-.38,.16-.77,.23-1.15,.23Z"
              style={{ stroke: fontColor }}
            />
          </svg>
        </button>
      </div>
    );
  }
  return (
    <div className="preset-buttons" data-html2canvas-ignore>
      <button
        className="color1"
        onClick={() => {
          setBgColor("#f1f6f9");
          setFontColor("#212a3e");
        }}
      ></button>

      <button
        className="color2"
        onClick={() => {
          setBgColor("#7469b6");
          setFontColor("#f7f9f2");
        }}
      ></button>

      <button
        className="color3"
        onClick={() => {
          setBgColor("#c973ae");
          setFontColor("#ffff80");
        }}
      ></button>

      <button
        className="color4"
        onClick={() => {
          setBgColor("#11999e");
          setFontColor("#e4f9f5");
        }}
      ></button>

      <button
        className="color5"
        onClick={() => {
          setBgColor("#222831");
          setFontColor("#eeeeee");
        }}
      ></button>

      <button className="manual-button" onClick={() => setManual(!manual)}>
        <svg
          id="Layer_1"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          className="editIcon"
        >
          <path d="m18 9.064a3.049 3.049 0 0 0 -.9-2.164 3.139 3.139 0 0 0 -4.334 0l-11.866 11.869a3.064 3.064 0 0 0 4.33 4.331l11.87-11.869a3.047 3.047 0 0 0 .9-2.167zm-14.184 12.624a1.087 1.087 0 0 1 -1.5 0 1.062 1.062 0 0 1 0-1.5l7.769-7.77 1.505 1.505zm11.872-11.872-2.688 2.689-1.5-1.505 2.689-2.688a1.063 1.063 0 1 1 1.5 1.5zm-10.825-6.961 1.55-.442.442-1.55a1.191 1.191 0 0 1 2.29 0l.442 1.55 1.55.442a1.191 1.191 0 0 1 0 2.29l-1.55.442-.442 1.55a1.191 1.191 0 0 1 -2.29 0l-.442-1.55-1.55-.442a1.191 1.191 0 0 1 0-2.29zm18.274 14.29-1.55.442-.442 1.55a1.191 1.191 0 0 1 -2.29 0l-.442-1.55-1.55-.442a1.191 1.191 0 0 1 0-2.29l1.55-.442.442-1.55a1.191 1.191 0 0 1 2.29 0l.442 1.55 1.55.442a1.191 1.191 0 0 1 0 2.29zm-5.382-14.645 1.356-.387.389-1.358a1.042 1.042 0 0 1 2 0l.387 1.356 1.356.387a1.042 1.042 0 0 1 0 2l-1.356.387-.387 1.359a1.042 1.042 0 0 1 -2 0l-.387-1.355-1.358-.389a1.042 1.042 0 0 1 0-2z" />
        </svg>
      </button>
    </div>
  );
};

export default ColorOptions;
