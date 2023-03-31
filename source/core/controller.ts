type EventString = keyof HTMLElementEventMap;

export abstract class Controller{
    public abstract onInit(): void;
    public abstract onDestroy(): void;
} 