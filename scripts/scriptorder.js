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
var anderButton = document.querySelector(".order article section:nth-of-type(3) button:nth-of-type(2)");
var displaySetting = bestelForm.style.display;



backButtonOne.addEventListener("click", function () {
    if (bestelFormTwo != 'none') {
        bestelFormTwo.style.display = 'none';
        bestelFormOne.style.display = 'grid';
    }
}
);


buttonOne.addEventListener("click", function () {
    if (bestelFormOne != 'none') {
        bestelFormOne.style.display = 'none';
        bestelFormTwo.style.display = 'grid';
    }
}
);

buttonTwo.addEventListener("click", function () {
    if (bestelFormOne != 'none') {
        bestelFormOne.style.display = 'none';
        bestelFormDay.style.display = 'grid';
    }
}

);


vandaagButton.addEventListener("click", function () {
    if (bestelFormDay != 'none') {
        bestelFormDay.style.display = 'none';
        bestelFormLast.style.display = 'grid';
    }
}

);


anderButton.addEventListener("click", function () {
    if (bestelFormDay != 'none') {
        bestelFormDay.style.display = 'none';
        bestelFormLast.style.display = 'grid';
    }
}
);


backButtonOne.addEventListener("click", function () {
    if (bestelFormTwo != 'none') {
        bestelFormTwo.style.display = 'none';
        bestelFormOne.style.display = 'grid';
    }
}
);

backButtonTwo.addEventListener("click", function () {
    if (bestelFormDay != 'none') {
        bestelFormDay.style.display = 'none';
        bestelFormOne.style.display = 'grid';
    }
}
);

backButtonThree.addEventListener("click", function () {
    if (bestelFormLast != 'none') {
        bestelFormLast.style.display = 'none';
        bestelFormDay.style.display = 'grid';
    }
}
);



var headerNav = document.querySelector("header");
var hamburgerButton = document.querySelector("header ul li button:first-of-type");


function hamburgerOpen(){

    const headerNav = document.querySelector("header");
    headerNav.classList.toggle('menuOpen');
};


hamburgerButton.addEventListener("click", hamburgerOpen);