//

// pratice js with html & css
// const h1 = document.querySelector(".heading-primary");
// h1.style.backgroundColor = "yellow";
// h1.style.padding = "5rem";

// const fname = document.querySelector(".heading-primary");
// fname.textContent = "Hamid";

// making footer current year
const currYear = document.querySelector(".year");
const tempyear = new Date().getFullYear();
currYear.textContent = tempyear;

const navBtn = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
navBtn.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLInks = document.querySelectorAll("a:link");
allLInks.forEach(function (link) {
  if (link.classList.contains("nav-inner")) {
    headerEl.classList.toggle("nav-open");
  }
});
const heroSectionEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  // in the viewport
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSectionEl);

// browser bug fix
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
