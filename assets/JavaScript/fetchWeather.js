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
