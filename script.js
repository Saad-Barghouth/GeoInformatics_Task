

   
    // Highlight link on hover
    const referenceLink = document.querySelector('.reference-link');
    referenceLink.addEventListener('mouseover', () => {
        referenceLink.style.color = "#0056b3"; // Highlight color on hover
    });
    referenceLink.addEventListener('mouseout', () => {
        referenceLink.style.color = "#007bff"; // Original color when mouse leaves
    });
});
