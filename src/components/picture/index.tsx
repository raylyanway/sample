import React from "react";
import "./index.css";

type Props = {
  text: string;
  url: string;
};

const Picture: React.FC<Props> = ({ text, url }) => (
  <div className="picture">
    <img alt="" src={url} className="picture__img" />
    <p>{text}</p>
  </div>
);

export default Picture;
