const token = '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';
const url = `https://api.github.com/repos/Toby-420/text-adventure/releases/latest`;

fetch(url, {
    headers: {
        Authorization: `token ${token}`
    }
})
.then(response => response.json())
.then(data => {
    const releaseDescription = data.body;
    // Use the releaseDescription however you like, for example:
    document.getElementById('release-description').innerText = releaseDescription;
})
.catch(error => console.error(error));
