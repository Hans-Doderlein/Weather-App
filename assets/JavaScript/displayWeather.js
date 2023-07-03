function displayWeather(weatherObject) {
  // displays the city name in the main container

  $("#cityName").text(weatherObject.city.name);

  let dayIndex = 0;

  const {
    weather: [{ main: dayWeather }],
  } = weatherObject.list[0];

  displayBackground(dayWeather);

  // dynamically updates the weather info for all cards

  for (let idIndex = 0; idIndex <= 5; idIndex++) {
    const {
      dt_txt,
      main: { temp, humidity },
      wind: { speed },
      weather: [{ icon }],
    } = weatherObject.list[dayIndex];

    // formats date

    let today = dayjs(dt_txt).format("(M/DD/YYYY)");
    $(`#day${idIndex}Date`).html(`&nbsp;${today}`);

    let imageSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    $(`#day${idIndex}Icon`).attr("src", imageSrc);

    $(`#day${idIndex}Temp`).html(`Temp: ${temp}&deg;F`);

    $(`#day${idIndex}Wind`).text(`Wind: ${speed} MPH`);

    $(`#day${idIndex}Humidity`).text(`Humidity: ${humidity} %`);

    // correctly changed dayIndex based on current loop

    if (idIndex == 4) {
      dayIndex += 7;
    } else {
      dayIndex += 8;
    }
  }
}
