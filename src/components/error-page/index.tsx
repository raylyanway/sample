import React from "react";
import "./index.css";

type Props = {
  show: boolean;
};

const ErrorPage: React.FC<Props> = ({ show }) =>
  show ? (
    <p className="error-page">
      Something is wrong.
      <br />
      Please try again later.
    </p>
  ) : null;

export default ErrorPage;
