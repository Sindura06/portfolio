// JavaScript to handle navigation and any interactivity

document.addEventListener('DOMContentLoaded', () => {
    const sidebarBtn = document.querySelector('[data-sidebar-btn]');
    const sidebarInfoMore = document.querySelector('.sidebar-info_more');
    const navbarLinks = document.querySelectorAll('.navbar-link');
    const pages = document.querySelectorAll('[data-page]');
  
    // Toggle sidebar contacts
    sidebarBtn.addEventListener('click', () => {
      sidebarInfoMore.classList.toggle('show');
    });
  
    // Navigation link handling
    navbarLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
        // Remove active class from all links
        navbarLinks.forEach(link => link.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');
  
        // Show the corresponding page
        pages.forEach(page => page.classList.remove('active'));
        pages[index].classList.add('active');
      });
    });
  
    // Social icons hover effect
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
      const img = link.querySelector('.social-image');
      link.addEventListener('mouseover', () => {
        img.src = img.getAttribute('data-hover');
      });
      link.addEventListener('mouseout', () => {
        img.src = img.src.replace('-white', '');
      });
    });
  });
  
