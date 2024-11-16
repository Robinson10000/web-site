const menubtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menubtnicon = menubtn.querySelector("i");

menubtn.addEventListener("click", ()=> {
    navlinks.classList.toggle("open");

    const isopen = navlinks.classList.contains("open")
    menubtnicon.setAttribute("class", isopen?"ri-close-line":"ri-menu-line")
});

navlinks.addEventListener("click", () => {
    navlinks.classList.remove("open");
    menubtnicon.setAttribute("class", "ri-menu-line");
});

const scrollRevealoption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
scrollReveal().reveal(".header__container p", {
  ...scrollRevealoption,
});

scrollRevealoption().reveal(".header__container h1", {
    ...scrollRevealoption,
    display: 500,
});

// about container
scrollReveal().reveal(".about__image img", {
    ...scrollRevealoption,
    origin: "left",
  });

  scrollRevealoption().reveal(".about__content .section__subheader", {
    ...scrollRevealoption,
    display: 500,
});

scrollRevealoption().reveal(".about__content .section__header", {
    ...scrollRevealoption,
    display: 1000,
});

scrollRevealoption().reveal(".about__content .section__discription", {
    ...scrollRevealoption,
    display: 1500,
});

scrollRevealoption().reveal(".about__btn", {
    ...scrollRevealoption,
    display: 2000,
});

// room container
scrollReveal().reveal(".room__card", {
    ...scrollRevealoption,
    interval: 500,
});


// service container
scrollReveal().reveal(".service__list li", {
    ...scrollRevealoption,
    interval: 500,
    origin: "right",
});






