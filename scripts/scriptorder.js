console.log("hi");

var bestelFormOrder = document.querySelector(".order article section");
var bestelFormOneOrder = document.querySelector(".order article section:first-of-type");
var bestelFormTwoOrder = document.querySelector(".order article section:nth-of-type(2)");
var bestelFormDayOrder = document.querySelector(".order article section:nth-of-type(3)");
var bestelFormLastOrder = document.querySelector(".order article section:last-of-type");

var buttonOneOrder = document.querySelector(".order article section:first-of-type button:first-of-type");
var buttonTwoOrder = document.querySelector(".order article section:first-of-type button:nth-of-type(2)");

var backButtonOneOrder = document.querySelector(".order article section:nth-of-type(2) button:nth-of-type(2)");
var backButtonTwoOrder = document.querySelector(".order article section:nth-of-type(3) button:last-of-type");
var backButtonThreeOrder = document.querySelector(".order article section:last-of-type button");

var vandaagButtonOrder = document.querySelector(".order article section:nth-of-type(3) button:first-of-type");
var AnderButtonOrder = document.querySelector(".order article section:nth-of-type(3) button:nth-of-type(2)");
var displaySettingOrder = bestelFormOrder.style.display;


function changeDisplayOrder() {

    if (bestelFormOneOrder != 'none') {
        bestelFormOneOrder.style.display = 'none';
        bestelFormTwoOrder.style.display = 'grid';
    }

    // if (bestelFormTwoOrder == 'grid') {
    //     bestelFormTwoOrder.style.display = 'none';
    //     bestelFormOneOrder.style.display = 'grid';
    // }
}

function changeDisplayOrderTwo() {

    if (bestelFormOneOrder != 'none') {
        bestelFormOneOrder.style.display = 'none';
        bestelFormDayOrder.style.display = 'grid';
    }

    // if (bestelFormDayOrder == 'grid') {
    //     bestelFormDayOrder.style.display = 'none';
    //     bestelFormOneOrder.style.display = 'grid';
    // }
}

function changeDisplayOrderThree() {

    if (bestelFormDayOrder != 'none') {
        bestelFormDayOrder.style.display = 'none';
        bestelFormLastOrder.style.display = 'grid';
    }
}


function goBackOrder() {
    if (bestelFormTwoOrder != 'none') {
        bestelFormTwoOrder.style.display = 'none';
        bestelFormOneOrder.style.display = 'grid';
    }

    if(bestelFormDayOrder != 'none'){
        bestelFormDayOrder.style.display = 'none';
        bestelFormOneOrder.style.display = 'grid';
    }

    if(bestelFormLastOrder != 'none'){
        bestelFormLastOrder.style.display = 'none';
        bestelFormDayOrder.style.display = 'grid';
    }
}



buttonOneOrder.addEventListener("click", changeDisplayOrder);
backButtonOneOrder.addEventListener("click", goBackOrder);

buttonTwoOrder.addEventListener("click", changeDisplayOrderTwo);
backButtonTwoOrder.addEventListener("click", goBackOrder);

vandaagButtonOrder.addEventListener("click", changeDisplayOrderThree);
AnderButtonOrder.addEventListener("click", changeDisplayOrderThree);
backButtonThreeOrder.addEventListener("click", goBackOrder);



var headerNav = document.querySelector("header nav");
var navButton = document.querySelector("header section > button:first-of-type");
function openNav() {
    // document.querySelector("header nav").style.height = "100%";
    headerNav.style.display = 'block';

  }
  
  /* Close */
  function closeNav() {
    if(headerNav == 'block'){
    // document.querySelector("header nav").style.height = "0%";
    headerNav.style.display = 'none';
  } 
}


  navButton.addEventListener("click", openNav);
  navButton.addEventListener("click", closeNav);