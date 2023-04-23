const apiUrl = 'https://api.github.com/repos/Toby-420/text-adventure/releases/latest';
const accessToken = process.env.GITHUB_TOKEN;

fetch(apiUrl, {
  headers: {
    Authorization: `token ${accessToken}`,
  },
})
  .then(response => response.json())
  .then(data => {
    const description = data.body;
    const releaseDescription = document.getElementById('release-description');
    releaseDescription.innerText = description;
  })
  .catch(error => console.error(error));
