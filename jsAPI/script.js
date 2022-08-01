console.log(
  fetch("https://api.github.com/users/LukeWebster-Khan").then((response) =>
    response.json().then((data) => console.log(data))
  )
);
