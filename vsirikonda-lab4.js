// vivek sirikonda
o // ITMD 541-01 Graduate Student
(function studentWebPageUpdate() {
    // Change the main heading in the hero section
    const mainHeading = document.querySelector(".text-4xl.font-bold.mb-4.text-white.relative.z-20");
    if (mainHeading) {
        mainHeading.innerText = "Uplift Your Brand with Stellar Marketing";
    }

    // Change the subheading below the main heading
    const subHeading = document.querySelector(".text-xl.mb-6.text-white.relative.z-20");
    if (subHeading) {
        subHeading.innerText = "Utilize cutting-edge strategies from Stellar Marketing to help your business thrive and excel.";
    }

    // Change the background image of the hero section
    const heroSection = document.getElementById("hero");
    if (heroSection) {
        heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
    }

    // Change the background color of the navbar to match the footer color
    const navbar = document.querySelector("header");
    if (navbar) {
        navbar.style.backgroundColor = "#1F2937"; // assuming footer color
    }

    // Remove the "Get Started" button
    const getStartedBtn = document.querySelector(".relative.bg-blue-600.text-white.px-6.py-2.rounded.hover\\:bg-blue-700.z-20");
    if (getStartedBtn) {
        getStartedBtn.remove();
    }

    // Center-align section headings for Services, Solutions, and Contact sections
    const sectionHeadings = document.querySelectorAll("main section h2");
    sectionHeadings.forEach((heading) => {
        heading.classList.add("text-center");
    });

    // Change color of service icons to green (#47C714)
    const serviceIcons = document.querySelectorAll("#services span.material-symbols-outlined");
    serviceIcons.forEach((icon) => {
        icon.style.color = "#47C714";
    });

    // Change the digital marketing icon to 'Ads Click'
    const digitalIcon = document.querySelector('span[data-icon="digital"]');
    if (digitalIcon) {
        digitalIcon.innerText = "ads_click";
    }

    // Modify the layout of the solutions grid to be 4 columns at 1024px width
    const solutionsGrid = document.querySelector("section#solutions div[data-section='product_cards']");
    if (solutionsGrid) {
        solutionsGrid.classList.add("lg:grid-cols-4");
    }

    // Change the Musicians image in the solutions section
    const musiciansImg = document.querySelector('img[alt="Musicians"]');
    if (musiciansImg) {
        musiciansImg.src = "https://picsum.photos/id/453/400/300";
    }

    // Prevent form submission and validate input before showing alerts
    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Stop form from submitting

            // Get user input values
            const nameField = document.getElementById("name");
            const emailField = document.getElementById("email");
            const userName = nameField ? nameField.value.trim() : "";
            const userEmail = emailField ? emailField.value.trim() : "";

            // Show alert messages based on input validation
            if (userName && userEmail) {
                alert(`Thank you, ${userName}! We will be in touch with you shortly at ${userEmail}.`);
            } else {
                alert("Please provide a name and email.");
            }
        });
    }

    console.log("Student assignment script executed successfully!");
})();
