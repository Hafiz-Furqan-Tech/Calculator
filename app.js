let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        document.querySelector(".input").value = string;
      } catch (error) {
        document.querySelector(".input").value = "Error";
      }
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector(".input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector(".input").value = string;
    }
  });
});
