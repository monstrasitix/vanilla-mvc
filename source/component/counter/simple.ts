const setText = <T extends {}> (el: HTMLElement, value: T) => {
    el.textContent = String(value);
}

export const counterState = () => ({
    count: 0,
});

export const getElements = () => ({
    output: document.getElementById('output') as HTMLElement,
    increment: document.getElementById('increment') as HTMLButtonElement,
    decrement: document.getElementById('decrement') as HTMLButtonElement,
});

export const newCounter = () => {
    const state = counterState();
    const { decrement, increment, output } = getElements();

    const updateText = () => {
        setText(output, state.count);
    };

    const handleIncrement = () => {
        state.count++;
        updateText();
    };

    const handleDecrement = () => {
        state.count--;
        updateText();
    };

    increment.addEventListener('click', handleIncrement);
    decrement.addEventListener('click', handleDecrement);

    return () => {
        increment.removeEventListener('click', handleIncrement);
        decrement.removeEventListener('click', handleDecrement);
    };
};
