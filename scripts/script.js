console.log("hi");

var bestelForm = document.querySelector(".order article section");
var bestelFormOne = document.querySelector(".order article section:first-of-type");
var bestelFormTwo = document.querySelector(".order article section:nth-of-type(2)");
var bestelFormDay = document.querySelector(".order article section:nth-of-type(3)");
var bestelFormLast = document.querySelector(".order article section:last-of-type");

var buttonOne = document.querySelector(".order article section:first-of-type button:first-of-type");
var buttonTwo = document.querySelector(".order article section:first-of-type button:nth-of-type(2)");

var backButtonOne = document.querySelector(".order article section:nth-of-type(2) button:nth-of-type(2)");
var backButtonTwo = document.querySelector(".order article section:nth-of-type(3) button:last-of-type");
var backButtonThree = document.querySelector(".order article section:last-of-type button");

var vandaagButton = document.querySelector(".order article section:nth-of-type(3) button:first-of-type");
var anderButtonr = document.querySelector(".order article section:nth-of-type(3) button:nth-of-type(2)");
var displaySetting = bestelFormOrder.style.display;



function goBackOrder() {
    if (bestelFormTwo != 'none') {
        bestelFormTwo.style.display = 'none';
        bestelFormOne.style.display = 'grid';
    }

    else if (bestelFormDay != 'none') {
        bestelFormDay.style.display = 'none';
        bestelFormOne.style.display = 'grid';
    }

    else if (bestelFormLast != 'none') {
        bestelFormLast.style.display = 'none';
        bestelFormDay.style.display = 'grid';
    }
}



buttonOne.addEventListener("click", function(){
    if(bestelFormOne != 'none') {
        bestelFormOne.style.display = 'none';
        bestelFormTwo.style.display = 'grid';
}
}
);

buttonTwo.addEventListener("click", function(){
    if (bestelFormOne != 'none') {
        bestelFormOne.style.display = 'none';
        bestelFormDay.style.display = 'grid';
    }
}

);


vandaagButton.addEventListener("click", function(){
    if (bestelFormDay != 'none') {
        bestelFormDay.style.display = 'none';
        bestelFormLast.style.display = 'grid';
    }
}

);


anderButton.addEventListener("click", function(){
    if (bestelFormDay != 'none') {
        bestelFormDay.style.display = 'none';
        bestelFormLast.style.display = 'grid';
    }
}
);

backButtonOne.addEventListener("click", goBackOrder);
backButtonTwo.addEventListener("click", goBackOrder);
backButtonThree.addEventListener("click", goBackOrder);



var headerNav = document.querySelector("header nav");
var navButton = document.querySelector("header ul li button:first-of-type ");
function openNav() {
    // document.querySelector("header nav").style.height = "100%";
    headerNav.style.display = 'block';

}

/* Close */
function closeNav() {
    if (headerNav == 'block') {
        // document.querySelector("header nav").style.height = "0%";
        headerNav.style.display = 'none';
    }
}


navButton.addEventListener("click", openNav);
navButton.addEventListener("click", closeNav);