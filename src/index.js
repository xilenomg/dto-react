import './style.scss';

 function component() {
  var element = document.createElement('div');
  element.innerHTML = "Dito"
   return element;
}

 let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

 if (module.hot) {
  module.hot.accept('./', function () {
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
} 