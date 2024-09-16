document.addEventListener('DOMContentLoaded', function() {
    loadHTML('header.html', 'header-placeholder');
    loadHTML('footer.html', 'footer-placeholder');
});

function loadHTML(htmlPage, elementID) {
  //TODO: cambiar a path absoluto para poder mover las paginas a otro directorio
  fetch(htmlPage)
    .then(response => response.text())
    .then(html => {
      const elementPlaceholder = document.getElementById(elementID);
      elementPlaceholder.innerHTML = html;
      
      // Reapply animations
      triggerAnimations(elementPlaceholder);
    })
    .catch(err => console.error('Failed to load element: ', err));
}

function triggerAnimations(parentElement) {
  // Find all elements with the class 'animate__animated' within the parent element
  const animatedElements = parentElement.querySelectorAll('.animate__animated');
  
  animatedElements.forEach(el => {
    const animationClasses = el.className.split(' ').filter(className => className.startsWith('animate__'));
    // Remove and re-add animation classes to trigger the animation
    el.classList.remove(...animationClasses);
    void el.offsetWidth; // Trigger reflow
    el.classList.add(...animationClasses);
  });
}