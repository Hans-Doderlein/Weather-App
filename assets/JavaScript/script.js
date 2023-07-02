function getWeather(cityName) {
  const requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=767865139c275c7f96c76ff9ca1752e9&units=imperial`;

  fetch(requestURL)
    .then((data) => data.json())
    .then((response) => {
      displayWeather(response);
      $("#swirlingGlobe").attr("style", "display:none");
      $("#mainContainer").attr("style", "display: block");
      storeCity({ cityName, requestURL });
    })
    .catch(() => {
      $(".alert").attr("style", "visibility: visible");
      $("#swirlingGlobe").attr("style", "display:block");
      $("#mainContainer").attr("style", "display: none");

      setTimeout(() => {
        $(".alert").attr("style", "visibility: hidden");
      }, 4000);
    });
}

function displayWeather(weatherObject) {
  $("#cityName").text(weatherObject.city.name);

  let dayIndex = 0;

  for (let idIndex = 0; idIndex < 6; idIndex++) {
    let today = dayjs(weatherObject.list[dayIndex].dt_txt).format(
      "(M/DD/YYYY)"
    );
    $(`#day${idIndex}Date`).html(`&nbsp;${today}`);

    let iconId = weatherObject.list[dayIndex].weather[0].icon;

    let imageSrc = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

    $(`#day${idIndex}Icon`).attr("src", imageSrc);

    $(`#day${idIndex}Temp`).html(
      `Temp: ${weatherObject.list[dayIndex].main.temp}&deg;F`
    );

    $(`#day${idIndex}Wind`).text(
      `Wind: ${weatherObject.list[dayIndex].wind.speed} MPH`
    );

    $(`#day${idIndex}Humidity`).text(
      `Humidity: ${weatherObject.list[dayIndex].main.humidity} %`
    );

    dayIndex += 7;
  }
  console.log(weatherObject);
}

$("#userCity").on("submit", (event) => {
  event.preventDefault();

  getWeather($("#text-input").val());
});

let cities = localStorage.getItem("cities")
  ? JSON.parse(localStorage.getItem("cities"))
  : {};

function storeCity({ cityName, requestURL }) {
  if (!(cityName in cities)) {
    createCityButtons(cityName);
    cities[cityName] = requestURL;
    localStorage.setItem("cities", JSON.stringify(cities));
  }
}

function loadPreviousCities() {
  Object.keys(cities).forEach((i) => {
    createCityButtons(i);
  });
}

loadPreviousCities();

function createCityButtons(cityName) {
  let newButton = $("<button>");
  newButton.text(cityName);
  newButton.addClass("button");
  $("#previousSearches").append(newButton);

  newButton.on("click", () => {
    getWeather(cityName);
  });
}
