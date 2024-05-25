    const button = document.getElementById("dropdownBtn");
    const dropdownContent = document.getElementById("dropdownContent");

    button.addEventListener("click", function() {
    dropdownContent.classList.toggle("show");

    const arrow = document.getElementById("arrowRisks");
    arrow.textContent = dropdownContent.classList.contains("show") ? '-' : '+';
        });
    
    const buttonBenefits = document.getElementById("dropdownBtnBenefits");
    const dropdownContentBenefits = document.getElementById("dropdownContentBenefits");

    buttonBenefits.addEventListener("click", function() {
    dropdownContentBenefits.classList.toggle("show");

    const arrowBenefits = document.getElementById("arrowBenefits");
    arrowBenefits.textContent = dropdownContentBenefits.classList.contains("show") ? '-' : '+';
        });

    const buttonRecovery = document.getElementById("dropdownBtnRecovery");
    const dropdownContentRecovery = document.getElementById("dropdownContentRecovery");

    buttonRecovery.addEventListener("click", function() {
    dropdownContentRecovery.classList.toggle("show");

    const arrowRecovery = document.getElementById("arrowRecovery");
    arrowRecovery.textContent = dropdownContentRecovery.classList.contains("show") ? '-' : '+';
        });

    const buttonPain = document.getElementById("dropdownBtnPain");
    const dropdownContentPain = document.getElementById("dropdownContentPain");

    buttonPain.addEventListener("click", function() {
    dropdownContentPain.classList.toggle("show");

    const arrowPain = document.getElementById("arrowPain");
    arrowPain.textContent = dropdownContentPain.classList.contains("show") ? '-' : '+';
        });

    const buttonSafe = document.getElementById("dropdownBtnSafe");
    const dropdownContentSafe = document.getElementById("dropdownContentSafe");

    buttonSafe.addEventListener("click", function() {
    dropdownContentSafe.classList.toggle("show");

    const arrowSafe = document.getElementById("arrowSafe");
    arrowSafe.textContent = dropdownContentSafe.classList.contains("show") ? '-' : '+';
        });
        
                /* Transition when scrolling */
    document.addEventListener("DOMContentLoaded", function() {
        const textElements = document.querySelectorAll('.text-left, .text-right, .img-left, .img-right');

        function fadeInOnScroll() {
            textElements.forEach(element => {
                const pos = element.getBoundingClientRect();
                const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

                if (pos.top <= windowHeight) {
                    element.classList.add('fade-in');
                }
            });
        }
        window.addEventListener('scroll', fadeInOnScroll);
        fadeInOnScroll(); 
    });
