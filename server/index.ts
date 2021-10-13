import express from "express";
import request from "request";
import routes from "./routes";

const app = express();

const myLimit =
  typeof process.argv[2] !== "undefined" ? process.argv[2] : "100kb";
// eslint-disable-next-line  no-console
console.log("Using limit: ", myLimit);

app.use(express.json({ limit: myLimit }));

app.all("*", (req, res, next) => {
  // Set CORS headers
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    req.header("access-control-request-headers")
  );

  if (req.method === "OPTIONS") {
    // CORS Preflight
    res.send();
  } else {
    const targetURL = req.header("Target-URL");

    if (!targetURL) {
      res.status(500).send({
        error: "There is no Target-Endpoint header in the request",
      });
      return;
    }

    if (/https?/gi.test(targetURL)) {
      request(
        {
          url: targetURL,
          method: req.method,
          json: req.body,
          headers: { Authorization: req.header("Authorization") },
        },
        (error, response, body) => {
          if (error) {
            // eslint-disable-next-line  no-console
            console.error(`error: ${response.statusCode}`);
          }
          // eslint-disable-next-line  no-console
          console.log(body);
        }
      ).pipe(res);

      return;
    }
  }
  next();
});

routes(app);

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  // eslint-disable-next-line  no-console
  console.log(`Proxy server listening on port ${app.get("port")}`);
});
