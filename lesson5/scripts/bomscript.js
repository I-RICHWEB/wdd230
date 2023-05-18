const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
  if (input.value !== "") {
    const scripture = input.value;
    input.value = "";

    const li = document.createElement("li");
    const btn = document.createElement("button");

    li.textContent = scripture;
    btn.textContent = "❌";

    li.appendChild(btn);
    list.appendChild(li);

    btn.addEventListener("click", () => {
      list.removeChild(li);
      input.focus();
    });
    input.focus();
  } else {
    input.focus();
  }
});
