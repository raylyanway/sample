import React from "react";
import loader from "./loader.svg";

import "./index.css";

type Props = {
  show: boolean;
};

const Loader: React.FC<Props> = ({ show }) =>
  show ? <img src={loader} className="loader" alt="loader" /> : null;

export default Loader;
