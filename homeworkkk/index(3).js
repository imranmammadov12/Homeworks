const mainPhoto = document.querySelector('#main-photo');
const previews = document.querySelectorAll('.preview img');
const previewsContainer = document.querySelector('.preview');

console.log(previews, mainPhoto);
previewsContainer.addEventListener('click', function(event) {
    const target = event.target;

previews.forEach(function(preview) {
    preview.addEventListener('click', function() {
        mainPhoto.src = preview.src;
    })
    // if (target.tagName !== 'IMG') return;
    // if (target.src === undefined) return;
    // if (!target.src) return;
    if (!target.matches('img')) return;

    mainPhoto.src = target.src;
})});

// домашнее задание с эффектом hover

previews.forEach(function(preview) {
    preview.addEventListener('mouseover', function() {
      preview.style.border = '2px solid black';
    });
  
    preview.addEventListener('mouseout', function() {
      preview.style.border = 'none';
    });
  });