const navLinks = document.querySelectorAll('nav a');
const content = document.getElementById('content');
const title = document.getElementById('title');

for (let index = 0; index < navLinks.length; index++) {
  const navLink = navLinks[index];

  navLink.onclick = function(event) {
    const target = event.srcElement.href.split('#').pop();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/data/' + target + '.json');
    xhr.send();
    xhr.onload = function() {
      try {
        const data = JSON.parse(xhr.responseText);

        title.innerHTML = data.title;
        content.innerHTML = data.content;
      }
      catch {}
    }
  }
}

navLinks[0].click();