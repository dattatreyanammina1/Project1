document.addEventListener('DOMContentLoaded', () => {
    const imageTrack = document.querySelector('.image-track');
    const imageItems = document.querySelectorAll('.image-item');

    imageTrack.append(...Array.from(imageItems).map(img => img.cloneNode(true)));

    const totalWidth = Array.from(imageItems).reduce((acc, img) => acc + img.offsetWidth + 10, 0); // 10 is the margin-right
    const keyframes = `
        @keyframes scroll {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-${totalWidth}px);
            }
        }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
});

function toggleDropdown(dropdownId, symbolId) {
    var allDropdownContents = document.querySelectorAll('.dropdown-content');
    var allSymbols = document.querySelectorAll('.dropdown-symbol');

    allDropdownContents.forEach(function(content) {
        if (content.id !== dropdownId) {
            content.classList.remove('show');
        }
    });

    allSymbols.forEach(function(symbol) {
        if (symbol.id !== symbolId) {
            symbol.classList.remove('rotate');
        }
    });

    var dropdownContent = document.getElementById(dropdownId);
    var dropdownSymbol = document.getElementById(symbolId);
    dropdownContent.classList.toggle('show');
    dropdownSymbol.classList.toggle('rotate');
}