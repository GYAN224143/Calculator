

var display = document.getElementById("display");

let clickBtn = document.querySelectorAll(".button");
let btnresult = document.querySelector("#btnresult");
for (let item of clickBtn) {
  item.addEventListener("click", () => {
    let value = item.getAttribute("data-value");
    console.log("clickBtn", value);
    //result()--------------------------------;
    display.innerHTML += value;
    console.log("btnresult", btnresult);

 
  });
}

/// final result-------------------------------
btnresult.addEventListener("click", function () {
  display.innerText = eval(display.innerHTML);
  console.log("vdsfd", eval(display.innerHTML));
});

/// clear---------------------------------------

var clearData = document.querySelector(".clearBtn");
clearData.addEventListener("click", () => {
  display.innerHTML = "";
});

//// backspace------------------------------------- 
var backspace = function () {
  display.innerHTML = display.innerHTML.substring(
    0,
    display.innerHTML.length - 1
  );
};
