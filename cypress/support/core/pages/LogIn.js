import  Commands  from '../support/core/commands';


export default class LogIn extends Commands {
    constructor() {
        super();

        this.loginPageUrl = '/login';
        this.emailField = '[div:nth-of-type(1) > input]';
        this.passwordField = '[#password-padd]';
        this.forgotPasswordlink = '[a:nth-of-type(1) > .blue.home-p]';
        this.verifyEmailLink = '[a:nth-of-type(2) > .blue.home-p]'
        this.signInBtn = '[#butt1]';
        this.signInWithGoogleBtn = '[div#input-signup > .text-join]';
        this.signUpBtn = '[div#policy  p#joingoogle]';
        this.loginFail = 'div#password-padd > p:nth-of-type(2)';
         
    }
    
    

    /**
   * Navigates to login page
   * @returns {void} void
   */
  navigateToLoginPage() {
    cy.url('test.outpostchess.com');
  }

  /**
   * Verifies login page
   * @returns {void} void
   */
  verifyLogInPage() {
  navigateToLoginPage
      .should('eq', 'https://test.outpostchess.com/login' );
    
  }

  /**
   * Populates email field
   * @param {string} value - email
   * @returns {void} void
   */
  populateEmailField(value) {
    this.clearAndPopulateTextElement(this.emailField, value);
  }
  
  /**
   * Populates Password field 
   * @parm {string} value - password
   */
  populatePasswordField(value) {
    this.clearAndPopulateTextElement(this.passwordField);
  }

  /**
   * clicks sign in button
   * @returns {void} void
   */
  clickOnSignIn(){
    this.clickOnElement(this.signInButton)
  }

   /**
   * Vrifies failed login error
   * @returns {void} void
   * @param {string} value - fail
   */
   verifyLogInFail(){
    this.logInFaliure(this.loginFail)
  }

  /**
   * Login as user via UI
   * @param {string} userType - User type to login as
   */
  outpostLogin(userType) {
    cy
      .fixture(`credentials/${userType}.json`)
      .as('user');

    cy
      .get('@user')
      .then((user) => {
        this.populateEmailField(user.email);
        this.populatePasswordField(user.password);
        this.clickSignInButton();
      });
  }


}

