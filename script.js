fetch("http://github-actions.us-e2.cloudhub.io/api/test")
  .then((res) => res.json())
  .then((data) => console.log(data));

// fetch("http://github-actions.us-e2.cloudhub.io/api/test").then((res) =>
//   console.log(res.json)
// );
