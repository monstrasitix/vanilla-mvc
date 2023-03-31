import { NavbarView, Elements } from "./view";
import { NavbarModel } from "./model";
import { NavbarController } from "./controller";

export default (el: Elements) => new NavbarController(
    new NavbarModel(),
    new NavbarView(el),
);