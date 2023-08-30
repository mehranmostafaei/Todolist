let input = document.getElementById("input");
let btn = document.getElementById("btn");
let donelist = document.getElementById("donelist");
let todolist = document.getElementById("todolist");
let todo = document.getElementById("todo");
let done = document.getElementById("done");
let material = document.querySelector(".text");
let result = document.querySelector(".result");
let todotitle = document.getElementById("todotitle");
let donetitle = document.getElementById("donetitle");
let data = [];
let checkbox;
let li;
let deletebtn;
let n = 0;

btn.addEventListener("click", function (e) {
  e.preventDefault();
  todolist.style.display = "block";
  todotitle.style.display = "block";
  li = document.createElement("li");
  li.setAttribute("id", n);
  checkbox = document.createElement("input");
  deletebtn = document.createElement("button");
  deletebtn.setAttribute("class", "delete " + n + "");
  deletebtn.innerHTML = "<i class='fa fa-trash-o'></i>";
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox");
  let validation = input.value.trim();
  if (validation == "") {
    material.textContent = "please enter your task ";
    material.style.color = "red";
    input.style.borderColor = "red";
  } else {
    material.textContent = "task";
    material.style.color = "rgb(43, 83, 226)";
    input.style.borderColor = "black";
    li.append(checkbox);
    li.append(input.value);
    li.append(deletebtn);
    todo.append(li);
  }
  input.value = "";
  n++;
  data.push({ checkbox, li });
  data.forEach(function (item) {
    item.checkbox.addEventListener("change", function () {
      if (item.checkbox.checked === true) {
        donelist.style.display = "block";
        done.append(item.li);
      } else {
        todo.append(item.li);
      }

      let show = data.every(function (item) {
        return item.checkbox.checked === true;
      });
      let show1 = data.every(function (item) {
        return item.checkbox.checked === false;
      });
      if (show1) {
        donetitle.style.display = "none";
        result.style.display = "block";
        result.textContent = "You didn't do anything🤨";
      } else if (show) {
        todotitle.style.display = "none";
        result.style.display = "block";
        result.textContent = "good luck😉";
      } else {
        result.style.display = "none";
        donetitle.style.display = "block";
        todotitle.style.display = "block";
      }
    });
  });
  deletebtn.addEventListener("click", function () {
    let x = this.getAttribute("class");
    let y = x.charAt(x.length - 1);
    document.getElementById(y).remove();
    //TEST حذف از DATA
    let z = data.findIndex(function (item) {
      return (item.li.id = y);
    });
    data.splice(z, 1);
  });
});
