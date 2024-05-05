
import  Commands  from '../commands';



export default class PageLogIn extends Commands {
    constructor() {
        super(); {

        //Page Url:
        this.loginPageUrl = '/login';

        //section selectors:  
        this.logInInput = '#input-signup';

        //Field selectors: 
        this.emailField = '[div:nth-of-type(1) > input]';
        this.passwordField = '[#password-padd]';

        //Link selectors:
        this.forgotPasswordlink = '[a:nth-of-type(1) > .blue.home-p]';
        this.verifyEmailLink = '[a:nth-of-type(2) > .blue.home-p]'

        //Button selectors:
        this.signInBtn = '[#butt1]';
        this.signInWithGoogleBtn = '[div#input-signup > .text-join]';
        this.signUpBtn = '[div#policy  p#joingoogle]';

        //Error selectors:
        this.passwordError = '#password-padd > :nth-child(2)'
        this.loginFail = '#password-padd > :nth-child(3)';
        
      } 
    }
  
   /**
   * Navigates to login page
   * @returns {void} void
   */
   navigateToLoginPage() {
    cy.visit(this.loginPageUrl);
  }

  /**
   * Reload Log in page 
   * @returns {void} void
   */
  reloadLoginPage() {
    this.reloadPage(this.loginPageUrl)
  }


  /**
   * Verify Log in input section 
   * @param {string} selector
   * @returns {void} void 
   */
  verifyInputSection() {
    this.verifyVisibilityOfElement(this.logInInput);
  }

  /**
   * verify login fail error 
   * @param {string} selector
   * @returns {void} void 
   */
  failedError() {
    cy.get(this.loginFail).should('include.text','Login failed.');
  }

   /**
   * verify login fail error 
   * @param {string} selector
   * @returns {void} void 
   */
  enterPassword () {
    cy.get(this.passwordError).should('include.text','Enter Password');
  }


  

    
}