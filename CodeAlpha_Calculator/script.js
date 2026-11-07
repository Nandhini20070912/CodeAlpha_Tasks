
const display = document.getElementById("display");
const historyList = document.getElementById("history");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        if (!expression || !/^[0-9+\-*/%.() ]+$/.test(expression)) {
            throw new Error("Invalid input");
        }

        let result = Function('"use strict"; return (' + expression + ')')();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        let item = document.createElement("li");
        item.textContent = expression + " = " + result;
        historyList.prepend(item);

        display.value = result;

    } catch (error) {
        display.value = "Error";
    }
}

function clearHistory() {
    historyList.innerHTML = "";
}
