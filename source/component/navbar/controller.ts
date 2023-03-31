import { Controller } from "../../core/controller";
import { NavbarModel } from "./model";
import { NavbarView } from "./view";

export class NavbarController extends Controller {
    constructor(
        public model: NavbarModel,
        public view: NavbarView,
    ) {
        super();
    }

    public toggleNavbar = () => {
        this.model.toggle();
        this.view.updateNavbar(this.model.isOpen);
    }

    public onInit() {
        this.view.el.hamburger.addEventListener('click', this.toggleNavbar);
    }

    public onDestroy() {
        this.view.el.hamburger.removeEventListener('click', this.toggleNavbar);
    }
}