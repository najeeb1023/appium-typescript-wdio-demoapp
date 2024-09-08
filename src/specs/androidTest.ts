describe('My Login Application', () => {
    it('Should login with valid credentials', async () => {
        await (await $("~open menu")).click();
        await browser.pause(2000);
        await (await $("~menu item log in")).click();
    });
});