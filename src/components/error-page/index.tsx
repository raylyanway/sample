import React from "react";
import "./index.css";

type Props = {
  show: boolean;
};

const ErrorPage: React.FC<Props> = ({ show }) =>
  show ? (
    <div className="error-page">
      Something is wrong.
      <br />
      Please try again later.
    </div>
  ) : null;

export default ErrorPage;
