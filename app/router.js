import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.routerRootURL
});

Router.map(function() {
  this.route("ember", {
    path: ":version"
  });
  this.route("show", {
    path: ":project/:version"
  });
  this.route("404", { path: "/*path" });
  // this.route('404'); // this works diretly to /404 route, but not what we want
});

export default Router;
