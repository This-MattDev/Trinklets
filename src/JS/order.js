// Grab all base product buttons and checkmark elements
const baseBtns = document.querySelectorAll(".base-btn");
const checkmark = document.querySelectorAll(".checkmark");

// Handle button clicks
baseBtns.forEach((base) => {
  base.addEventListener("click", () => {
    // Reset: hide all checkmarks, deselect all buttons
    checkmark.forEach((check) => {
      check.classList.add("hidden-check");
    });
    baseBtns.forEach((item) => {
      item.classList.remove("selected");
    });

    // Activate: select clicked button and show its checkmark
    base.classList.add("selected");
    const thisCheck = base.querySelector(".hidden-check");
    thisCheck.classList.remove("hidden-check");
  });
});


//CUSOMIZATION PART

