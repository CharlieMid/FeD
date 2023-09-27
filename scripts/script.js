// JavaScript Document
console.log("hi");


var bestelForm = document.querySelector(".index section:nth-of-type(2) article:nth-of-type(2) section");
var bestelFormOne = document.querySelector(".index section:nth-of-type(2) article:nth-of-type(2) section:first-of-type");
var bestelFormTwo = document.querySelector(".index section:nth-of-type(2) article:nth-of-type(2) section:nth-of-type(2)");

var buttonOne = document.querySelector(".index section:nth-of-type(2) article:nth-of-type(2) section:first-of-type button:first-of-type");
var buttonTwo = document.querySelector(".index section:nth-of-type(2) article:nth-of-type(2) section:nth-of-type(2) button:nth-of-type(2)");

var displaySetting = bestelForm.style.display;

function changeDisplayIndex(){

    if(bestelFormOne != 'none'){
    bestelFormOne.style.display = 'none';
    bestelFormTwo.style.display = 'grid';
    }

    }


function goBackIndex(){
    if(bestelFormTwo != 'none'){
        bestelFormTwo.style.display = 'none';
        bestelFormOne.style.display = 'grid';
        }
}




    buttonOne.addEventListener("click", changeDisplayIndex);
    buttonTwo.addEventListener("click", goBackIndex);


  
    // https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp

var headerNav = document.querySelector("header nav");
var navButton = document.querySelector("header div > button:first-of-type");
function openNav() {
    document.querySelector("header nav").style.height = "100%";
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
  
