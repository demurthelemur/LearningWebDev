// 5d716396196c40b6b59124903231512
//api: "https://api.weatherapi.com/v1/current.json?key=5d716396196c40b6b59124903231512&q=london"

const searchButton = document.querySelector("#button");
const searchQuery = document.querySelector("#searchQuery");

searchButton.addEventListener("click", async function () {
  event.preventDefault();
  if (searchQuery.value != "") {
    const query = searchQuery.value;
    try {
      const JSONData = await fetch(
        "https://api.weatherapi.com/v1/current.json?key=5d716396196c40b6b59124903231512&q=" +
          query
      );
      const dataParsed = await JSONData.json();
      console.log(dataParsed.current.temp_c);
    } catch (error) {
      console.log(error);
      alert("Invalid Search Query");
    }
  } else {
    alert("Empty Search Value");
  }
});
