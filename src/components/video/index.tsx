import React, { useState } from "react";
import "./index.css";

type Props = {
  text: string;
  link: string;
  img: string;
  name: string;
};

const Video: React.FC<Props> = ({ text, link, name, img }) => {
  const url = new URL(link);
  const params = new URLSearchParams(url.search);
  const vParam = params.get("v");
  const modifiedLink = `https://www.youtube.com/embed/${vParam}?autoplay=1&mute=1`;

  const [show, setShow] = useState(false);

  const handleButtonClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="video">
      <img alt="" src={img} className="video__img" />
      <p className="video__text">{`${name} ${text}`}</p>
      <button type="button" onClick={handleButtonClick}>
        Watch
      </button>
      {show && (
        <iframe title={name} width="420" height="315" src={modifiedLink} />
      )}
    </div>
  );
};

export default Video;
