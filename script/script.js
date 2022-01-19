document.addEventListener("DOMContentLoaded", function () {
  const api = {
    key: "6ad272b245adc1ce3cdfbea58aa67157",
    baseurl: "http://api.openweathermap.org/data/2.5/",
  };
  const searchBox = document.querySelector(".search-box");
  searchBox.addEventListener("keypress", setQuery);
  function setQuery(e) {
    if (e.keyCode === 13) {
      console.log(searchBox.value);
      getResult(searchBox.value);
    }
  }
  function getResult(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((weather) => weather.json())
      .then((weather) => displayResult(weather));
  }
  function displayResult(weather) {
    console.log(weather);

    const city = document.querySelector(".city");
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    const temp = document.querySelector(".main-temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}°C`;

    const weatherEl = document.querySelector(".weather");
    weatherEl.innerHTML = `${weather.weather[0].main}`;

    const hilow = document.querySelector(".hi-low");
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(
      weather.main.temp_max
    )}°C`;
  }
  const now = new Date();
  const date = document.querySelector(".date");
  date.innerHTML = dateBuilder(now);

  function dateBuilder(e) {
    let days = [
      "Monday",
      "Tuesday",
      "Wendeyday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let day = days[e.getDay()];
    let month = months[e.getMonth()];
    let date = e.getDate();
    let year = e.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  }
});
