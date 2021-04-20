import "./styles.scss";
import sumNumbers from "./utils";

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const bnt = document.getElementById("sumBtn");
const result = document.getElementById("result");

bnt.addEventListener("click", (e) => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  result.innerHTML = sumNumbers(num1, num2);
});
