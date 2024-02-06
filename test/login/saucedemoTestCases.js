describe('Test Case 1: Login with Valid Credentials', async () => {
    beforeEach(async() => {
        browser.url('https://www.saucedemo.com/');

        const usernameInput = $("#user-name");
        const passwordInput = $("#password");
        const loginButton = $("#login-button");
        
        await usernameInput.setValue("standard_user");
        await passwordInput.setValue("secret_sauce");
        await loginButton.click();
    });
    it('Test Case 2: Verify Product Inventory', async () => {
        const inventoryPageTitle = $(".title");
        await expect(inventoryPageTitle).toBeDisplayed();
        const productName = $('#item_4_title_link');
        const backToProducts = $('#back-to-products');
        await productName.click();
        await expect(backToProducts).toBeDisplayed();
        await backToProducts.click();
        await expect(productName).toBeDisplayed();
    });
    it('Test Case 3: Verify Sort Button', async () => {
        // Selecionar a opção de classificação de baixo para cima (lohi)
        const sortByPriceOptionlohi = $('option[value="lohi"]');
        await sortByPriceOptionlohi.click();
        await browser.pause(2000);
        const containsTextlohi = await browser.$('body').getText();
        expect(containsTextlohi).toContain('Price (low to high)');

        const sortByPriceOptionhilo = $('option[value="hilo"]');
        await sortByPriceOptionhilo.click();
        await browser.pause(2000);
        const containsTexthilo = await browser.$('body').getText();
        expect(containsTexthilo).toContain('Price (high to low)');

        const sortByPriceOptionaz = $('option[value="az"]');
        await sortByPriceOptionaz.click();
        await browser.pause(2000);
        const containsTextaz = await browser.$('body').getText();
        expect(containsTextaz).toContain('Name (A to Z)');

        const sortByPriceOptionza = $('option[value="za"]');
        await sortByPriceOptionza.click();
        await browser.pause(2000);
        const containsTextza = await browser.$('body').getText();
        expect(containsTextza).toContain('Name (Z to A)');
       
    });
    it('Test Case 4: Complete the purchase', async () => {
        const productName = await $('.inventory_item_name');      
        const addtocartButton1 = $("#add-to-cart-sauce-labs-backpack");
        const addtocartButton2 = $("#add-to-cart-sauce-labs-bike-light");
        const addtocartButton3 = $("#add-to-cart-sauce-labs-onesie");
        const cartValidation = $(".shopping_cart_link");
        const cartBadgeText = await $('.shopping_cart_badge');
        const checkoutButton = await $("#checkout");
        const firstName = await $('#first-name');
        const lastName = await $('#last-name');
        const postalCode = await $('#postal-code');
        const continueButton = $('#continue')
        const finishButton = $('#finish')
        const backHomeButton = $('#back-to-products')
        await expect(productName).toBeDisplayed();
        await addtocartButton1.click();
        await addtocartButton2.click();
        await addtocartButton3.click();
        await expect(cartBadgeText).toHaveTextContaining('3');
        await cartValidation.click();
        await checkoutButton.click();
        await firstName.setValue("Yago");
        await lastName.setValue("Alonso");
        await postalCode.setValue("32310370");
        await continueButton.click();
        await finishButton.click();
        await backHomeButton.click();
    });
    it('Test Case 5: Cart (Add and Remove)', async () => {
        const cartValidation = $(".shopping_cart_link");
        const addtocartButton1 = $("#add-to-cart-sauce-labs-backpack");
        const addtocartButton2 = $("#add-to-cart-sauce-labs-bike-light");
        const addtocartButton3 = $("#add-to-cart-sauce-labs-onesie");
        const removecartButton2 = $('#remove-sauce-labs-bike-light');
        const removeButton = $("#remove-sauce-labs-backpack");
        const continueShoppingButton = $('#continue-shopping');
        const cartBadgeText = await $('.shopping_cart_badge');
        await browser.pause(2000);
        await addtocartButton1.click();
        await addtocartButton2.click();
        await addtocartButton3.click();
        await expect(cartBadgeText).toHaveTextContaining('3');
        await removecartButton2.click();
        await expect(cartBadgeText).toHaveTextContaining('2');
        await cartValidation.click();
        await expect(removeButton).toBeDisplayed();
        await removeButton.click();
        await continueShoppingButton.click();
        await expect(cartBadgeText).toHaveTextContaining('1');

    });
    it('Test Case 6: Logout', async () => {
        const burguerMenu = $("#react-burger-menu-btn");
        const logoutButton = $('#logout_sidebar_link'); 
        await burguerMenu.click();
        await logoutButton.click();
    });
});
