const axios = require("axios");
class Wp {
  constructor(url, username, password) {
    this.url = url;
    this.username = username;
    this.password = password;
    this.setRestUrl();
  }

  get getPosts() {
    return this.url + "posts";
  }

  setRestUrl() {
    this.url = this.url + "/wp-json/wp/v2/";
  }
}

const WordPress = new Wp("https://shimion.com", "dev", "HTMH2012");

axios
  .get(WordPress.getPosts)
  .then(function(response) {
    // handle success
    console.log(response);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });
