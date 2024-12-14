/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");

    // Function to append a value to the display
    const appendToDisplay = (value) => {
        display.value += value;
    };

    // Function to clear the display
    const clearDisplay = () => {
        display.value = "";
    };

    // Function to evaluate the expression
    const solve = () => {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    };

    // Add event listeners to buttons
    document.querySelectorAll(".buttons button").forEach((button) => {
        const value = button.getAttribute("data-value");

        if (value) {
            button.addEventListener("click", () => appendToDisplay(value));
        }
    });

    // Event listener for clear button
    document.getElementById("clear").addEventListener("click", clearDisplay);

    // Event listener for equals button
    document.getElementById("equals").addEventListener("click", solve);
});
