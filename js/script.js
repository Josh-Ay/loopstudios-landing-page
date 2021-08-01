// jshint esversion:6

let hamburgerButton = $("button#hamburger");
let hamburgerImg = $("button img");
let navLinks = $(".top-container .nav-links");
let count = 1;

// list containing the images for the different hamburger states
imageSrcs = ["./images/icon-hamburger.svg", "./images/icon-close.svg"];


// remove open class from the navbar on scroll
$(window).scroll(()=> {
    hamburgerImg.attr("src", imageSrcs[0]);
    navLinks.removeClass("open"); 
});


// switch hamburger icon
hamburgerButton.click(()=> {
    if (count % 2 === 0) {
        hamburgerImg.attr("src", imageSrcs[0]);
        navLinks.removeClass("open"); 
    }
    else{
        hamburgerImg.attr("src", imageSrcs[1]);
        navLinks.addClass("open");
    }
    count++;
});
