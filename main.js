const navLinks = document.querySelectorAll('nav a');
const content = document.getElementById('content');
const title = document.getElementById('title');

for (let index = 0; index < navLinks.length; index++) {
  const navLink = navLinks[index];

  updateContent("Loading...", "Loading...");

  navLink.onclick = function(event) {
    const target = event.srcElement.href.split('#').pop();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/data/' + target + '.json');
    xhr.send();

    // Handle connection error
    xhr.onerror = function() {
      updateContent('Internet connection error...');
    };
    xhr.onload = function() {
      // Handle server error
      if (this.status != 200) {
        updateContent('Error retrieving content...');
        return;
      }

      try {
        const data = JSON.parse(xhr.responseText);

        updateContent(data.title, data.content);
      }
      catch {
        // Handle data error
        updateContent('Error parsing content...');
      }
    };
  }
}

function updateContent(newTitle, newContent = '') {
  title.innerHTML = newTitle;
  content.innerHTML = newContent;
}

navLinks[0].click();