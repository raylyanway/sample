import React, { MouseEvent, forwardRef } from "react";

import "./index.css";

type Props = {
  open: boolean;
  title: string;
  content: React.ReactNode;
  onClose: (event: MouseEvent<HTMLElement>) => void;
};

const Modal = forwardRef<HTMLDivElement, Props>(
  ({ open, title, onClose, content }, ref) =>
    open ? (
      <>
        <div className="modal__backdrop" />
        <div className="modal__popup" ref={ref}>
          <p>{title}</p>
          {content}
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </>
    ) : null
);

export default Modal;
