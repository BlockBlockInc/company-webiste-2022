(function () {
  "use strict";

  const rotatorSections = document.querySelector(".rotator section");
  const arrowDownBtn = document.getElementById("arrowDown");

  arrowDownBtn.addEventListener(
    "click",
    () => {
      rotatorSections.scrollIntoView({ behavior: "smooth" });
    },
    false
  );

  const arrowDownSectionBtn = document.querySelectorAll(".js-arrow-down");

  arrowDownSectionBtn.forEach((el) => {
    el.addEventListener(
      "click",
      () => {
        const parentSection = el.parentElement.closest("section");
        const nextSection = parentSection.nextElementSibling;
        if (nextSection === null) {
          const whoSection = document.getElementById("who");
          whoSection.scrollIntoView({ behavior: "smooth" });
          return;
        }
        nextSection.scrollIntoView({ behavior: "smooth" });
      },
      false
    );
  });

  let observerOptions = {
    rootMargin: "0px",
    threshold: 0.5,
  };

  let observerOption2 = {
    rootMargin: "0px",
    threshold: 0.75,
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const sideNavLinks = document.querySelectorAll(".side-nav a");

  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const filterHref = "#" + entry.target.id;
        const targetLink = [...sideNavLinks].filter((el) => {
          return el.hash == filterHref;
        });
        entry.target.scrollIntoView({ behavior: "smooth" });
        document.querySelector(".side-nav a.active").classList.remove("active");
        targetLink[0].classList.add("active");
      }
    });
  }

  const observer2 = new IntersectionObserver(observerCallback, observerOption2);

  function observerCallback2(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  document.querySelectorAll(".projects section").forEach((i) => {
    if (i) {
      observer.observe(i);
    }
  });

  const rotator = document.querySelector(".rotator");

  observer2.observe(rotator);

  const people = document.querySelectorAll(".people button");

  people.forEach((el) => {
    el.addEventListener(
      "click",
      (el) => {
        document
          .querySelector(".people button.ring")
          .classList.remove("ring");
        document
          .querySelector(".people button.ring-white")
          .classList.remove("ring-white");
        el.target.classList.add("ring");
        el.target.classList.add("ring-white");
        console.log(el.target.dataset.person);
        document
          .querySelector(".bios article.active")
          .classList.remove("active");
        document
          .getElementById(el.target.dataset.person)
          .classList.add("active");
      },
      false
    );
  });
})();
