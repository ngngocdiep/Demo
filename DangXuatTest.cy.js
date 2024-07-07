describe('DangXuatTest',() => {
    
    it('logout_success', () => {
      cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")
      // cy.title().should('eq', 'Khách hàng đăng nhập - FAHASA.COM')
      cy.get('input[name ="youama-email"]').first().type ('0339899811');
      cy.get('input[name ="youama-password"]').first().type('ngoc1206');
      cy.get('button[class ="fhs-btn-login"]').click();
      cy.url().should ('include','https://www.fahasa.com/customer/account/');

      cy.get('.fhs_top_account_button')
      cy.get('a[href="/customer/account/logout/"]').click();
      
      

      cy.url().should ('include','https://www.fahasa.com/customer/account/logoutSuccess/');

    })
})
