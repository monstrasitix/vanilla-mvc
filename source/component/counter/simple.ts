const newCounter = () => {
    let count = 0;

    const output = document.getElementById('output') as HTMLElement;
    const increment = document.getElementById('increment') as HTMLButtonElement;
    const decrement = document.getElementById('decrement') as HTMLButtonElement;

    const updateText = () => {
        output.textContent = String(count);
    };

    const handleIncrement = () => {
        count++;
        updateText();
    };

    const handleDecrement = () => {
        count--;
        updateText();
    };

    increment.addEventListener('click', handleIncrement);
    decrement.addEventListener('click', handleDecrement);

    return () => {
        increment.removeEventListener('click', handleIncrement);
        decrement.removeEventListener('click', handleDecrement);
    };
};