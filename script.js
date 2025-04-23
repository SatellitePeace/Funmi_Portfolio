
// //////////////////////////////PAGE CHANGE
// page navigation variables
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");
const navigationLinks = document.querySelectorAll(".navbar a");
const pages = document.querySelectorAll(".page");


navigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    const targetPageId = link.getAttribute('data-page');

    // Remove 'active' from all nav links and pages
    navigationLinks.forEach(l => l.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));

    // Add 'active' to clicked nav link and corresponding page
    link.classList.add('active');
    const targetPage = document.getElementById(targetPageId);
    if (targetPage) {
      targetPage.classList.add('active');
    } else {
      console.error(`No page found with id: ${targetPageId}`);
    }
  });
});

// ///////////////////PORTFOLIO SECTION LINKS
const shareButtons = document.querySelectorAll('.share-button');

shareButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();

    if (navigator.share) {
      navigator.share({
        title: 'My Cool Webpage',
        text: 'Check out this awesome site!',
        url: window.location.href
      })
      .then(() => console.log('Thanks for sharing!'))
      .catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch(() => alert('Could not copy the link. Please copy manually.'));
    }
  });
});

// Menu Hamburger
const menu = document.getElementById('menu')
const header = document.querySelector('header')

menu.addEventListener('click', function(){
    menu.classList.toggle('bi')
    menu.classList.toggle('bi-x-lg') 
    header.classList.toggle('active')
})
window.addEventListener('scroll', function(){
  menu.classList.remove('bi')
  menu.classList.remove('bi-x-lg') 
  header.classList.remove('active')
})
  
  // COPYRIGHT DATE
  const copyDate = document.querySelector("small");
  copyDate.innerText = new Date().getFullYear()

//   Types Animation
  const types = new Typed(".multiple-text", {
    strings: [
      "Product Manager",
      "Product Owner",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });