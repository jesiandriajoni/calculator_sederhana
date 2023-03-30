
var buttonEqual = document.querySelector(".equal");
var buttonDelete = document.querySelector(".delete");
var inputText = document.querySelector(".output");
var clear = document.querySelector(".clear");
var actions = document.querySelectorAll(".action");
let evals = [];



buttonEqual.addEventListener("click", function () {
  let evaluate = inputText.value;
  let result = Function(`return ${evaluate}`);
  inputText.value = result();
});

buttonDelete.addEventListener("click", function () {
  inputText.value = 0;
  evals = [];
  console.log(evals);
});

clear.addEventListener("click", function () {
  evals.pop();
  inputText.value = evals.join(" ");
});


for (var i = 0; i < actions.length; i++) {
  actions[i].addEventListener("click", function (e) {
    evals.push(e.target.innerHTML);
    inputText.value = evals.join("");
  });
}

