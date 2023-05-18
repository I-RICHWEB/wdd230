//The script for the shopping list.
const uList = document.querySelector("ul");
const btn = document.querySelector("button");
const input = document.querySelector("input");
btn.addEventListener("click", addlist);

function addlist() {
  const item = input.value;
  input.value = "";
  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  listItem.append(span, button);
  span.innerHTML = item;
  button.textContent = "Delete ❌";
  uList.appendChild(listItem);
  button.addEventListener("click", () => {
    uList.removeChild(listItem);
    input.focus();
  });
  input.focus();
}
