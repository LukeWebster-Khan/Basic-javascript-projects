function fetchData() {
  fetch("https://api.github.com/users/LukeWebster-Khan")
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw Error("error");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("app").innerHTML = data.name;
    })
    .catch((err) => console.log(err));
}
fetchData();
// const body = document.body;
// console.log(body);
// const h1 = document.createElement("h1");
// h1.innerHTML = `<div>
//  <h1>${obj}</h1>
// </div>`;
// body.append(h1);
