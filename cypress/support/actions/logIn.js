import  Commands  from '../../support/commands';


export default class LogIn extends Commands {
    constructor() {
        super(); {

       //Page Url:
       this.loginPageUrl = '/login';

       //section selectors:  
       this.logInInput = '#input-signup';

       //Field selectors: 
       this.emailField = '#mail-input';
       this.passwordField = '#password-padd';

       //Link selectors:
       this.forgotPasswordlink = '[a:nth-of-type(1) > .blue.home-p]';
       this.verifyEmailLink = '[a:nth-of-type(2) > .blue.home-p]'

       //Button selectors:
       this.signInBtn = '#butt1';
       this.signInWithGoogleBtn = '[div#input-signup > .text-join]';
       this.signUpBtn = '[div#policy  p#joingoogle]';

       //Error selectors:
       this.loginFail = 'div#password-padd > p:nth-of-type(2)';
       
      } 
    }

   
  /**
   * input valid email 
   * @param {string} text
   * @return {void} void
   */
  enterValidEmail(value) {
    this.populateTextElement(this.emailField, value);
  }

  /**
   * input valid password 
   *  @param {string} text
   * @return {void} void
   */
  enterValidPassword(value) {
    this.populateTextElement(this.passwordField, value);
  }

/**
 * click on the "Sign in" button.
 * @return {void} void
 */
clickOnSignInButton() {
  this.clickOnElement(this.signInBtn);
}

}
