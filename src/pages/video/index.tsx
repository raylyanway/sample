import React, { useEffect } from "react";
import useFetch from "../../hooks/use-fetch";
import Video from "../../components/video";
import Loader from "../../components/loader";
import ErrorPage from "../../components/error-page";

import "./index.css";

type Adrien = {
  _id: string;
  uId: string;
  uNm: string;
  text: string;
  pl: {
    name: string;
    id: number;
  };
  name: string;
  eId: string;
  ctx: string;
  img: string;
  src: {
    id: string;
    name: string;
  };
  lov: [];
}[];

const urls = ["https://openwhyd.org/adrien?format=json&limit=1"];

const VideoPage: React.FC = () => {
  const { request, data, loading, error } = useFetch<Adrien>(urls);

  useEffect(() => {
    request();
  }, [request]);

  console.log(111, data);
  return (
    <div className="images-page">
      {data.length > 0 &&
        data[0].ok &&
        data[0].data.map((item) => {
          return (
            <Video
              link={item.src.id}
              text={item.text}
              name={item.name}
              img={item.img}
            />
          );
        })}
      <ErrorPage show={error} />
      <Loader show={loading} />
    </div>
  );
};

export default VideoPage;
