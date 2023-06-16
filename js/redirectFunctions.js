import config from '../config/config.prod.json';

function redirectToSignIn() {
  setTimeout(function () {
    window.location.href = config.redirect.signInPageUrl;
  }, 1000);
}
