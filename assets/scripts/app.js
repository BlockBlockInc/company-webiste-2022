(function() {
	"use strict";

	const rotator = document.querySelector(".rotator section");

    const arrowDownBtn = document.getElementById("arrowDown");

    arrowDownBtn.addEventListener("click", ()=> {
        rotator.scrollIntoView({behavior: "smooth"});
    }, false)
    
    // console.log("rotator:", rotator);

    const arrowDownSectionBtn = document.querySelectorAll(".js-arrow-down");
    
    arrowDownSectionBtn.forEach( el => {
        el.addEventListener("click", ()=>{
            const parentSection = el.parentElement.closest('section');
            const nextSection = parentSection.nextElementSibling;
            if (nextSection === null ) {
                const whoSection = document.getElementById("who");
                whoSection.scrollIntoView({behavior: "smooth"});
                return;
            }
            nextSection.scrollIntoView({behavior: "smooth"});
        }, false);
    });

    let observerOptions = {
        rootMargin: '0px',
        threshold: 0.5
    }
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sideNavLinks = document.querySelectorAll(".side-nav a");

    

    function observerCallback(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const filterHref = "#" + entry.target.id;
                const targetLink = [...sideNavLinks].filter(el => { 
                    return el.hash == filterHref;
                 });

                 document.querySelector(".side-nav a.active").classList.remove("active");
                 targetLink[0].classList.add("active");
              //do something
            }
        });
    };
    
    document.querySelectorAll(".projects section").forEach((i) => {
        if (i) {
            observer.observe(i);
        }
    });
    
      
})();