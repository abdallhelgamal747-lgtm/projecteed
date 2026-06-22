document.addEventListener('DOMContentLoaded', () => {


    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {

            e.preventDefault(); 

            const linkText = link.textContent.trim().toLowerCase();

            if (linkText === 'home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } 
            else if (linkText === 'our shop') {
                const targetSection = document.querySelector('.most-played-box');
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } 
            else if (linkText === 'product details') {
                const targetSection = document.querySelector('.trending-grid');
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } 
            else if (linkText === 'contact us') {
                const targetSection = document.getElementById('contact-section');
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });


    const signInBtn = document.querySelector('.btn-sign');
    const loginModal = document.getElementById('login-modal');
    const closeBtn = document.querySelector('.close-btn');

    if (signInBtn && loginModal) {
        signInBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'flex';
        });
    }

    if (closeBtn && loginModal) {
        closeBtn.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });


    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchError = document.getElementById('search-error');

    if (searchBtn && searchInput && searchError) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();

            if (query === "") {

                searchError.innerHTML = " Please type a game name first!";
                searchError.style.display = 'block'; 
            } else {
                searchError.style.display = 'none';
                

                const gameCards = document.querySelectorAll('.t-card, .mp-card');
                let found = false;

                gameCards.forEach(card => {
                    const gameTitle = card.querySelector('h4').textContent.toLowerCase();
                    if (gameTitle.includes(query.toLowerCase())) {
                        found = true;
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        card.style.border = "2px solid var(--primary-orange)";
                        setTimeout(() => card.style.border = "none", 2000);
                    }
                });

                if (!found) {
                    searchError.style.display = 'block';
                }
            }
        });

        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
});