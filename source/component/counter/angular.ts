export class DOM {
    public byId<T extends HTMLElement>(selector: string): T {
        return document.getElementById(selector) as T;
    }
}

abstract class Component {
    public abstract onInit(): void;
    public abstract onDestroy(): void;
}

export class Counter extends Component {
    public count: number = 0;

    public output = this.dom.byId<HTMLElement>('output');
    public increment = this.dom.byId<HTMLButtonElement>('increment');
    public decrement = this.dom.byId<HTMLButtonElement>('decrement');

    constructor(
        public dom: DOM,
    ) {
        super();
    }

    public updateText() {
        this.output.textContent = String(this.count);
    }

    public onIncrement = () => {
        this.count += 1;
        this.updateText();
    }

    public onDecrement = () => {
        this.count -= 1
        this.updateText();
    }

    public onInit(): void {
        this.increment.addEventListener('click', this.onIncrement);
        this.decrement.addEventListener('click', this.onDecrement);
    }

    public onDestroy(): void {
        this.increment.removeEventListener('click', this.onIncrement);
        this.decrement.removeEventListener('click', this.onDecrement);
    }
}