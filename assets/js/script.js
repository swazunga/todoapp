var formEl = document.querySelector(".formDiv");
var form = document.querySelector(".form");
var todoList = document.querySelector(".todoList");
var dragP = document.querySelector(".drag");
var tickerEl = document.querySelector(".noItems");

items = JSON.parse(localStorage.getItem("items")) || [];

function submitItem(event) {
  event.preventDefault();
  if (form.value === "") {
    alert("You must write something!");
  } else {
    var itemEl = document.createElement("li");
    var checkbox = document.createElement("INPUT");
    var btnX = document.createElement("button");
    btnX.id = "btnX";
    checkbox.setAttribute("type", "checkbox");
    checkbox.id = "checkbox";
    todoList.prepend(btnX);
    todoList.prepend(itemEl);
    todoList.prepend(checkbox);
    btnX.classList = "btnX";
    itemEl.classList = "item";
    checkbox.classList = "check";
    btnX.textContent = "X";
    itemEl.textContent = form.value.trim();
    items.push(form.value.trim());
    localStorage.setItem("items", JSON.stringify(items));
    ticker = tickerEl.textContent;
    ticker++;
    tickerEl.textContent = ticker;
  }
  form.value = "";
  document.getElementById("btnX").addEventListener("click", function () {
    itemEl.remove();
    btnX.remove();
    checkbox.remove();
    ticker--;
    tickerEl.textContent = ticker;
    console.log("X");
  });
}

function checkOff(event) {
  if (event.target.checked) {
    console.log(ticker);
    ticker--;
    tickerEl.textContent = ticker;
    console.log("check!");
  }
  if (!event.target.checked) {
    console.log("uncheck!");
    ticker++;
    tickerEl.textContent = ticker;
  }
}

formEl.addEventListener("submit", submitItem);

todoList.addEventListener("change", checkOff);
