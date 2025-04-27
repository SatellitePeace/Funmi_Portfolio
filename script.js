
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
// ////////////////////// BLOG POST FUNCTIONALITIES (ECLIPS, LIKE, SHARE,COMMENT) /////////////////////////////////////
// truncate blog title
const titles = document.querySelectorAll('.blog-title');

titles.forEach(title => {
  const maxLength = 100; // Set maximum characters before truncating
  if (title.textContent.length > maxLength) {
    title.textContent = title.textContent.slice(0, maxLength) + '...';
  }
});

// Share button
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
// Like and Comment
// Find all blog posts
const blogPosts = document.querySelectorAll('.article-post');

blogPosts.forEach(post => {
  const postId = post.getAttribute('data-post-id');

  // Get elements inside this post
  const likeButton = post.querySelector('.like-button');
  const likeCount = post.querySelector('.like-count');
  const commentForm = post.querySelector('.comment-form');
  const commentInput = post.querySelector('.comment-input');
  const commentList = post.querySelector('.comment-list');

  // Load likes and comments for this post
  let likes = localStorage.getItem(`${postId}_likes`) ? parseInt(localStorage.getItem(`${postId}_likes`)) : 0;
  likeCount.textContent = likes;

  let comments = JSON.parse(localStorage.getItem(`${postId}_comments`)) || [];
  comments.forEach(comment => {
    addCommentToList(commentList, comment);
  });

  // Like button functionality
  likeButton.addEventListener('click', () => {
    likes++;
    localStorage.setItem(`${postId}_likes`, likes);
    likeCount.textContent = likes;
  });

  // Comment form functionality
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
      comments.push(commentText);
      localStorage.setItem(`${postId}_comments`, JSON.stringify(comments));
      addCommentToList(commentList, commentText);
      commentInput.value = '';
    }
  });
});

// Function to add a comment to a specific list
function addCommentToList(list, comment) {
  const li = document.createElement('li');
  li.textContent = comment;
  list.appendChild(li);
}

// CONTACT
const form = document.getElementById('form');

form.addEventListener('submit', () => {
  setTimeout(() => {
    form.reset();
  }, 500);
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
navigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('bi-x-lg');
    menu.classList.add('bi'); // Reset icon
    header.classList.remove('active'); // Close navbar
  });
});

  // COPYRIGHT DATE
  const copyDate = document.querySelector("small");
  copyDate.innerText = new Date().getFullYear()
// // Type animation
const typing = new Typed(".multiple-text", {
  strings: [
    "Project Manager",
    "Scrum Master",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
}).go();