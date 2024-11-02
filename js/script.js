let menu = document.querySelector('#menu-bars');
let header= document.querySelector('header');

menu.onclick =()=>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active'); 
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    header.classList.remove('active'); 
}
let currentSet = 0;

// Define all projects as sets
const projectSets = [
    // First set of projects (visible by default)
    `
    <div class="box">
        <h3>Product Landing Page</h3>
        <img src="images/plpage.png" alt="Product Landing Page">
        <a href="https://github.com/Mariselvam1318/Product-Landing-Page" data-position="top" data-tooltip="Source code"><i class="fa-brands fa-github"></i></a>
    </div>
    <div class="box">
        <h3>Redesign Website Using Figma</h3>
        <img src="images/figma.png" alt="Figma Redesign">
        <a href="https://www.figma.com/proto/sEbOrYsQ0xIupYNvtQdRDe/Flipkart-Redesign-Home-page" data-position="top" data-tooltip="View Design"><i class="fab fa-figma"></i></a>
    </div>
    <div class="box">
        <h3>Music Player</h3>
        <img src="images/music.png" alt="Music Player">
        <a href="https://github.com/Mariselvam1318/Music-Player" data-position="top" data-tooltip="Source code"><i class="fa-brands fa-github"></i></a>
    </div>
    <div class="box">
            <h3>Quiz</h3>
            <img src="images/Quiz.png" alt="Quiz">
            <a href="https://github.com/Mariselvam1318/Quiz" data-position="top" data-tooltip="Source code"><i class="fa-brands fa-github"></i></a>
        </div>
    `,
    // Second set of projects
    `
    <div class="box">
        <h3>Shopping Cart-Php</h3>
        <img src="images/shopping_cart.png" alt="shopping_cart">
        <a href="https://github.com/Mariselvam1318/Shopping-Cart-using-Php" data-position="top" data-tooltip="Source code"><i class="fa-brands fa-github"></i></a>
    </div>
    <div class="box">
        <h3>Multipage Travel App-React</h3>
        <img src="images/multipage.png" alt="multipage">
        <a href="https://github.com/Mariselvam1318/multipage-react-email-integration" data-position="top" data-tooltip="Source code"><i class="fa-brands fa-github"></i></a>
    </div>
    <div class="box">
        <h3>Weather App</h3>
        <img src="images/weather_app.png" alt="Weather App">
        <a href="https://github.com/Mariselvam1318/Weather-App" data-position="top" data-tooltip="Source code"><i class="fa-brands fa-github"></i></a>
    </div>
    
    <div class="box">
        <h3>Github Repository Fetcher</h3>
        <img src="images/github.png" alt="Portfolio Website">
        <a href="https://github.com/Mariselvam1318/Fetch-Repositories-from-GitHub" data-position="top" data-tooltip="Source code"><i class="fa-brands fa-github"></i></a>
    </div>
    `
];

// Function to swipe to the next set of projects
function swipeRight() {
    currentSet = (currentSet + 1) % projectSets.length;
    document.getElementById('boxContainer').innerHTML = projectSets[currentSet];
}

// Function to swipe to the previous set of projects
function swipeLeft() {
    currentSet = (currentSet - 1 + projectSets.length) % projectSets.length;
    document.getElementById('boxContainer').innerHTML = projectSets[currentSet];
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the form data
    const form = event.target;
    const formData = {
        from_name: form.from_name.value,
        from_email: form.from_email.value,
        contact_number: form.contact_number.value,
        message: form.message.value,
    };

    // Send the email using Email.js
    emailjs.send("service_mcin8r6", "template_ycgebao", formData)
        .then(function(response) {
            alert("Message sent successfully!");
            form.reset(); // Reset the form after sending
        })
        .catch(function(error) {
            alert("An error occurred, please try again.");
            console.error("Error:", error);
        });
});


