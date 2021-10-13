import React, { useEffect } from "react";
import useFetch from "../../hooks/use-fetch";
import Picture from "../../components/picture";
import Loader from "../../components/loader";
import ErrorPage from "../../components/error-page";

import "./index.css";

type Axolotl = {
  url: string;
  facts: string;
  pics_repo: string;
  api_repo: string;
};

const urls = Array(10).fill("https://axoltlapi.herokuapp.com");

const ImagesPage: React.FC = () => {
  const { request, data, loading, error } = useFetch<Axolotl>(urls);

  useEffect(() => {
    request();
  }, [request]);

  return (
    <div className="images-page">
      {data.length > 0 &&
        data.map((item) => {
          if (item.ok) {
            return (
              <Picture
                text={item.data.facts}
                url={item.data.url}
                key={item.data.url + item.data.facts}
              />
            );
          }
          return null;
        })}
      <ErrorPage show={error} />
      <Loader show={loading} />
    </div>
  );
};

export default ImagesPage;
