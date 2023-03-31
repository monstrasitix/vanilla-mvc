export class NavbarModel {
    public isOpen: boolean = false;

    public toggle() {
        this.isOpen = !this.isOpen;
    }

    public setOpen(isOpen: boolean) {
        this.isOpen = isOpen;
    }
}