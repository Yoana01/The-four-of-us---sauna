var allCheckbox = document.querySelectorAll('input[type=checkbox]'); //the button
var allProducts = Array.from(document.querySelectorAll('.column'));
var checked = {}; //empty object


getChecked('Categories');


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
    if (Categories) {
      el.style.display = 'block'; // to be shown on the screen 
    } else {
      el.style.display = 'none'; //to be hidden
    }
  });
}
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}


//load more
var dots = document.getElementById("dots"); // This the text that people see first
var moreText = document.getElementsById("more"); //The text that will show after clicking the button
var btnText = document.getElementById("myBtn"); //the button

//this function will say if var dots are not displayed, then to show it. the button text to be read more and the moreText not to be
//display, else the dots not to be display, btnText to be Read less and the text ti be display
function moreInfo() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Load more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    doting.style.display = "none";
    btnText.innerHTML = "Load less";
    moreText.style.display = "inline";
  }
}




function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementsByClassName(".column");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByClassName(".items")
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}