const request = require('request');
const cheerio = require('cheerio');

// Replace http://example.com with the URL of the web page you want to download
request('http://example.com', (error, response, body) => {
  if (!error && response.statusCode === 200) {
    // Parse the HTML code using cheerio
    const $ = cheerio.load(body);

    // Select the form element with the ID "form-id"
    const form = $('nickname-form__Form-sc-1mjq176-0 eGhwKC');

    // Set the values of the input fields in the form
    form.find('input[name="nickname"]').val('me');

    // Submit the form
    form.submit();
  } else {
    // An error occurred
  }
});