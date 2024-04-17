function createCounter() {
    let count = 0;

    function increment() {
        count++;
        return count;
    }

    function decrement() {
        count--;
        return count;
    }

    function getCount() {
        return count;
    }

    return { increment, decrement, getCount };
}

// Initialize the counter
const counter = createCounter();

// Display initial count
const countDisplay = document.getElementById('countDisplay');
countDisplay.textContent = counter.getCount();

// Increment button
document.getElementById('incrementBtn').addEventListener('click', () => {
    countDisplay.textContent = counter.increment();
});

// Decrement button
document.getElementById('decrementBtn').addEventListener('click', () => {
    countDisplay.textContent = counter.decrement();
});
