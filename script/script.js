

//====================== for Navbar Toggle ======================================//
function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

//====================== JavaScript for Typed.js ================================//

var typed1 = new Typed(".text1", {
    strings: ["It's me."],
    typeSpeed: 110,
    
    loop: false
});

var typed2 = new Typed(".text2", {
    strings: ["Akash Tharu"],
    typeSpeed: 142,
    loop: false
});

var typed3 = new Typed(".text3", {
    strings: ["Web Developer","Web Designer",  "Graphic Designer"],
    typeSpeed: 130,
    backSpeed: 100,
    backDelay: 1200,
    loop: true
});
var typed4 = new Typed(".text4", {
    strings: [ "Web Developer","Web Designer", "Graphic Designer"],
    typeSpeed: 150,
    backSpeed: 140,
    backDelay: 150,
    loop: true
});

var typed4 = new Typed(".sub-title-up .text6", {
    strings: [ "Creative Website Designings ","Responsive Website Creations ", "User friendly Graphic Designs"],
    typeSpeed: 170,
    
    backDelay: 150,
    
    loop: true
});


//=================================  this is for filter buttons ==========================================//

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll('.fillter-buttons .btn');
    const portfolioItems = document.querySelectorAll('.portfolio-gallery .port-box');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-name');

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');

            portfolioItems.forEach(item => {
                // Split categories by commas
                const itemCategories = item.getAttribute('data-name').split(',');

                if (filter === 'all' || itemCategories.includes(filter)) {
                    item.style.display = 'block'; // Show if one of the categories matches
                } else {
                    item.style.display = 'none'; // Hide if no match
                }
            });
        });
    });
});



//====================== This is for professional skill animation =================================//

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    const dots = elem.getAttribute("data-dots"); // Use parseInt to get a number
    const marked = elem.getAttribute("data-percent"); // Use parseInt for percentage
    const percent = Math.floor(dots * marked / 100);
    let points = "";
    const rotate = 360 / dots;

    // Create dots dynamically
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    // Mark the percentage of dots
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});


//=========================== thihs is for star background =====================///


console.log("Star script loaded"); // Add this to the top of your script


document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.createElement('div');
    starContainer.classList.add('stars');
    document.body.appendChild(starContainer);  // Append to the body

    const numStars = 50; // Set the number of stars

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random position within the viewport
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        // Random animation duration for each star
        star.style.animationDuration = `${Math.random() * 1 + 2}s`;

        // Append the star to the container
        starContainer.appendChild(star);
    }
});





//====================== Website scroll animation , parallax ---tem-not use ====================//

/*

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));



*/


