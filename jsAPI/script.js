function getData() {
  fetch("https://api.github.com/users/LukeWebster-Khan").then((response) => {
    if (response.ok) {
      console.log("Success");
    } else {
      console.log("failure");
    }
    response.json().then((data) => console.log(data));
    let userData = data;
    return data;
  });
}
let data = getData();
console.log(data);

const body = document.body;
const h1 = document.createElement("h1");
h1.innerText = "Test Header";
body.append(h1);
