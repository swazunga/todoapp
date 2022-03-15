var formEl = document.querySelector(".formDiv");
var form = document.querySelector(".form");
var todoList = document.querySelector(".todoList");
var dragP = document.querySelector(".drag");
var tickerEl = document.querySelector(".noItems");
var clearEl = document.querySelector(".clearBtn");

items = JSON.parse(localStorage.getItem("items")) || [];

function loadItems() {
  console.log("loaded");
  JSON.parse(localStorage.getItem(items));
  console.log(parseInt(tickerEl.innerHTML) + items.length);

  tickerEl.textContent = parseInt(tickerEl.innerHTML) + items.length;

  for (var i = 0; i < items.length; i++) {
    var previousItemEl = document.createElement("li");
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    var btnX = document.createElement("button");
    var ticker = tickerEl.innerHTML;
    todoList.prepend(btnX);
    todoList.prepend(previousItemEl);
    todoList.prepend(checkbox);
    btnX.id = "btnX";
    previousItemEl.textContent = items[i].value;
    previousItemEl.classList = "item";
    checkbox.classList = "check";
    btnX.classList = "btnX";
    btnX.textContent = "X";
    if (items[i].isChecked === true) {
      previousItemEl.classList = "strikethrough";
    }
  }
  function checkOff(event) {
    if (event.target.checked) {
      ticker--;
      tickerEl.textContent = ticker;
      previousItemEl.classList.add("strikethrough");
      console.log(itemObj.isChecked);
      console.log("check!");
    }
    if (!event.target.checked) {
      ticker++;
      tickerEl.textContent = ticker;
      previousItemEl.classList.remove("strikethrough");
      console.log(itemObj.isChecked);
      console.log("uncheck!");
    }
  }
  todoList.addEventListener("change", checkOff);
}

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
    itemObj = {
      isChecked: false,
      value: form.value.trim(),
    };
    items.push(itemObj);
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
    items.remove();
    ticker--;
    tickerEl.textContent = ticker;
    console.log("X");
  });
  function checkOff(event) {
    if (event.target.checked) {
      ticker--;
      tickerEl.textContent = ticker;
      itemObj.isChecked = true;
      itemEl.classList.add("strikethrough");
    }
    if (!event.target.checked) {
      ticker++;
      tickerEl.textContent = ticker;
      itemObj.isChecked = false;
      itemEl.classList.remove("strikethrough");
    }
  }
  todoList.addEventListener("change", checkOff);
}

function clearCompleted() {
  console.log("clear");
}

formEl.addEventListener("submit", submitItem);
clearEl.addEventListener("click", clearCompleted);
loadItems();
