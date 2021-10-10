import { Express } from "express";

const routes = (app: Express): void => {
  app.get("/ping", (req, res) => {
    res.render("ping", {
      title: "Express Ping",
    });
  });

  // other routes..
};

export default routes;
