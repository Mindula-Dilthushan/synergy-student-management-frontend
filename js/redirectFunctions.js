import goToSignIn from '../config/configEnvironment'

function redirectToSignIn() {
  setTimeout(function () {
    goToSignIn()
  }, 1000);
}
