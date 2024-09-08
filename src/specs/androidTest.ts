describe('My Login Application', () => {
    it('Should login with valid credentials', async () => {
        const menu = $("~open menu");
        await menu.click();
        
        // await browser.pause(2000);
        await ($("~menu item log in")).click();

        await ($("~Username input field")).setValue("test@example.com");
        await ($("~Password input field")).setValue("GulTest123");

    });
});