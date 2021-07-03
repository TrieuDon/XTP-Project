let btn_button = document.getElementById("btn-button");
let btn_get = document.getElementById("btn-get");
let btn_Post = document.getElementById("btn-post");

btn_get.addEventListener("click", () => {
  let btn_button = document.getElementById("btn-button").value;
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    console.log(this.responseText);
    const obj = JSON.parse(this.responseText);
    let str = "";
    for (let i = 0; i < obj.length; i++) {
      str += `<tr>
                  <td>${obj[i]._id}</td>
                  <td>${obj[i].name}
                 <button class="btn btn-primary" id="update" style="float: right; margin-left:10px">update</button>
                 <button class="btn btn-danger" id="remove" style="float: right; margin-left:10px">delete</button>
                  </td>
              </tr>`;
    }
    document.getElementById("body-table").innerHTML = str;
  };
  xhttp.open("GET", "https://todonew412.herokuapp.com/api/list", true);
  xhttp.send();
});

btn_Post.addEventListener("click", () => {
  let btn_button = document.getElementById("btn-button").value;

  let obj = {
    name: btn_button,
  };
  fetch("https://http://todonew412.herokuapp.com/api/create", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 0,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  btn_get.click();
});
