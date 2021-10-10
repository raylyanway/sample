import React, { useEffect } from "react";
import logo from "./logo.svg";
import useFetch from "./hooks/use-fetch";
import "./App.css";

type Axolotl = {
  url: string;
  facts: string;
  pics_repo: string;
  api_repo: string;
};

const urls = [
  "https://axoltlapi.herokuapp.com",
  "https://axoltlapi.herokuapp.com",
  "https://axoltlapi.herokuapp.com",
  "https://axoltlapi.herokuapp.com/1",
];

function App(): JSX.Element {
  const { request, data, loading, error } = useFetch<Axolotl>(urls);

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
        {data?.map((item) => {
          if (item.ok) {
            return (
              <>
                <img src={item.data?.url} className="App-logo" alt="logo" />
                <p>{item.data?.facts}</p>
              </>
            );
          }
          return <p>Ошибка HTTP: {item.status}</p>;
        })}
        {loading && <img src={logo} className="App-logo" alt="logo" />}
      </header>
    </div>
  );
}

export default App;
