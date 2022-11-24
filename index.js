// Add your code here
function submitData(name, email) {
  const body = document.querySelector("body");
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, email: email }),
  })
    .then((res) => res.json())
    .then((data) => {
      body.append(data.id);
    })
    .catch((e) => {
      body.append(e);
    });
}
