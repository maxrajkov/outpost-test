import Commands from "../../support/commands";

export default class Home extends Commands {
    constructor() {
        super();
        this.homePageUrl = '/home-page';
        this.profilePicture = '.notifications:last-child';
        this.signOutButton = '[class = "dropdown-content option"]:last-child'


    }

    /**
   * Navigates to login page
   * @returns {void} void
   */
  navigateToHomePage() {
    cy.visit(this.homePageUrl);
  }

  /**
   * Successful log-in
   * @returns {void}
   */
  successfulLogIn(value) {
    this.verifyUrl(value)
  }




}