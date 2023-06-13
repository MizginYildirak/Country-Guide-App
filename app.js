let searchBtn = document.getElementById("search-btn")
let countrysInp = document.getElementById("country-inp")
let result = document.getElementById("result")

searchBtn.addEventListener("click", () => {
  let country = countrysInp.value
  console.log(country)
  const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`
  console.log(url)
  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      result.innerHTML = `<img src="${
        responseJson[0].flags.svg
      }" class="flag-img"></img>
            <h2>${responseJson[0].name.common}</h2>
            <div class="wrapper">
            <div class="content-wrapper">
            <h4>Capital: </h4>
            <span>${responseJson[0].capital}</span>
            </div>
            <div class="content-wrapper">
            <h4>Continent: </h4>
            <span>${responseJson[0].continents}</span>
            </div>
            <div class="content-wrapper">
            <h4>Population: </h4>
            <span>${responseJson[0].population}</span>
            </div>
            <div class="content-wrapper">
            <h4>Currency: </h4>
            <span>${
              responseJson[0].currencies[
                Object.keys(responseJson[0].currencies)
              ].name
            }</span>
            </div>
            <div class="content-wrapper">
            <h4>Common Languages: </h4>
            <span>${Object.values(responseJson[0].languages)
              .toString()
              .split(",")
              .join(", ")}</span>
              </div>
            </div>
            `;
    })
})
