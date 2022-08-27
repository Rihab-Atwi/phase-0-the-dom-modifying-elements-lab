// Write your code here!
const mainVar = document.getElementById(`main`);
mainVar.remove();

const newHeader = document.createElement(`h1`);
document.body.appendChild(newHeader);
newHeader.id = `victory`;
newHeader.innerHTML = `Anthony is the champion`;