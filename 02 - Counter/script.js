let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const styles = event.currentTarget.classList;
    if (styles.contains("dec")) {
      count--;
    } else if (styles.contains("inc")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count == 0) {
      value.style.color = "white";
    } else {
      value.style.color = "black";
    }
    value.innerHTML = count;
  });
});
