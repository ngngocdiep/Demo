describe('GioHang', () => {

    // it ('verify-cart', () => {
    //     cy.visit("https://www.fahasa.com/checkout/cart/")
    //     cy.title().should('eq', 'Giỏ hàng - FAHASA.COM')
    // })
    // it('muasamngay',() =>{
    //     cy.visit("htps://wwwt.fahasa.com/checkout/cart/")
    //     cy.title().should('eq', 'Giỏ hàng - FAHASA.COM')
    //     cy.get('button.button-shopping').click()
    // })

    it('add-cart',() =>{
        cy.visit("https://www.fahasa.com/") 
        cy.visit("https://www.fahasa.com/duong-xua-may-trang-theo-got-chan-but-tai-ban-2024.html?fhs_campaign=FLASHSALE")
        // cy.title().should('eq', 'Giỏ hàng - FAHASA.COM')
        cy.get('.product_view_add_box > .btn-cart-to-cart').click()
        cy.get('.wrapper_box')
        cy.visit('https://www.fahasa.com/checkout/cart/')
    })
})