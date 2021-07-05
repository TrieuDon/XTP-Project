let api = "https://todonew412.herokuapp.com/api";
let list = document.querySelector("tbody");
function getAll() {
  axios
    .get(`${api}/list`)
    .then(function (response) {
      console.log(response);
      let data = response.data;
      console.log(data);
      function myFunction(data) {
        list.innerHTML += `<tr>
                            <td>${data._id}</td>
                            <td>${data.name}</td>
                              <td><button type="button" class="btn btn-primary" >Edit</button>
                              <button type="button" class="btn btn-danger" onclick="deleteData(${data._id})">DELETE</button></td>
                          </tr>`;
      }
      data.forEach(myFunction);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
getAll();
function deleteData(id) {
  axios
    .delete(`${api}/delete/${id}`)
    .then(function (response) {
      console.log(response);
      window.location.href = "./fech-API.html";
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
function detailData() {
  let btn_button = document.getElementById("btn-button").value;

  axios
    .get(`${api}/get/${btn_button}`)
    .then(function (response) {
      // handle success
      console.log(response);
      const data = response.data;
      alert(`id: ${data._id}     name: ${data.name}`);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
detailData();
function newData() {
  let btn_button = document.getElementById("btn-button").value;
  axios
    .post(`${api}/create`, {
      name: btn_button.value,
    })
    .then(function (response) {
      window.location.href = "./fech-API.html";
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
