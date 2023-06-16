import {linkSignIn} from '../config/configProd';

function redirectToSignIn() {
  setTimeout(function () {
    linkSignIn()
  }, 1000);
}
