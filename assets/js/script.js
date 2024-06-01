$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });


    
    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("y3uVObpo0LxLWpA2u");

        // Capture form data before sending the form
        var userName = this.user_name.value;
        var userEmail = this.user_email.value;
        var userContact = this.contact_number.value;
        var userMessage = this.message.value;

        emailjs.send('service_z6ovmnu', 'template_9otfujy', {
            from_name: userName,
            email_id: userEmail,
            contact : userContact,
            message: userMessage
        })
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Kavya Sree Oleti Ramanjulu";
            $("#favicon").attr("href", "assets/images/favicon2.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Software Engineer", "TIBCO/Integration/MFT Developer", "Full Stack Developer", "Back-End Engineer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = [
            {
                "name" : "Java",
                "icon" : "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
            },
            {
                "name": "Python",
                "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
            },{
                "name" : "C",
                "icon" : "https://img.icons8.com/color/48/c-programming.png"
            },
            {
                "name" : "C++",
                "icon" : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            },
            {
                "name" : "C#",
                "icon" : "https://img.icons8.com/color/48/c-programming.png"
            }, {
                "name" : "MFT",
                "icon" : "https://img.icons8.com/?size=100&id=pN4y3p6nGiad&format=png&color=000000"
            },
            {
                "name" : "TIBCO BW/EMS",
                "icon" : "./assets/js/tibco_logo.png"
            },
            {
                "name" : "Azure",
                "icon" : "https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000"
            }, 
            {
                "name" : "IBM B2B Sterling Integrator",
                "icon" : "https://img.icons8.com/?size=100&id=69456&format=png&color=000000"
            },
            {
                "name" : "HTML",
                "icon" : "https://img.icons8.com/color/48/html-5--v1.png"
            },{
                "name" : "CSS",
                "icon" : "https://img.icons8.com/color/48/css.png"
            },
            {
                "name" : "MongoDB",
                "icon" : "https://img.icons8.com/color/48/mongodb.png"
            },
            {
                "name": "MySQL",
                "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
            },
           {
                "name": "GCP",
                "icon": "https://img.icons8.com/?size=100&id=WHRLQdbEXQ16&format=png&color=000000"
            },
            {
                "name" : "Pinecone",
                "icon" : "https://img.icons8.com/?size=100&id=R1hN7CY5vhvG&format=png&color=000000"
            },
            {
                "name" : "OPEN AI Embeddings",
                "icon" : "https://img.icons8.com/?size=100&id=ka3InxFU3QZa&format=png&color=000000"
            },
            {
                "name" : "Agile",
                "icon" : "https://img.icons8.com/?size=100&id=bYQfsX9fzsEI&format=png&color=000000"
            },
            {
                "name" : "Splunk",
                "icon" : "https://img.icons8.com/?size=100&id=49188&format=png&color=000000"
            },
            {
                "name" : "Apache Kafka",
                "icon" : "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-apache-a-free-and-open-source-cross-platform-web-server-software-logo-color-tal-revivo.png"
            },
            {
                "name" : "Pandas",
                "icon" : "https://img.icons8.com/color/48/pandas.png"
            },{
                "name" : "Flask",
                "icon" : "https://img.icons8.com/?size=100&id=ewGOClUtmFX4&format=png&color=000000"
            },{
                "name" : "REST",
                "icon" : "https://img.icons8.com/color/48/api-settings.png"
            },{
                "name" : "AWS",
                "icon" : "https://img.icons8.com/color/48/amazon-web-services.png"
            },
            {
                "name" : "Incident/Tasks Handling",
                "icon" : "https://img.icons8.com/?size=100&id=0i1ywGklCnwD&format=png&color=000000"
            },
            
            {
                "name" : "Django",
                "icon" : "https://img.icons8.com/?size=100&id=qc3TyHJPxEoH&format=png&color=000000"
            },
            {
                "name" : "FastAPI",
                "icon" : "https://img.icons8.com/?size=100&id=52550&format=png&color=000000"
            },
            {
                "name" : "Rest API",
                "icon" : "https://img.icons8.com/?size=100&id=55497&format=png&color=000000"
            },
            {
                "name" : "Jira",
                "icon" : "https://img.icons8.com/?size=100&id=6aZUcUt6WjzU&format=png&color=000000"
            },
           ,{
                "name" : "Git",
                "icon" : "https://img.icons8.com/color/48/git.png"
            },{
                "name" : "BitBucket",
                "icon" : "https://img.icons8.com/color/48/bitbucket.png"
            },{
                "name" : "Postman",
                "icon" : "https://img.icons8.com/pulsar-color/48/postman-api.png"
            },{
                "name" : "Docker",
                "icon" : "https://img.icons8.com/color/48/docker.png"
            },{
                "name" : "NumPy",
                "icon" : "https://img.icons8.com/color/48/numpy.png"
            },{
                "name" : "Confluence",
                "icon" : "https://img.icons8.com/color/48/confluence--v2.png"
            },
            {
                "name": "Java Script",
                "icon": "https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
            
            }, 
            {
                "name": "Angular",
                "icon": "https://img.icons8.com/?size=100&id=oB8W5MJcq2Ho&format=png&color=000000"
            }, 
            {
                "name": "VS Code",
                "icon": " https://img.icons8.com/fluency/48/visual-studio.png"
            },
            {
                "name": "Jenkins",
                "icon": "https://img.icons8.com/?size=100&id=39292&format=png&color=000000"
            },  
            {
                "name": "Micro Services",
                "icon": "https://img.icons8.com/?size=100&id=WyWoGKHDtcZV&format=png&color=000000"
            },
            {
                "name": "SAP ARIBA",
                "icon": "https://img.icons8.com/?size=100&id=69485&format=png&color=000000"
            },
            {
                "name": "NLP",
                "icon": "https://img.icons8.com/?size=100&id=97624&format=png&color=000000"
            },
            {
                "name": "Insights",
                "icon": "https://img.icons8.com/color/48/light.png"
            },
            {
                "name": "Research",
                "icon": "https://img.icons8.com/color/48/fine-print.png"
            },
            {
                "name": "Leadership",
                "icon": "https://img.icons8.com/color/48/meeting-room.png" 
            }
        ]
        :
        response =[
           
              ]
    const data = await response;
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
            <div class="info">
                <img src="${skill.icon}" alt="skill" />
                <span>${skill.name}</span>
            </div>
        </div>`;
    });

    skillsContainer.innerHTML = skillHTML;

    const container = document.querySelector('.container');
    const scrollWidth = container.scrollWidth;
    const containerWidth = container.offsetWidth;

    let scrollPos = 0;

    function scroll() {
        scrollPos += 1;
        if (scrollPos >= scrollWidth - containerWidth) {
            scrollPos = 0;
            container.style.transition = 'none'; // Disable transition effect for instant jump
            container.scrollTo(scrollPos, 0);
            setTimeout(() => {
                container.style.transition = ''; // Re-enable transition effect
                scrollPos += 1; // Add 1px offset to restart the scrolling animation
            }, 50); // Adjust the delay as needed
        } else {
            container.scrollTo(scrollPos, 0);
        }
    }

    setInterval(scroll, 50); // Adjust the interval for smoother scrolling
}

// ../images/projects/${project.image}.png



fetchData().then(data => {
    showSkills(data);
});



// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}




/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 700 });
srtop.reveal('.home .envelope', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });



/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });



/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CERTIFICATES */


/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

const mediaQuery = window.matchMedia('(min-width: 300px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  
    srtop.reveal('.education .box', { interval: 100 });

  

    /* SCROLL EXPERIENCE */
    srtop.reveal('.experience .timeline', { delay: 200 });
    srtop.reveal('.experience .timeline .container', { interval: 200 });

    /* SCROLL CONTACT */
    srtop.reveal('.contact .container', { delay: 200 });
    srtop.reveal('.contact .container .form-group', { delay: 200 });
}
