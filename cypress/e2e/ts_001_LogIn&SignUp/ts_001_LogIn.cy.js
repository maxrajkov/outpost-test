/// <reference types="cypress" />

import LogIn from "../../support/core/pages/LogIn";
import  USERS  from "../../support/core/credentials/index";
import Home from "../../support/core/pages/homePage";
//import { longStackTraces } from "cypress/types/bluebird";



const login = new LogIn()
const home = new Home()
const user = new USERS()

describe ('Player user should successfuly Login to the outpost chess platform', () => {

//     //setup executed before each test case
//     beforeEach(() => {
//         LogIn.navigateTotheLogInPage

//    })

//    // teardown executed after each test case
//    afterEach(() => {
//       Home.signOut
//    })

//    // teardown executed after test suite
//    after(() => {
      
//    })
})

context('check if the player user is able to logIn on to the platform with valid and invalid crededentials', () => {

    it('successful Log-in', function () {

    // Navigate to the login page
    login.navigateToLoginPage();
    login.verifyLogInPage();

    //log in with valid credentials 
    login.outpostLogin(USERS.player);
    home.successfulLogIn();

    });

    it('Log-in Fail', () => {
        // Navigate to the login page
        login.navigateToLoginPage();
        login.emailField();

    })


})
    
