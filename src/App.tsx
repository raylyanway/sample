import React, { useEffect } from "react";
import logo from "./logo.svg";
import useFetch from "./hooks/use-fetch";
import "./App.css";

type Cat = {
  url: string;
  facts: string;
  pics_repo: string;
  api_repo: string;
};

function App(): JSX.Element {
  const { request, data, loading, error, badRequestStatus } = useFetch<Cat>(
    "https://axoltlapi.herokuapp.com"
  );

  useEffect(() => {
    request();
  }, [request]);

  return (
    <div className="App">
      <header className="App-header">
        {error && (
          <p>
            Something is wrong.
            <br />
            Please try again later.
          </p>
        )}
        {badRequestStatus && <p>Ошибка HTTP: {badRequestStatus}</p>}
        {loading && <img src={logo} className="App-logo" alt="logo" />}
        {data && <img src={data?.url} className="App-logo" alt="logo" />}
        {data && <p>data.facts</p>}
      </header>
    </div>
  );
}

export default App;
