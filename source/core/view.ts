export class View<T> {
    constructor(
        public el: T,
    ) {}

    public setText(element: HTMLElement, value: any) {
        element.textContent = String(value);
    }

    public static id<T>(selector: string): T {
        return document.getElementById(selector) as T;
    }
} 