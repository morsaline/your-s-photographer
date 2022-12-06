export const setAuthToken = (result) => {
  const curUser = {
    email: result.user.email,
  };

  fetch("https://youteber-server.vercel.app/jwt", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(curUser),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      localStorage.setItem("photographer-token", data.token);
    })
    .catch((err) => console.log(err));
};
