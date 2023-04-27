const url = "https://api.github.com/repos/Toby-420/text-adventure/releases/latest";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const bodyData = data.body;

    // Add newline or <br> after fullstop and space, and before capital letter
    const formattedBodyData = bodyData.replace(/\. +([A-Z])/g, '.<br>$1');

    const releaseDescription = document.getElementById("release-description");
    releaseDescription.innerHTML = formattedBodyData;
  })
  .catch(error => {
    console.error(error);
  });
