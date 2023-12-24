const container = document.querySelector(".container");
const slider = document.querySelector("input");
const clearBtn = document.querySelector(".btn");
const para = document.getElementById("digit");
const remove = document.querySelector(".remove");
let initialWidth = 400 / 16;
let widthIndicator;
let totalBoxes;

const randomColor = () => {
  const a = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const c = Math.floor(Math.random() * 255);
  return `rgb(${a}, ${b}, ${c})`;
};

for (let index = 0; index < 16; index++) {
  for (let index = 0; index < 16; index++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${initialWidth}px`;
    box.style.height = `${initialWidth}px`;
    container.append(box);
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = randomColor();
      clearBtn.addEventListener("click", () => {
        box.style.backgroundColor = "";
      });
    });
  }
}

remove.addEventListener("click", () => {});

slider.addEventListener("input", () => {
  let display = slider.value;
  para.textContent = `${display}X${display}`;
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    container.removeChild(box);
  });

  // totalBoxes = display;
  widthIndicator = 400 / display;
  console.log(widthIndicator);
  for (let index = 0; index < display; index++) {
    for (let index = 0; index < display; index++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${widthIndicator}px`;
      box.style.height = `${widthIndicator}px`;
      container.append(box);
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = randomColor();
        clearBtn.addEventListener("click", () => {
          box.style.backgroundColor = "";
        });
      });
    }
  }
});

// console.log(para.textContent);

// console.log(select[0])
