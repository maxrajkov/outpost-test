import Commands from "../commands";

export default class Home extends Commands {
    constructor() {
        super();
        this.loginPageUrl = '/home-page';
        this.profilePicture = '.notifications:last-child';
        this.signOutButton = '[class = "dropdown-content option"]:last-child'


    }

    /**
   * Navigates to login page
   * @returns {void} void
   */
  navigateToLoginPage() {
    cy.visit(this.loginPageUrl);
  }

  /**
   * Successful log-in
   * @returns {void}
   */
  successfulLogIn() {
    cy.url(eq.loginPageUrl)
  }




}