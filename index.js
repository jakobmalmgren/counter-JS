const countEl = document.getElementById("count_el");
const saveEl = document.getElementById("save_el");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

function erase() {
  saveEl.textContent = "Previous entries :" + " ";
}
