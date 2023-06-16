import config from 'config.prod.json'

export default function goToSignIn() {
  window.location.href = config.redirect.signInPageUrl;
}
