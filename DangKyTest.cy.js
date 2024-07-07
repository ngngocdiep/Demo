describe('DangKyTest', () => {
  // it('register fail cause no otp', () => {
 
  //     // Visit the login page
  //     cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")

  //     // Click on the register tab
  //     cy.get('#popup-login-tab_list').should('exist').and('be.visible');

  //     // Click the "Đăng ký" tab
  //     cy.get('.popup-login-tab-register').click();

  //     // Enter phone number into the input field
  //     cy.get('#register_phone')
  //     .should('be.visible')
  //     .type('0355773833', { force: true });

  //     // Click on the send OTP button
  //     cy.get('.fhs-input-icon.fhs-textbox-send').click()

  //     // Verify that the OTP alert message is displayed
  //     cy.get('.fhs-input-alert') 
  //       .should('be.visible')
  //       .and('contain', 'OTP đã được gửi') 

      
  //     // Try to click on the register button and ensure it is not clickable
  //     cy.get('button[class ="fhs-btn-register"]').should('be.disabled')
  // })
  // it('register fail with wrong OTP', () => {
  //     // Visit the login page
  //     cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/")

  //     // Click on the register tab
  //     cy.get('#popup-login-tab_list').should('exist').and('be.visible');

  //     // Click the "Đăng ký" tab
  //     cy.get('.popup-login-tab-register').click();

  //     // Enter phone number into the input field
  //     cy.get('#register_phone')
  //     .should('be.visible')
  //     .type('0355773833', { force: true });
  //     // Click on the send OTP button
  //     cy.get('.fhs-input-icon.fhs-textbox-send').click()
  //     // Verify that the OTP alert message is displayed
  //     cy.get('.fhs-input-alert') 
  //     .should('be.visible')
  //     .and('contain', 'OTP đã được gửi') 
      
  //     // Enter wrong OTP
  //     cy.get('#register_phone_otp').type('000000')
  //     // Verify that the alert message shows invalid OTP
  //     cy.wait(3000);

  //     cy.get('.fhs-input-alert') 
  //     .should('be.visible')
  //     .and('contain', 'OTP không hợp lệ')
  //     // Ensure that password field is still not displayed
  //     // cy.get('input[name="youama-password"]')
  //     // .should('exist')
  //     // .and('be.visible')
  //     // .and('have.attr', 'readonly');

  //     // Try to click on the register button and ensure it is not clickable
  //     cy.get('button[class ="fhs-btn-register"]').should('be.disabled')
  // })
  // it('register fail with existing phone number', () => {
  //   // Visit the page
  //   cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/");
  
  //   // Ensure the register tab is available and click it
  //   cy.get('#popup-login-tab_list')
  //     .should('exist')
  //     .and('be.visible');
  //   cy.get('.popup-login-tab-register').click();
  
  //   // Ensure the phone number input field is visible
  //   cy.get('#register_phone').should('be.visible');
  
  //   // Remove the readonly attribute from the phone number input field
  //   cy.get('#register_phone')
  //     .invoke('removeAttr', 'readonly')
  //     .should('not.have.attr', 'readonly');
  
  //   // Enter an existing phone number
  //   cy.get('#register_phone')
  //     .should('be.visible')
  //     .type('0901775705', { force: true });
  
  //   // Ensure the send OTP button is visible and click it
  //   cy.get('.fhs-input-icon.fhs-textbox-send')
  //     .should('be.visible')
  //     .click({ force: true });
  
  //   // Verify the alert message
  //   cy.get('.fhs-input-alert')
  //     .should('be.visible')
  //     .and('contain', 'Số điện thoại đã tồn tại');
  
  
  //   cy.get('button.fhs-btn-register').should('be.disabled');
  // });
  it('điền mật khẩu và thông tin tài khoản nhưng lưu thông tin thất bại', () => {
    // Visit the login page
    cy.visit("https://www.fahasa.com/customer/account/login/referer/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/");

    // Click on the register tab
    cy.get('#popup-login-tab_list').should('exist').and('be.visible');

    // Click the "Đăng ký" tab
    cy.get('.popup-login-tab-register').click();

    // Enter phone number into the input field
    cy.get('#register_phone')
        .should('be.visible')
        .type('0982080380', { force: true });

    // Click on the send OTP button
    cy.get('.fhs-input-icon.fhs-textbox-send').click();

    // Verify that the OTP alert message is displayed
    cy.get('.fhs-input-alert')
        .should('be.visible')
        .and('contain', 'OTP đã được gửi');

    // Simulate OTP verification step
    cy.pause();//Nhập tay

    
    // Verify OTP success message
    cy.get('.fhs-input-alert')
        .should('be.visible')
        .and('contain', 'OTP hợp lệ');
    
    // Enter password
    cy.get('#register_password')
        .should('be.visible')
        .type('123456', { force: true });

    // Click the register button
    cy.get('button[class="fhs-btn-register"]').click();

    // Verify navigation to the account edit page
    cy.url().should('include', 'https://www.fahasa.com/customer/account/edit/');

    // Enter last name
    cy.get('input[name="lastname"]')
        .should('be.visible')
        .type('Nguyễn', { force: true });

    // Select gender
    cy.get('input[type="radio"][name="gender-radio"]').check('2', { force: true });

    // Enter birth date
    cy.get('input[name="day"]')
        .should('be.visible')
        .type('26', { force: true });

    cy.get('input[name="month"]')
        .should('be.visible')
        .type('06', { force: true });

    cy.get('input[name="year"]')
        .should('be.visible')
        .type('2003', { force: true });

    // Click the save button
    cy.get('#btn-save-account-info').click();

    // Verify the alert message for empty fields
    cy.get('.fhs-input-alert')
        .should('be.visible')
        .and('contain', 'Thông tin này không thể để trống');
    });
    

  
})