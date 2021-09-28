const shuffleBtn = document.querySelector("#shuffle-btn");
const sortBtn = document.querySelector("#sort-btn");

const ul = document.querySelector('ul');

console.log(ul.children.length)
const shuffleElements = () => {
    for (let i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
}

const sortElements = () => {
let switchElement, i;
  let switching = true;
  while (switching) {
    switching = false;
    let listElements = ul.getElementsByTagName("LI");
    for (i = 0; i < (listElements.length - 1); i++) {
        switchElement = false;
      if (listElements[i].innerHTML.toLowerCase() > listElements[i + 1].innerHTML.toLowerCase()) {
        switchElement = true;
        break;
      }
    }
    if (switchElement) {
      listElements[i].parentNode.insertBefore(listElements[i + 1], listElements[i]);
      switching = true;
    }
  }
}


shuffleBtn.addEventListener("click", shuffleElements);
sortBtn.addEventListener("click", sortElements);

