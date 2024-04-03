window.onload = function() {
    animateCounter('counter1', 100, 2000, '+');
    animateCounter('counter2', 98, 1500, '%');
    animateCounter('counter3', 500, 2300, '');
};

function animateCounter(id, targetCount, duration, symbol) {
    var counter = document.getElementById(id);
    var currentCount = 0;

    var incrementTime = (duration / targetCount);

    var animateCounter = setInterval(function() {
        if (currentCount < targetCount) {
            currentCount++;
            counter.innerHTML = currentCount + symbol;
        } else {
            clearInterval(animateCounter);
        }
    }, incrementTime);
}
