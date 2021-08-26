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
    value.innerHTML = count;
  });
});
