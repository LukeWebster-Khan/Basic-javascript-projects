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
      let url = data.avatar_url;
      console.log(url);
      console.log(data);
      document.getElementById("app").insertAdjacentHTML(
        "beforebegin",
        `<div class="container">
        <div class="avatar">
        <img src="${url}" />
        </div>
        <div class="details">
        <h1>${data.name}</h1>
        <h2>${data.login}</h2>
        <p>${data.bio}</p>
        </div>
        <button>Edit Profile</button>
        <div class="follows">
        <p>${data.followers}</p>
        <p>${data.following}</p>
        </div>
        <ul class="card-details">
        <li>${data.company}</li>
        <li>${data.location}</li>
        </ul>
        </div>`
      );
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
