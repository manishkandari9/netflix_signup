document.addEventListener('DOMContentLoaded', function() {
    const signUpLink = document.getElementById('signUpLink');
    const signInLink = document.getElementById('signInLink');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
  
    signUpLink.addEventListener('click', function(event) {
      event.preventDefault();
      signInForm.classList.remove('active');
      signUpForm.classList.add('active');
    });
  
    signInLink.addEventListener('click', function(event) {
      event.preventDefault();
      signUpForm.classList.remove('active');
      signInForm.classList.add('active');
    });
  });
  