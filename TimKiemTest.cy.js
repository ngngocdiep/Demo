describe('TimKiemTest', () => {
   
    // it('tk', () => {
    //     cy.visit("https://www.fahasa.com/") 
    //     cy.title().should ('eq', 'Fahasa.com - Nhà sách trực tuyến hàng đầu Việt Nam - FAHASA.COM')
    //     cy.get('input[name="q"]').first().type('Doraemon', { force: true });
    //     cy.get('span[class="ico_search_white"]').click();
    //     cy.get('h2.product-name-no-ellipsis').should('be.visible');
    //     // cy.get('h2.p-name-list').each(($result) => {
    //     //     cy.wrap($result).contains('Doraemon');
    //     cy.get('h2.p-name-list').should('contain', 'Doraemon');
        
    // })
  //   it('search_kitudacbiet',() =>{
  //       cy.visit("https://www.fahasa.com/") 
  //       cy.title().should ('eq', 'Fahasa.com - Nhà sách trực tuyến hàng đầu Việt Nam - FAHASA.COM')
  //       cy.get('input[name="q"]').first().type('+++++=', { force: true });
  //       cy.get('span[class="ico_search_white"]').click();
  // })
  // it('search_1kitubatki',()=>{
  //       cy.visit("https://www.fahasa.com/")
  //       cy.title().should ('eq', 'Fahasa.com - Nhà sách trực tuyến hàng đầu Việt Nam - FAHASA.COM')
  //       cy.get('input[name="q"]').first().type('a', { force: true });
  //       cy.get('span[class="ico_search_white"]').click();
  //       cy.get('h2.product-name-no-ellipsis').should('be.visible');
  //       cy.get('h2.p-name-list').should('contain', 'a');
      
  // })
  // it('search_filter', () => {
  //   cy.visit('https://www.fahasa.com/searchengine?size=n_48_n&filters%5B0%5D%5Bfield%5D=stock_status&filters%5B0%5D%5Bvalues%5D%5B0%5D=n_1_n&filters%5B0%5D%5Btype%5D=all');
    
  //   cy.get('.m-filter-css-checkboxes').eq(1).click();
    
   
     
  // });

  // it('search_sapxep',()=>{
  //   cy.visit('https://www.fahasa.com/searchengine?size=n_48_n&filters%5B0%5D%5Bfield%5D=stock_status&filters%5B0%5D%5Bvalues%5D%5B0%5D=n_1_n&filters%5B0%5D%5Btype%5D=all')
  //   cy.get('.selectArrow-order').click();
  //   cy.wait(2000);
  //   cy.get('.selectOption-order').eq(4).click();
  // })

  it('empty',()=>{
    cy.visit("https://www.fahasa.com/")
    cy.title().should ('eq', 'Fahasa.com - Nhà sách trực tuyến hàng đầu Việt Nam - FAHASA.COM')
    cy.get('input[name="q"]').first().clear({force: true});
    cy.get('span[class="ico_search_white"]').click();
  })
})