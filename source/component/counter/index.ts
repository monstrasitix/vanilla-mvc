import { CounterView, Elements } from "./view";
import { CounterModel } from "./model";
import { CounterController } from "./controller";

export default (el: Elements) => new CounterController(
    new CounterModel(),
    new CounterView(el),
);