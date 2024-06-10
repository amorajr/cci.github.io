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

 /* black navbar */

 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
  var aboutSection = document.getElementById("About");
  var navbar = document.getElementById("navbar");
  var distanceFromTop = aboutSection.getBoundingClientRect().top;

  if (distanceFromTop <= 20) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-50px";
  }
}
