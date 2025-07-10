const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const sliderImages = [
  'https://images.unsplash.com/photo-1679485734032-1e2b82a6999c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1670222783941-c1bee0e32c85?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 'https://images.unsplash.com/photo-1722153155021-3b7312df422b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 'https://images.unsplash.com/photo-1678132446331-da900be50e27?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 'https://images.unsplash.com/photo-1737898389647-b0f41f7a0c2c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 'https://images.unsplash.com/photo-1698321014601-5bea6d5ffef6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 'https://images.unsplash.com/photo-1653974124426-544924760d42?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 'https://images.unsplash.com/photo-1631066566662-453c4f8c5840?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1643949700215-e61cdca053f7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

];



let current = 0;
let bg1 = document.getElementById('slider-bg1');
let bg2 = document.getElementById('slider-bg2');

bg1.style.backgroundImage = `url('${sliderImages[current]}')`;

function slideNext() {
  const next = (current + 1) % sliderImages.length;

  // Prepare next image on bg2
  bg2.style.backgroundImage = `url('${sliderImages[next]}')`;
  bg2.style.transform = 'translateX(100%)';

  // Force browser to apply transform
  requestAnimationFrame(() => {
    bg1.style.transition = 'transform 1s ease-in-out';
    bg2.style.transition = 'transform 1s ease-in-out';

    bg1.style.transform = 'translateX(-100%)';
    bg2.style.transform = 'translateX(0)';
  });

  setTimeout(() => {
    // Reset bg1 and swap
    bg1.style.transition = 'none';
    bg2.style.transition = 'none';

    bg1.style.transform = 'translateX(0)';
    bg2.style.transform = 'translateX(0)';
    bg1.style.backgroundImage = bg2.style.backgroundImage;

    // Swap references
    [bg1, bg2] = [bg2, bg1];
    current = next;
  }, 1000);
}

setInterval(slideNext, 6000);
