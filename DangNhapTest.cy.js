describe('DangNhapTest', () => {
   
    it ('login-success', () => {
        cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")
        cy.get('input[name ="youama-email"]').first().type ('0339899811');
        cy.get('input[name ="youama-password"]').first().type('ngoc1206');
        cy.get('button[class ="fhs-btn-login"]').click();
        cy.url().should ('include','https://www.fahasa.com/customer/account/');
 
    })

    // it ('login-truephone-falsepass',() =>{
    //     cy.wait (1000);
    //     cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")
    //     cy.get('input[name ="youama-email"]').first().type ('0339899811');
    //     cy.get('input[name ="youama-password"]').first().type('ngoc123');
    //     cy.get('button[class ="fhs-btn-login"]').click();
    //     cy.get('.popup-login-content > form > .fhs-popup-msg');
    // })
    
    // it ('login-falsephone-truepass',() =>{
    //     cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")
    //     cy.get('input[name ="youama-email"]').first().type ('0339899812');
    //     cy.get('input[name ="youama-password"]').first().type('ngoc1206');
    //     cy.get('button[class ="fhs-btn-login"]').click();
    //     cy.get('.popup-login-content > form > .fhs-popup-msg');
    // })

    // it ('login-falsephonenumber-falsepass',() =>{
    //     cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")
    //     cy.get('input[name ="youama-email"]').first().type ('0339899812');
    //     cy.get('input[name ="youama-password"]').first().type('ngoc120677');
        // cy.get('.popup-login-content > form > .fhs-popup-msg');
    //     cy.get('button[class ="fhs-btn-login"]').click();
    // })

    
    // it ('login-truephone-emptypass',() =>{
    //     cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")
    //     cy.get('input[name ="youama-email"]').first().type ('0339899811');
    //     cy.get('input[name ="youama-password"]').first().clear();
    //     // cy.get('button[class ="fhs-btn-login"]').click();
    // })

    //     it ('login-falsephone_kituthuong-falsepass',() =>{
    //     cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")
    //     cy.get('input[name ="youama-email"]').first().type ('033989981h');
    //     cy.get('input[name ="youama-password"]').first().type('Ngoc1206');
    //     // cy.get('button[class ="fhs-btn-login"]').click();
    // })

    // it ('login-falsephone_kitudacbiet-falsepass',() =>{
    //     cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")
    //     cy.get('input[name ="youama-email"]').first().type ('0339899818*');
    //     cy.get('input[name ="youama-password"]').first().type('Ngoc1206');
    //     // cy.get('button[class ="fhs-btn-login"]').click();
    // })

    // it ('login-excessphonenumber-falsepass',() =>{
    //     cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")
    //     cy.get('input[name ="youama-email"]').first().type ('03398998111');
    //     cy.get('input[name ="youama-password"]').first().type('ngoc120677');
    // })

    // it ('login-lackphonenumber-falsepass',() =>{
    //     cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")
    //     cy.get('input[name ="youama-email"]').first().type ('033989981');
    //     cy.get('input[name ="youama-password"]').first().type('ngoc120677');
    // //    cy.get('button[class ="fhs-btn-login"]').click();
    // })


    //  it ('login-falsephonenumber-emptypass',() =>{
    //     cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")
    //     cy.get('input[name ="youama-email"]').first().type ('0339899812');
    //     cy.get('input[name ="youama-password"]').first().clear();
    
    // })

    // it ('login-emptyphonenumber-truepass',() =>{
    //     cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")
    //     cy.get('input[name ="youama-email"]').first().clear();
    //     cy.get('input[name ="youama-password"]').first().type('ngoc1206');
    // })

    // it ('login-emptyphonenumber-falsepass',() =>{
    //     cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")
    //     cy.get('input[name ="youama-email"]').first().clear();
    //     cy.get('input[name ="youama-password"]').first().type('Ngoc1206');
    // })

    // it ('login-emptyphonenumber-emptypass',() =>{
    //     cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")
    //     cy.get('input[name ="youama-email"]').first().clear();
    //     cy.get('input[name ="youama-password"]').first().clear();
    // })
})