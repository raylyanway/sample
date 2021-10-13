import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImagesPage from "../../pages/images";
import VideoPage from "../../pages/video";
import "./index.css";

const App: React.FC = () => (
  <Router>
    <nav className="app__nav">
      <ul className="app__ul">
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
          <Link to="/video" className="app__link">
            <svg
              aria-hidden="true"
              focusable="false"
              className="app__icon"
              role="img"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"
              />
            </svg>
            <span className="app__text">Video</span>
          </Link>
        </li>
      </ul>
    </nav>

    <main>
      <Switch>
        <Route path="/images">
          <ImagesPage />
        </Route>
        <Route path="/video">
          <VideoPage />
        </Route>
        <Route path="/">
          <h1>Home</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
