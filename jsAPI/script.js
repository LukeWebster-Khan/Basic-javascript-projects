let obj;
fetch("https://api.github.com/users/LukeWebster-Khan")
  .then((res) => res.json())
  .then((data) => (obj = data))
  .then(() => console.log(obj));
console.log(obj);

const body = document.body;
console.log(body);
const h1 = document.createElement("h1");
h1.innerHTML = `<div>
 <h1>${obj}</h1>
</div>`;
body.append(h1);
