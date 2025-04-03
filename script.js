let menu = document.querySelector(".menu");
function opens() {
  document.querySelector("ul").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("yh");
}

ScrollReveal().reveal(".ff", {
  delay: 1000,
  origin: "bottom",
  duration: 1000,
  distance: "100px",
  opacity: 0,
});
ScrollReveal().reveal(".fg", {
  delay: 1200,
  origin: "bottom",
  duration: 1200,
  distance: "100px",
  opacity: 0,
});
ScrollReveal().reveal(".kk", {
  delay: 1300,
  duration: 1500,
  origin: "bottom",
  distance: "100px",
  opacity: 0,
});
ScrollReveal().reveal(".jj", {
  delay: 1400,
  origin: "bottom",
  duration: 1800,
  distance: "100px",
  opacity: 0,
});
ScrollReveal().reveal(".first_btn", {
  delay: 1300,
  origin: "bottom",
  duration: 1900,
  distance: "100px",
  opacity: 0,
});
ScrollReveal().reveal(".nb", 
{ delay: 80, 
origin: "bottom", 
duration: 1000, 
distance: "100px", 
opacity: 0, 
 });
ScrollReveal().reveal(".nn", 
{ delay: 50, 
origin: "bottom", 
duration: 1000, 
distance: "100px", 
opacity: 0, 
 });

ScrollReveal().reveal(".second_slide", {
  delay: 1900,
  origin: "bottom",
  duration: 1900,
  distance: "100px",
  opacity: 0,
});
ScrollReveal().reveal(".gg", {
  delay: 50,
  origin: "top",
  duration: 1000,
  distance: "50px",
  opacity: 0,
});
ScrollReveal().reveal(".ft", {
  delay: 50,
  origin: "bottom",
  duration: 1100,
  distance: "100px",
  opacity: 0,
});
ScrollReveal().reveal(".fs", {
  delay: 50,
  origin: "bottom",
  duration: 1150,
  distance: "100px",
  opacity: 0,
});
ScrollReveal().reveal(".ft", {
  delay: 50,
  origin: "bottom",
  duration: 1200,
  distance: "100px",
  opacity: 0,
});
ScrollReveal().reveal(".fp", {
  delay: 50,
  origin: "bottom",
  duration: 1200,
  distance: "100px",
  opacity: 0,
});
ScrollReveal().reveal(".fd", {
  delay: 50,
  origin: "bottom",
  duration: 1200,
  distance: "100px",
  opacity: 0,
});
ScrollReveal().reveal(".nx", {
  delay: 500,
  origin: "bottom",
  duration: 700,
  distance: "100px",
  opacity: 0,
});
ScrollReveal().reveal(".swiperb", {
  delay: 500,
  origin: "bottom",
  duration: 700,
  distance: "100px",
  opacity: 0,
});
ScrollReveal().reveal(".ht", {
  delay: 500,
  origin: "left",
  duration: 700,
  distance: "100px",
  opacity: 0,
});
 const faqs = document.querySelectorAll(".faqs");
 
faqs.forEach(faq => { 
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
})

 function toggleIcon() {
  const icon = element.querySelector('i');
  if (icon.classList.contains('fa-plus')) {
    icon.classList.replace('fa-plus', 'fa-minus');
  } else {
    icon.classList.replace('fa-minus', 'fa-plus');
  }
}