function displayBackground(dayWeather) {
  if (dayWeather == "Clear") {
    let clearGIF =
      "background-image: url(https://media3.giphy.com/media/o7R0zQ62m8Nk4/giphy.gif?cid=ecf05e47m15flms5yjuhz47h6wmxvhw89gebmeacpgm0gqx8&ep=v1_gifs_search&rid=giphy.gif&ct=g); color: yellow";
    $(".currentWeather").attr("style", clearGIF);
  }

  if (dayWeather == "Snow") {
    let snowGIF =
      "background-image: url(https://media4.giphy.com/media/OWxrxRHY6afRu/giphy.gif?cid=ecf05e47v66aqxdkmaxlpbfc0054dgqmimkqluyp33faahbc&ep=v1_gifs_search&rid=giphy.gif&ct=g); color: yellow";

    $(".currentWeather").attr("style", snowGIF);
  }

  if (dayWeather == "Rain") {
    let rainGIF =
      "background-image: url(https://media4.giphy.com/media/vnNHyroyEwb4s/giphy.gif?cid=ecf05e47unv6ydyxe66o90722su60g2tv3arwbbp0nsj91fx&ep=v1_gifs_search&rid=giphy.gif&ct=g); color: white";

    $(".currentWeather").attr("style", rainGIF);
  }

  if (dayWeather == "Drizzle") {
    let drizzleGIF =
      "background-image: url(https://media4.giphy.com/media/vnNHyroyEwb4s/giphy.gif?cid=ecf05e47unv6ydyxe66o90722su60g2tv3arwbbp0nsj91fx&ep=v1_gifs_search&rid=giphy.gif&ct=g); color: white";

    $(".currentWeather").attr("style", drizzleGIF);
  }

  if (dayWeather == "Thunderstorm") {
    let thunderGIF =
      "background-image: url(https://media3.giphy.com/media/3osxYzIQRqN4DOEddC/giphy.gif?cid=ecf05e47ad3f9fre3qou9ui3vw6xfepgactmqi8eafeaxasy&ep=v1_gifs_search&rid=giphy.gif&ct=g); color: white";

    $(".currentWeather").attr("style", thunderGIF);
  }

  if (dayWeather == "Clouds") {
    let cloudsGIF =
      "background-image: url(https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGV0OHB2dGp6MnRjYjBweWxrMXFqa2dydWk4amlnejBzc2E0cjY5NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qq5gwamAHVofm/giphy.gif";

    $(".currentWeather").attr("style", cloudsGIF);
  }
}
