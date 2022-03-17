import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './css/styles.css';
import CountryInfo from './getCountry.js';


function clearFields() {
  $("#country").val("");
  $(".showCountry").text("");
  $(".showRegion").text("");
  $(".showPopulation").text("");
}


$(document).ready(function () {
  $("#countryInfo").click(function () {
    let country = $("#country").val();
    clearFields();
    let promise = CountryInfo.getCountry(country);
    promise.then(function(response) {
      const [data] = JSON.parse(response);
      $('.showCountry').text(`You have chosen ${data.name.common}`);
      $('.showRegion').text(`The region of this country is ${data.region}`);
      $('.showPopulation').text(`The population of this country is ${data.population}`);
      $('.showError').text(`There was an error process your request:`);
    });
  });
});
