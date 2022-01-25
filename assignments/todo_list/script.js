let inputVal = document.querySelector("input[name='todo_input']");
let button = document.querySelector("button");
let todoDiv = document.querySelector(".todos");
var count = 0;
button.addEventListener("click", handelClick);
function handelClick(e) {
  e.preventDefault();
  let text = inputVal.value;
  const para = document.createElement("p");
  para.setAttribute("key", count);
  para.appendChild(document.createTextNode(text));
  todoDiv.append(para);
  inputVal.value = "";
  count += 1;
}
todoDiv.addEventListener("click", removebtn);
function removebtn(e) {
  todoDiv.removeChild(e.target);
}
