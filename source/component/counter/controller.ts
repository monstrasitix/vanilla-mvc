import { Controller } from "../../core/controller";

import { CounterModel } from "./model";
import { CounterView } from "./view";

export class CounterController extends Controller {
    constructor(
        public model: CounterModel,
        public view: CounterView,
    ) {
        super();
    }
    
    public increment = () => {
        this.model.increment();
        this.view.updateCount(this.model.count);
    }

    public decrement = () => {
        this.model.decrement();
        this.view.updateCount(this.model.count);
    }

    public onInit() {
        const { increment, decrement } = this.view.el;
        increment.addEventListener('click', this.increment);
        decrement.addEventListener('click', this.decrement);
    }

    public onDestroy() {
        const { increment, decrement } = this.view.el;
        increment.removeEventListener('click', this.increment);
        decrement.removeEventListener('click', this.decrement);
    }
}
