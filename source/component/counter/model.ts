export class CounterModel {
    public count: number = 0;

    public increment() {
        this.count++;
    }

    public decrement() {
        this.count--;
    }
}