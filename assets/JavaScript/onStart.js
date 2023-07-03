//search event handler

$("#userCity").on("submit", (event) => {
  event.preventDefault();

  const search = $("#text-input");

  getWeather(search.val());

  search.val("");
});

//cklear button event handler

$("#clearSearches").on("click", (event) => {
  event.preventDefault();

  //deletes local storage object

  localStorage.removeItem("cities");

  //deletes all search buttons

  $("#previousSearches").html("");

  //displays swirrling globe

  $("#swirlingGlobe").attr("style", "display:block");
  $("#mainContainer").attr("style", "display: none");
});

loadPreviousCities();
