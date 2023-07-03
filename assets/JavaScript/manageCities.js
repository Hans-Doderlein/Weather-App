function createCityButtons(cityName) {
  //created buttons based on new searches

  let newButton = $("<button>");
  newButton.text(cityName.toUpperCase());
  newButton.addClass("button");

  newButton.on("click", () => {
    getWeather(cityName);
  });

  $("#previousSearches").prepend(newButton);
}

function storeCity({ cityName, requestURL }) {
  //stores new searches in local storage object

  let cities = localStorage.getItem("cities")
    ? JSON.parse(localStorage.getItem("cities"))
    : {};

  if (!(cityName in cities)) {
    createCityButtons(cityName);
    cities[cityName] = requestURL;
    localStorage.setItem("cities", JSON.stringify(cities));
  }
}

function loadPreviousCities() {
  let cities = localStorage.getItem("cities")
    ? JSON.parse(localStorage.getItem("cities"))
    : {};

  //on startup, loads search buttons based on local storage

  Object.keys(cities).forEach((i) => {
    createCityButtons(i);
  });
}
