import { View } from "../../core/view";

export type Elements = {
    output: HTMLElement,
    increment: HTMLButtonElement,
    decrement: HTMLButtonElement,
};

export class CounterView extends View<Elements> {
    public updateCount(count: number) {
        this.setText(this.el.output, count);
    }
}