/// <reference types="cypress" />

import PageLogIn from "../../support/pages/logInPage";
import LogIn from "../../support/actions/logIn";
import  { USERS }  from "../../support/credentials/index";
import Home from "../../support/pages/homePage";
import credentials from "../../fixtures/data/users/player";


const pageLogIn = new PageLogIn()
const logIn = new LogIn()
const home = new Home()


describe ('testing log-in page behaviour accordingly to the ', () => {

    //setup executed before each test case
    beforeEach(() => {
       

   })

   // teardown executed after each test case
   afterEach(() => {
      
   })

   // teardown executed after test suite
   after(() => {
    
   })
})

context('check if the player user is able to logIn on to the platform with valid and invalid crededentials', () => {
  
   

   it('successful Log-in', function () {
   
      // Navigate and verify log-in page
    pageLogIn.navigateToLoginPage();
    pageLogIn.verifyInputSection();

      //log in with valid credentials 
    logIn.enterValidEmail(credentials.email);
    logIn.enterValidPassword(credentials.password);
    logIn.clickOnSignInButton();

      //Verify successful log in
    home.successfulLogIn('/home-page')  



   });

   //  it('Log-in Fail', () => {
   //  // Navigate to the login page
   //  logIn.navigateToLoginPage();
   //  logIn.emailField();
   //  })

    




    


})
    
