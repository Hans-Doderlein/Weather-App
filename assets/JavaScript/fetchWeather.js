function getWeather(cityName) {
  // URL of weather API

  const requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=767865139c275c7f96c76ff9ca1752e9&units=imperial`;

  // fetch request for weather api

  fetch(requestURL)
    .then((data) => data.json())
    .then((response) => {
      //if successful, runs displayWeather function, hides globe, main container now visible

      displayWeather(response);
      $("#swirlingGlobe").attr("style", "display:none");
      $("#mainContainer").attr("style", "display: block");
      storeCity({ cityName, requestURL });
    })
    .catch(() => {
      //if fails, displays alert message, resets screen to spinning globe

      $(".alert").attr("style", "visibility: visible");
      $("#swirlingGlobe").attr("style", "display:block");
      $("#mainContainer").attr("style", "display: none");

      // set alert message to timeout after 4 seconds

      setTimeout(() => {
        $(".alert").attr("style", "visibility: hidden");
      }, 4000);
    });
}
