/// <reference types="cypress" />

import PageLogIn from "../../support/pages/logInPage";
import LogIn from "../../support/actions/logIn";
import  { USERS }  from "../../support/credentials/index";
import Home from "../../support/pages/homePage";
import player_credentials from "../../fixtures/data/users/player";


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

context('check if the player user is able to logIn on to the platform with valid and invalid crededentials', () => {
  
   

   it('successful Log-in', function () {
   
      // Navigate and verify log-in page
    pageLogIn.navigateToLoginPage();
    pageLogIn.verifyInputSection();

      //log in with valid credentials 
    logIn.enterEmail(player_credentials.email);
    logIn.enterPassword(player_credentials.password);
    logIn.clickOnSignInButton();

      //Verify successful log in
    home.successfulLogIn('/home-page')  



   });

     it('Log-in Fail due to wrong email', () => {
      // Navigate to the login page
     pageLogIn.navigateToLoginPage();
      //enter the wrong email 
     logIn.enterEmail(player_credentials.worng_email);
      //enter the valid password
     logIn.enterPassword(player_credentials.password)
      //click sign in 
      logIn.clickOnSignInButton();
      //verify an error "login failed"
     pageLogIn.failedError();


     })

     it('log-in fail due to incorrect password', () => {
      pageLogIn.navigateToLoginPage();
      //enter the wrong email 
     logIn.enterEmail(player_credentials.email);
      //enter the valid password
     logIn.enterPassword(player_credentials.wrong_pass)
      //click sign in 
      logIn.clickOnSignInButton();
      //verify an error "login failed"
     pageLogIn.failedError();

     })

     it('log-in fail due to skiping mandatory fields', () => {
     //navigate to the log in page 
      pageLogIn.navigateToLoginPage();
      //click on the sign in button 
      logIn.clickOnSignInButton();
      //verify an error  "Enter Password"
      pageLogIn.enterPassword();
      
     })
    

   })

})
    
