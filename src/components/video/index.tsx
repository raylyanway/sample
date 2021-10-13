import React, { useState, useRef } from "react";
import useClickOutside from "../../hooks/use-click-outside";
import Modal from "../modal";

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
  const modalContainer = useRef<HTMLDivElement>(null);

  useClickOutside(modalContainer, () => {
    setShow(false);
  });

  const handleButtonClick = () => {
    setShow(true);
  };

  const handleModalClose = () => {
    setShow(false);
  };

  return (
    <div className="video">
      <img alt="" src={img} />
      <p>{`${name} ${text}`}</p>
      <button type="button" onClick={handleButtonClick}>
        Watch
      </button>
      <Modal
        onClose={handleModalClose}
        open={show}
        title={name}
        ref={modalContainer}
        content={
          <iframe title={name} width="100%" height="315" src={modifiedLink} />
        }
      />
    </div>
  );
};

export default Video;
