import path from "path";
import { ApplicationFunctionOptions, Nextbot } from "../index";

export function defaultApp(
  app: Nextbot,
  { getRouter }: ApplicationFunctionOptions
) {
  if (!getRouter) {
    throw new Error("getRouter() is required for defaultApp");
  }

  const router = getRouter();

  router.get("/nextbot", (req, res) => {
    let pkg;
    try {
      pkg = require(path.join(process.cwd(), "package.json"));
    } catch (e) {
      pkg = {};
    }

    res.render("nextbot.handlebars", pkg);
  });
  router.get("/", (req, res, next) => res.redirect("/nextbot"));
}
