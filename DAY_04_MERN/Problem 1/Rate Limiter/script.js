let clickCount = 0;

function createRateLimiter(limit) {
    let count = 0;

    function execute() {
        if (count < limit) {
            count++;
            document.getElementById('output').innerText = "Executed";
            return true;
        } else {
            document.getElementById('output').innerText = "Limit exceeded";
            return false;
        }
    }

    return execute;
}

const limiter = createRateLimiter(3);

document.getElementById('executeBtn').addEventListener('click', function () {
    if (limiter()) {
        clickCount++;
        document.getElementById('clickCount').innerText = clickCount;
    }
});