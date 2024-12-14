/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");

    const appendToDisplay = (value) => {
        if (display.value === "Error") {
            display.value = "";
        }

        if (display.value === "0" && value !== ".") {
            display.value = "";
        }
        display.value += value;
    };

    const clearDisplay = () => {
        display.value = "";
    };

    const soluzione = () => {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    };

    document.querySelectorAll(".buttons button").forEach((button) => {
        const value = button.getAttribute("data-value");

        if (value) {
            button.addEventListener("click", () => appendToDisplay(value));
        }
    });

    document.getElementById("clear").addEventListener("click", clearDisplay);
    document.getElementById("equals").addEventListener("click", soluzione);
});
