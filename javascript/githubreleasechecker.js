// Specify the URL of the JSON data
const url = "https://api.github.com/repos/Toby-420/text-adventure/releases/latest";


// Use the fetch() method to retrieve the data from the URL
fetch(url)
  .then(response => response.json()) // Convert the response to a JavaScript object
  .then(data => {
    // Retrieve the "body" field of the JSON data
    const bodyData = data.body;

    // Display the "body" field in the "release-description" div on your website
    const releaseDescription = document.getElementById("release-description");
    releaseDescription.innerHTML = bodyData;
  })
  .catch(error => {
    console.error(error); // Log any errors to the console
  });
