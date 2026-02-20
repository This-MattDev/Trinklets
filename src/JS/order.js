// Grab all base product buttons and checkmark elements
const baseBtns = document.querySelectorAll(".base-btn");
const checkBtns = document.querySelectorAll(".custom-btn");
const fontBtns = document.querySelectorAll(".font-btn");
const baseCheckmark = document.querySelectorAll(".base-check");
const customCheck = document.querySelectorAll(".custom-check");

// Handle button clicks
baseBtns.forEach((base) => {
  base.addEventListener("click", () => {
    // Reset: hide all checkmarks, deselect all buttons
    baseCheckmark.forEach((check) => {
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

checkBtns.forEach((base) => {
  base.addEventListener("click", () => {
    // Reset: hide all checkmarks, deselect all buttons
    customCheck.forEach((check) => {
      check.classList.add("hidden-check");
    });
    checkBtns.forEach((item) => {
      item.classList.remove("selected");
    });

    // Activate: select clicked button and show its checkmark
    base.classList.add("selected");
    const thisCheck = base.querySelector(".hidden-check");
    thisCheck.classList.remove("hidden-check");
  });
});

fontBtns.forEach((button) => {
  button.addEventListener('click', ()=> {
    fontBtns.forEach(item => {
      item.classList.remove('selected');
    });

    button.classList.add('selected');
  })
})