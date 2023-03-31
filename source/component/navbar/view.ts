import { View } from "../../core/view";

export type Elements = {
    hamburger: HTMLButtonElement,
};

export class NavbarView extends View<Elements> {
    public updateNavbar(isOpen: boolean) {
        this.el.hamburger
            .classList.toggle('-open', isOpen);
    }
}