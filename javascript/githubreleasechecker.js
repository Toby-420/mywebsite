      const token = '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';
      const url = `https://api.github.com/repos/Toby-420/text-adventure/releases/latest`;

      fetch(url, {
          headers: {
              Authorization: `token ${token}`
          }
      })
      .then(response => {
          if (!response.ok) {
              throw new Error(`Failed to fetch release data: ${response.statusText}`);
          }
          return response.json();
      })
      .then(data => {
          if (!data.body) {
              throw new Error('Release notes not found.');
          }
          const releaseDescription = data.body;
          document.getElementById('release-description').innerText = releaseDescription;
      })
      .catch(error => {
          console.error(error);
          document.getElementById('release-description').innerText = 'Failed to fetch release notes.';
      });