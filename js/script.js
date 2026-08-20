/*=====================================
    MOBILE MENU
======================================*/
/*=====================================
    MOBILE MENU
=====================================*/

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const menuIcon = menuToggle ? menuToggle.querySelector('i') : null;

if (menuToggle && navbar && menuIcon) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');

        if (navbar.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });
}

/*=====================================
    HOME DROPDOWN (MOBILE)
======================================*/

const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdown > .nav-link");

if (dropdown && dropdownLink) {
    dropdownLink.addEventListener("click", function (e) {

        if (window.innerWidth <= 1024) {

            e.preventDefault();

            dropdown.classList.toggle("active");

        }

    });
}

/*=====================================
    CLOSE MENU WHEN LINK IS CLICKED
======================================*/


/*=====================================
    CLOSE MENU WHEN WINDOW RESIZES
======================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 1024) {

        if (navbar) {
            navbar.classList.remove("active");
        }

        if (dropdown) {
            dropdown.classList.remove("active");
        }

        if (menuIcon) {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }

    }

});

/*=====================================
    STICKY HEADER
======================================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});
/**home1 hero**/ 
/*=====================================
    HERO SLIDER
======================================*/

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".hero-next");
const prevBtn = document.querySelector(".hero-prev");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    dots.forEach((dot)=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}

if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
}

if (prevBtn) {
    prevBtn.addEventListener("click", prevSlide);
}

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide = index;

        showSlide(currentSlide);

    });

});

if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}



/*home1*/
/*=====================================
    ABOUT COUNTER
======================================*/

/*=====================================
    HOME COUNTER
=====================================*/

const aboutSection = document.querySelector(".about");

if (aboutSection) {

    const counters = document.querySelectorAll(".counter");

    let counterStarted = false;

    function startCounter(){

        if(counterStarted) return;

        const sectionTop = aboutSection.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            counterStarted = true;

            counters.forEach(counter=>{

                const target = +counter.dataset.target;

                let count = 0;

                const increment = Math.ceil(target / 120);

                const updateCounter = ()=>{

                    count += increment;

                    if(count >= target){

                        counter.innerHTML =
                            target >= 1000 ? (target/1000)+"K+" : target+"+";

                        return;

                    }

                    counter.innerHTML = count;

                    requestAnimationFrame(updateCounter);

                };

                updateCounter();

            });

        }

    }

    window.addEventListener("scroll", startCounter);

    window.addEventListener("load", startCounter);

}

/*=====================================
    MENU FILTER
======================================*/

const menuTabs = document.querySelectorAll(".menu-tab");
const menuCards = document.querySelectorAll(".menu-card");

menuTabs.forEach(tab=>{

    tab.addEventListener("click",()=>{

        menuTabs.forEach(btn=>btn.classList.remove("active"));

        tab.classList.add("active");

        const filter = tab.dataset.filter;

        menuCards.forEach(card=>{

            if(filter === "all"){

                card.style.display = "block";

            }

            else if(card.classList.contains(filter)){

                card.style.display = "block";

            }

            else{

                card.style.display = "none";

            }

        });

    });

});

/*=====================================
    GALLERY FILTER
======================================*/

const galleryBtns = document.querySelectorAll(".home-gallery-btn");
const galleryItems = document.querySelectorAll(".home-gallery-item");

galleryBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        galleryBtns.forEach(button =>
            button.classList.remove("active")
        );

        btn.classList.add("active");

        const filter = btn.dataset.filter;

        galleryItems.forEach(item => {

            if(filter === "all"){

                item.style.display = "block";

            }

            else if(item.classList.contains(filter)){

                item.style.display = "block";

            }

            else{

                item.style.display = "none";

            }

        });

    });

});

/*=====================================
    TESTIMONIAL SLIDER
======================================*/

const testimonialCards = document.querySelectorAll(".testimonial-card");
const testimonialDots = document.querySelectorAll(".testimonial-dot");
const testimonialNext = document.querySelector(".testimonial-next");
const testimonialPrev = document.querySelector(".testimonial-prev");

let testimonialIndex = 0;

function showTestimonial(index){

    testimonialCards.forEach(card => {
        card.classList.remove("active");
    });

    testimonialDots.forEach(dot => {
        dot.classList.remove("active");
    });

    testimonialCards[index].classList.add("active");
    testimonialDots[index].classList.add("active");

}

function nextTestimonial(){

    testimonialIndex++;

    if(testimonialIndex >= testimonialCards.length){

        testimonialIndex = 0;

    }

    showTestimonial(testimonialIndex);

}

function prevTestimonial(){

    testimonialIndex--;

    if(testimonialIndex < 0){

        testimonialIndex = testimonialCards.length - 1;

    }

    showTestimonial(testimonialIndex);

}

if (
    testimonialCards.length &&
    testimonialDots.length &&
    testimonialNext &&
    testimonialPrev
) {

    testimonialNext.addEventListener("click", nextTestimonial);

    testimonialPrev.addEventListener("click", prevTestimonial);

    testimonialDots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            testimonialIndex = index;

            showTestimonial(testimonialIndex);

        });

    });

    setInterval(nextTestimonial, 5000);

}

/*=====================================
    FAQ ACCORDION
======================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        // Close all other items
        faqItems.forEach(otherItem => {

            if(otherItem !== item){

                otherItem.classList.remove("active");

            }

        });

        // Toggle current item
        item.classList.toggle("active");

    });

});

/**aboutpage**/
/*=====================================
    UNIVERSAL COUNTER
=====================================*/

const counterElements = document.querySelectorAll(".counter");

if (counterElements.length) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                counterElements.forEach(counter => {

                    if (counter.dataset.started) return;

                    counter.dataset.started = "true";

                    const target = parseInt(counter.dataset.target);
                    let count = 0;

                    const update = () => {

                        const increment = Math.ceil(target / 100);

                        count += increment;

                        if (count >= target) {

                            count = target;

                        }

                        if (target >= 1000) {

                            counter.textContent =
                                (count / 1000).toFixed(count === target ? 0 : 1).replace(".0", "") + "K+";

                        } else {

                            counter.textContent = count + "+";

                        }

                        if (count < target) {

                            requestAnimationFrame(update);

                        }

                    };

                    update();

                });

                observer.unobserve(entry.target);

            }

        });

    });

    const achievementSection = document.querySelector(".achievements");

    if (achievementSection) {

        observer.observe(achievementSection);

    }

}

/**service page**/
/*=====================================
    SERVICES FAQ
======================================*/

const servicesFaqItems = document.querySelectorAll(".services-faq-item");

servicesFaqItems.forEach((item) => {

    const question = item.querySelector(".services-faq-question");

    question.addEventListener("click", () => {

        servicesFaqItems.forEach((faq) => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/**offering**/ 
document.addEventListener('DOMContentLoaded', function () {

    const tabs = document.querySelectorAll('.menu-tab');
    const contents = document.querySelectorAll('.menu-tab-content');

    tabs.forEach(tab => {

        tab.addEventListener('click', function () {

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Hide all tab contents
            contents.forEach(c => c.classList.remove('active'));

            // Activate clicked tab
            this.classList.add('active');

            // Show selected content
            const target = this.getAttribute('data-tab');
            const activeContent = document.getElementById(target);

            if (activeContent) {

                activeContent.classList.add('active');

            }

        });

    });

});


/***contact page***/

//=====================================
// CONTACT FAQ ACCORDION
//=====================================

const contactFaqItems = document.querySelectorAll('.contact-faq-item');

contactFaqItems.forEach(item => {

    const question = item.querySelector('.contact-faq-question');

    question.addEventListener('click', () => {

        // Close all other FAQ items
        contactFaqItems.forEach(faq => {
            if (faq !== item) {
                faq.classList.remove('active');
            }
        });

        // Toggle current FAQ item
        item.classList.toggle('active');

    });

});






/****scroll-top** */
//=====================================
// Scroll To Top
//=====================================

const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            scrollTopBtn.classList.add("show");

        } else {

            scrollTopBtn.classList.remove("show");

        }

    });

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}




/***theme mode**** */
// ========================================
// GLOBAL DARK MODE
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const themeButtons = document.querySelectorAll(".theme-toggle");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    // Update icons
    function updateThemeIcons() {

        const isDark = document.body.classList.contains("dark-mode");

        themeButtons.forEach(button => {

            const icon = button.querySelector("i");

            if (!icon) return;

            icon.classList.remove("fa-moon", "fa-sun");

            icon.classList.add(
                isDark ? "fa-sun" : "fa-moon"
            );

        });
    }

    updateThemeIcons();

    // Toggle dark mode
    themeButtons.forEach(button => {

        button.addEventListener("click", function () {

            const isDark =
                document.body.classList.toggle("dark-mode");

            localStorage.setItem(
                "theme",
                isDark ? "dark" : "light"
            );

            updateThemeIcons();

        });

    });

});

/*=====================================
    GLOBAL RTL MODE
======================================*/

const rtlButtons = document.querySelectorAll(".rtl-toggle");

function setDirection(isRtl) {
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    document.body.classList.toggle("rtl-mode", isRtl);

    rtlButtons.forEach(button => {
        button.classList.toggle("active", isRtl);
    });
}

setDirection(localStorage.getItem("direction") === "rtl");

rtlButtons.forEach(button => {
    button.addEventListener("click", () => {
        const isRtl = document.documentElement.getAttribute("dir") !== "rtl";

        setDirection(isRtl);
        localStorage.setItem("direction", isRtl ? "rtl" : "ltr");
    });
});

