fetch('./components/nav.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;

      const currentPage = window.location.pathname;

      if (currentPage.includes('signin.html') || currentPage.includes('signup.html')) {
        const loginLink = document.querySelector('.login-link');
        if (loginLink) loginLink.style.display = 'none';
      }
    });