/*Navbar/sidebar*/
      
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex';
  sidebar.style.transition = 'transform 0.5s ease';
  
  setTimeout(() => {
    sidebar.style.transform = 'translateX(0)';
  }, 50);
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.transition = 'transform 0.5s ease';

  setTimeout(() => {
    sidebar.style.transform = 'translateX(-100%)';
  }, 50);

  
  setTimeout(() => {
    sidebar.style.display = 'none';
  }, 500);
}


/*Potrait image slider*/

document.addEventListener('DOMContentLoaded', () => {
  
  initCarousel('carousel1');
  initCarousel('carousel2');
  
});

function initCarousel(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const slider = container.querySelector('.Carousel-slider');
  if (!slider) return;

  const sliderInstance = new MicroSlider(slider, { indicators: true, indicatorText: '' });
  const hammer = new Hammer(slider);
  const autoPlayInterval = 2000;
  let autoPlay = setInterval(() => sliderInstance.next(), autoPlayInterval);

  hammer.on('tap', () => {
      clearInterval(autoPlay);
      console.log('tap gesture detected');
  });

  hammer.on('swipe', () => {
      clearInterval(autoPlay);
      autoPlay = setInterval(() => sliderInstance.next(), autoPlayInterval);
      console.log('swipe gesture detected');
  });

 
  
}






/*Details display*/

function showMenu(index) {
  const detailsElements = document.querySelectorAll('.details');
  const details = detailsElements[index];

  if (details) {
    details.style.transition = 'opacity 1.3s, transform 2.4s ease';
    details.style.display = 'block';

    setTimeout(() => {
      details.style.opacity = '1';
      details.style.transform = 'translateY(0)';
    }, 50);
  }
}

function hideMenu(index) {
  const detailsElements = document.querySelectorAll('.details');
  const details = detailsElements[index];

  if (details) {
    details.style.transition = 'opacity 1.3s, transform 2.4s ease';

    setTimeout(() => {
      details.style.opacity = '0';
      details.style.transform = 'translateY(-20%)';
    }, 50);

    setTimeout(() => {
      details.style.display = 'none';
    }, 1350); 
  }
}

