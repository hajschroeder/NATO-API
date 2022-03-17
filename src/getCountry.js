export default class CountryInfo {
  static getCountry(country) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}

