$("#userCity").on("submit", (event) => {
  event.preventDefault();

  const search = $("#text-input");

  getWeather(search.val());

  search.val("");
});

$("#clearSearches").on("click", (event) => {
  event.preventDefault();
  localStorage.removeItem("cities");
  $("#previousSearches").html("");

  $("#swirlingGlobe").attr("style", "display:block");
  $("#mainContainer").attr("style", "display: none");
});

loadPreviousCities();
