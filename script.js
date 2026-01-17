/* --- script.js --- */

document.addEventListener("DOMContentLoaded", function() {
    
    /* -----------------------------------------------
       1. WELCOME SCREEN MEMORY LOGIC
    ----------------------------------------------- */
    const screen = document.getElementById("welcomeScreen");

    // चेक करा: युजर आधी आला आहे का?
    if (sessionStorage.getItem("visited") === "true") {
        // जर आधी आला असेल, तर स्क्रीन डायरेक्ट लपवा
        if (screen) {
            screen.style.display = "none";
        }
    }

    /* -----------------------------------------------
       2. SEARCH BAR LOGIC
    ----------------------------------------------- */
    const searchInput = document.querySelector('.search-bar input');
    const cards = document.querySelectorAll('.item-card, .category-card');

    if (searchInput) {
        searchInput.addEventListener('keyup', function(event) {
            const query = event.target.value.toLowerCase();

            cards.forEach(card => {
                const titleElement = card.querySelector('h3');
                const descElement = card.querySelector('p');

                if (titleElement && descElement) {
                    const title = titleElement.textContent.toLowerCase();
                    const desc = descElement.textContent.toLowerCase();

                    if (title.includes(query) || desc.includes(query)) {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }
                }
            });
        });
    }
});

/* -----------------------------------------------
   3. ENTER BUTTON ACTION
----------------------------------------------- */
function enterWebsite() {
    var sound = document.getElementById("startupSound");
    var screen = document.getElementById("welcomeScreen");
    
    // ब्राउझरच्या मेमरीमध्ये सेव्ह करा की युजरने एंट्री केली आहे
    sessionStorage.setItem("visited", "true");

    // आवाज प्ले करा
    if (sound) {
        sound.play().catch(error => {
            console.log("Audio play failed: " + error);
        });
    }

    // ॲनिमेशनसह स्क्रीन लपवा
    if (screen) {
        screen.style.opacity = "0"; 
        setTimeout(function() {
            screen.style.display = "none";
        }, 800);
    }
}
