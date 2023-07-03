function createCityButtons(cityName) {
  let newButton = $("<button>");
  newButton.text(cityName.toUpperCase());
  newButton.addClass("button");

  newButton.on("click", () => {
    getWeather(cityName);
  });

  $("#previousSearches").prepend(newButton);
}

function storeCity({ cityName, requestURL }) {
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

  Object.keys(cities).forEach((i) => {
    createCityButtons(i);
  });
}
