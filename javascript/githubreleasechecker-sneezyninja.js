const url = "https://api.github.com/repos/Toby-420/sneezy-ninja/releases/latest";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const bodyData = data.body;
    const version = data.tag_name;
    
    // Convert lines starting with '-' to list items
    const formattedBodyData = bodyData
      .split('\n')
      .map(line => line.trim().startsWith('- ') ? `• ${line.slice(2)}` : line)
      .join('\n');
    
    // Convert Markdown links [link text](url) to HTML <a> tags
    const linkedBodyData = formattedBodyData
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    
    // Convert Markdown headers to HTML headers
    const headeredBodyData = linkedBodyData
      .replace(/^(#+)\s+(.*)$/gm, (match, hashes, content) => {
        const level = hashes.length;
        return `<h${level}>${content}</h${level}>`;
      });
    
    // Convert paragraphs to HTML paragraphs
    const paragraphedBodyData = headeredBodyData
      .split(/\n{2,}/)
      .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br>\n')}</p>`)
      .join('\n');
    
    const releaseDescription = document.getElementById("release-description");
    releaseDescription.innerHTML = "Version tag: "+version+paragraphedBodyData;
  })
  .catch(error => {
    console.error(error);
  });
