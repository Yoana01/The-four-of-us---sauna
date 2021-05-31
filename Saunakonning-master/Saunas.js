let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
var allCheckbox = document.querySelectorAll('input[type=checkbox]');//the button
var allProducts = Array.from(document.querySelectorAll('.column'));
var checked = {};//empty object


getChecked('Categories');
getChecked('Size');


//take the forEach function from Array.prototype and call it on links, which is a non-Array object, with some function as its argument.
Array.prototype.forEach.call(allCheckbox, function (el) {
  el.addEventListener('change', toggleCheckbox);
});

//to be visible or invisible
function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

//to change when it is clicked and to call this function
function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) { //map function-all items in an array or object to new array of items.
    return el.value;
  });
}

function setVisibility() {
  allProducts.map(function (el) {
    //if it checked and there is something to be shown on the screen
    var Categories = checked.Categories.length ? _.intersection(Array.from(el.classList), checked.Categories).length : true;
    var Size = checked.Size.length ? _.intersection(Array.from(el.classList), checked.Size).length : true;
    if (Categories && Size) {
      el.style.display = 'block';// to be shown on the screen 
    } else {
      el.style.display = 'none';//to be hidden
    }
  });
}
var slider = document.getElementById("myRange"); 
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
