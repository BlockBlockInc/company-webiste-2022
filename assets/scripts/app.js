(function () {
  "use strict";

  // const rotatorSections = document.querySelector(".rotator section");
  // const arrowDownBtn = document.getElementById("arrowDown");

  // arrowDownBtn.addEventListener(
  //   "click",
  //   () => {
  //     rotatorSections.scrollIntoView({ behavior: "smooth" });
  //   },
  //   false
  // );

  const arrowDownSectionBtn = document.querySelectorAll(".js-arrow-down");

  arrowDownSectionBtn.forEach((el) => {
    el.addEventListener(
      "click",
      () => {
        const parentSection = el.parentElement.closest("section");
        const nextSection = parentSection.nextElementSibling;
        if (nextSection === null) {
          const whoSection = document.getElementById("contact");
          whoSection.scrollIntoView({ behavior: "smooth" });
          return;
        }
        nextSection.scrollIntoView({ behavior: "smooth", alignToTop: true});
      },
      false
    );
  });

  let observerOptions = {
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const sideNavLinks = document.querySelectorAll(".side-nav a");

  // console.log("sideNavLinks:", sideNavLinks);

  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const filterHref = "#" + entry.target.id;
        const targetLink = [...sideNavLinks].filter((el) => {
          return el.hash == filterHref;
        });

        // console.log("targetLink: ", targetLink);

        if (document.querySelector(".side-nav a.active") && targetLink[0]) {
            document.querySelector(".side-nav a.active").classList.remove("active");
            targetLink[0].classList.add("active");
        }
        
        // console.log("entry.target", entry.target);
        // entry.target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // const observer2 = new IntersectionObserver(observerCallback, observerOption2);

  // function observerCallback2(entries, observer) {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       console.log("observerCallback2", entry.target);
  //       // entry.target.scrollIntoView({ behavior: "smooth" });
  //     }
  //   });
  // }

  document.querySelectorAll("main section").forEach((i) => {
    if (i) {
      observer.observe(i);
    }
  });

  // const observerRotator = new IntersectionObserver(entries => {
    
    
    
  // })

  // const options = {
  //   threshold: 0
  // }

  // function handleIntersection(entries) {
  //   const rotatorNav = document.querySelector(".rotator .rotator-nav")
  //   entries.forEach(entry => {
  //     // const intersecting = entry.isIntersecting
  //     // entry.target.style.backgroundColor = intersecting ? "blue" : "orange"
  //     if (entry.isIntersecting) {
  //       rotatorNav.classList.add("fixed");
  //       rotatorNav.classList.remove("hidden");
  //     } else {
  //       console.log("!entry.isIntersecting: ", entry);
  //       rotatorNav.classList.remove("fixed");
  //       rotatorNav.classList.add("hidden");

  //     }
  //   })
  // }

  // const observerRotator = new IntersectionObserver(handleIntersection);
  
  // observerRotator.observe(document.querySelector(".rotator"));

  // const rotator = document.querySelector(".rotator");

  // observer2.observe(rotator);

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
        // console.log(el.target.dataset.person);
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
