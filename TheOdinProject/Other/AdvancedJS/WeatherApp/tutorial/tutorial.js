const button = document.getElementById("button");
const img = document.querySelector("img");
const textField = document.getElementById("searchQuery");
// Add a click event listener to the button

// fetch(
//   "https://api.giphy.com/v1/gifs/translate?api_key=Xr8ieUmPpHaf4sUZMWYmOv0ijcFaGHXh&s=cats",
//   {
//     mode: "cors",
//   }
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
//     img.src = response.data.images.original.url;
//   })
//   .catch(function (response) {
//     img.src =
//       "https://media4.giphy.com/media/13borq7Zo2kulO/giphy.gif?cid=cd63b521mx0j5nunce68pte7yaawty1nb7o3lirjtyg1p9xj&ep=v1_gifs_translate&rid=giphy.gif&ct=g";
//   });

button.addEventListener("click", function () {
  event.preventDefault();
  let searchText = textField.value;
  console.log(searchText);
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=Xr8ieUmPpHaf4sUZMWYmOv0ijcFaGHXh&s=" +
      searchText,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch(function (response) {
      img.src =
        "https://media4.giphy.com/media/13borq7Zo2kulO/giphy.gif?cid=cd63b521mx0j5nunce68pte7yaawty1nb7o3lirjtyg1p9xj&ep=v1_gifs_translate&rid=giphy.gif&ct=g";
    });
});
