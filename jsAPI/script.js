console.log(
  fetch("https://api.github.com/users/LukeWebster-Khan").then((response) => {
    if (response.ok) {
      console.log("Success");
    } else {
      console.log("failure");
    }
    response.json().then((data) => console.log(data));
  })
);
console.log(data.login);
