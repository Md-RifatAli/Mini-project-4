// Finding elements
const selectFontsize = document.querySelector("#selectFontSize");
const selectBgcolor = document.querySelector("#selectBgcolor");
const resetButton = document.querySelector(".btn");
const mainElements = document.querySelectorAll("main");  // Select all main elements

// Add Event listeners for font size
const changeFontSize = (event) => {
    const fontSize = event.target.value;
    mainElements.forEach(mainElement => {
        mainElement.style.fontSize = fontSize;  // Apply to each main element
        localStorage.setItem("fontSize", fontSize);  // Save font size to localStorage
    });
};

// Add Event listeners for background color
const changeBgcolor = (event) => {
    const bgColor = event.target.value;
    mainElements.forEach(mainElement => {
        mainElement.style.backgroundColor = bgColor;  // Apply to each main element
        localStorage.setItem("bgColor", bgColor);  // Save background color to localStorage
    });
};


// Event listeners
selectFontsize.addEventListener("change", changeFontSize);
selectBgcolor.addEventListener("change", changeBgcolor);







resetButton.addEventListener("click", () => {
    mainElements.forEach(mainElement => {
        mainElement.style.fontSize = '';  // Reset font size
        mainElement.style.backgroundColor = '';  // Reset background color
    });
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgColor");
});






// Load saved preferences on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedFontSize = localStorage.getItem("fontSize");
    const savedBgColor = localStorage.getItem("bgColor");

    if (savedFontSize) {
        mainElements.forEach(mainElement => {
            mainElement.style.fontSize = savedFontSize;
        });
    }

    if (savedBgColor) {
        mainElements.forEach(mainElement => {
            mainElement.style.backgroundColor = savedBgColor;
        });
    }
});
