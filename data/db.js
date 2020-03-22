const axios = require("axios");

class Wp {
  constructor(url, username, password) {
    this.url = url;
    this.username = username;
    this.password = password;
    this.setRestUrl();
  }

  get getPosts() {
    return `${this.url}posts`;
  }

  setRestUrl() {
    this.url += "/wp-json/wp/v2/";
  }
}

const WordPress = new Wp("https://shimion.com", "dev", "HTMH2012");

axios
  .get(WordPress.getPosts)
  .then(response => {
    // handle success
    console.log(response);
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
  .finally(() => {
    // always executed
  });
