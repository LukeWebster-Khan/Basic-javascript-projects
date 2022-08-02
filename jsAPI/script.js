let obj;

function getData() {
  fetch("https://api.github.com/users/LukeWebster-Khan")
    .then((response) => {
      if (response.ok) {
        console.log("Success");
      } else {
        console.log("failure");
      }
      response.json().then((data) => (obj = data));

      return userData;
    })
    .then(() => console.log(obj));
}
console.log(obj);

const body = document.body;
console.log(body);
const h1 = document.createElement("h1");
h1.innerText = `${1 + 1}`;
body.append(h1);
