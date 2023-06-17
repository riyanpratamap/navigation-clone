// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const navButton = document.getElementById('navigate');
    if (navButton) {
        navButton.addEventListener('click', function() {
            const currentPage = window.location.href.split('/').pop();
            let nextPage = '';

            switch (currentPage) {
                case 'index.html':
                    nextPage = 'page2.html';
                    break;
                case 'page2.html':
                    nextPage = 'page3.html';
                    break;
                case 'page3.html':
                    nextPage = 'page4.html';
                    break;
                default:
                    nextPage = 'index.html';
            }

            window.location.href = nextPage;
        });
    }
});
