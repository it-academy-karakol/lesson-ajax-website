const navLinks = document.querySelectorAll('nav a');
const content = document.getElementById('content');

for (let index = 0; index < navLinks.length; index++) {
  const navLink = navLinks[index];

  navLink.onclick = function(event) {
    const target = event.srcElement.href.split('#').pop();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/data/' + target + '.html');
    xhr.send();
    xhr.onload = function() {
      content.innerHTML = xhr.responseText;
    }
  }
}