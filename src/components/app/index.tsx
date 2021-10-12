import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImagesPage from "../../pages/images";
import "./index.css";

export default function App(): JSX.Element {
  return (
    <Router>
      <nav className="app">
        <ul className="app__nav">
          <li className="app__logo">
            <Link to="/" className="app__link">
              <span className="app__text">Home</span>
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                />
              </svg>
            </Link>
          </li>
          <li className="app__item">
            <Link to="/images" className="app__link">
              <svg
                aria-hidden="true"
                focusable="false"
                className="app__icon"
                role="img"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z"
                />
              </svg>
              <span className="app__text">Images</span>
            </Link>
          </li>
          <li className="app__item">
            <Link to="/about" className="app__link">
              <svg
                aria-hidden="true"
                focusable="false"
                className="app__icon"
                role="img"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"
                />
              </svg>
              <span className="app__text">Cats</span>
            </Link>
          </li>
        </ul>
      </nav>

      <main className="app__main">
        <Switch>
          <Route path="/images">
            <ImagesPage />
          </Route>
          <Route path="/users">
            <h1>Cold winter</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </Route>
          <Route path="/">
            <h1>Home</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
