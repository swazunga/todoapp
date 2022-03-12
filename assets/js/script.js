var formEl = document.querySelector(".formDiv");
var form = document.querySelector(".form");
var todoList = document.querySelector(".todoList");
var item = document.createElement("li");

items = [];

function submitItem(event) {
  event.preventDefault();
  // for (var i = 0; i < item.length; i++) {
  todoList.appendChild(item);
  item.classList.add("item");
  item.textContent = form.value;
  items.push(form.value);
  localStorage.setItem("items", JSON.stringify(items));
  console.log(items);
  // }
}

formEl.addEventListener("submit", submitItem);

// form.addEventListener("keyup", function (event) {
//   if (event.code === 13) {

//     console.log("click");
//   }
// });
