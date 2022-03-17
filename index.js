// Write your code here!

// Removing a main ID from HTML
const body = document.querySelector('#main');
body.remove()

let newHeader = document.createElement('h1')

newHeader.setAttribute("id","victory")

newHeader.innerHTML = "YOUR-NAME is the champion"