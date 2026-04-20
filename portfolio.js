const links = document.querySelectorAll('#navbarNav a');

links.forEach(link => {
  link.addEventListener('click', () => {
    // remove active from all links
    links.forEach(l => l.classList.remove('active'));

    // add active to the clicked one
    link.classList.add('active');

    // close navbar on mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  });
});


const btnContact = document.querySelector('.contactMe');
const btnPortfolio = document.querySelector('.portfolio');
function contactMe() {
  const contact = document.querySelector('.footer');
  contact.scrollIntoView({ behavior: 'smooth' });
}
function portfolio() {
  const portfolio = document.querySelector('#section3');
  portfolio.scrollIntoView({ behavior: 'smooth' });
}


const email = document.querySelector('.inputemail');
const name = document.querySelector('.inputname');
const message = document.querySelector('.message');
function submit() {
  alert("Thank you for your message! I will get back to you as soon as possible.");
  email.value = "";
  name.value = "";
  message.value = "";
}

// function downloadCV() {
//   const link = document.createElement('a');
//   link.href = './assets/cv.pdf';
//   link.download = 'cv.pdf';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }