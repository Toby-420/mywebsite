const token = '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';
const url = `https: //api.github.com/repos/Toby-420/text-adventure/releases/latest`;
fetch(apiUrl, {
  headers: {
    Authorization: `token $ {
      accessToken
    }`,
  },
}).then(response = >{
  if (!response.ok) {
    throw new Error(`Failed to fetch release data: $ {
      response.statusText
    }`);
  }
  return response.json();
}).then(data = >{
  if (!data.body) {
    throw new Error('Release notes not found.');
  }
  const description = data.body;
  const releaseDescription = document.getElementById('release-description');
  releaseDescription.innerText = description;
}).
catch(error = >{
  console.error(error);
  const releaseDescription = document.getElementById('release-description');
  releaseDescription.innerText = 'Failed to fetch release notes.';