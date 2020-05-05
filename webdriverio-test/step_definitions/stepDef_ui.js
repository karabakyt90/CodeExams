
Given(/^User is on SauceDemo home page$/, () => {
  browser.url('www.saucedemo.com')
 
});

When(/^User logs in to the site$/, () => {
  sauceDemo.username.sendKeys(Config.getProperty("SaucedemoUsername"));
  sauceDemo.password.sendKeys(Config.getProperty("SaucedemoPassword"));
  sauceDemo.loginBtn.click();
});

When(/^User sorts the items$/, () => {
  Dropdown.selectByValue("lohi");
});

When(/^User adds two or more items to the shopping cart$/, () => {
  sauceDemo.item1.click();
  sauceDemo.item2.click();});

Then(/^User visits the shopping cart$/, () => {
  sauceDemo.shopping_cart.click();
});

Then(/^User verifies items that were added to the cart$/, () => {
  item1 = "Sauce Labs Onesie";
  item2 = "Sauce Labs Bolt T-Shirt";
  actualText1 = sauceDemo.productsTitle1.getText();
  actualText2 = sauceDemo.productsTitle2.getText();

  Assert.assertEquals("title is different", actualText1, item1);
  Assert.assertEquals("title is different", actualText2, item2);});

When(/^User removes an item and then continues shopping$/, () => {
  sauceDemo.removebutton.click();
  sauceDemo.continueShopping.click();});

When(/^User adds another item$/, () => {
  sauceDemo.item1.click();
});

Then(/^User visits the shopping cart$/, () => {
  item1 = "Sauce Labs Bolt T-Shirt";
  item2 = "Sauce Labs Backpack";

  actualText1 = sauceDemo.getItem1.getText();
  actualText2 = sauceDemo.getItem2.getText();

  Assert.assertEquals("title is different", actualText1, item1);
  Assert.assertEquals("title is different", actualText2, item2);});

Then(/^User verifies that he is purchasing the correct items$/, () => {
  return true;
});

Then(/^User clicks on checkout button and enters first "([^"]*)", last "([^"]*)" and postal code "([^"]*)"$/, (args1, args2, args3) => {
  Thread.sleep(3000);
  sauceDemo.checkout.click();
  sauceDemo.first_name.sendKeys(Config.getProperty("firstName"));
  sauceDemo.last_name.sendKeys(Config.getProperty("lastName"));
  sauceDemo.postalcode.sendKeys(Config.getProperty("postalCode"));
  sauceDemo.continue1.click();
});

Then(/^User verifies the total price and finishes the checkout$/, () => {
  total_price = "Total: $49.66";
  actualText = sauceDemo.totalprice.getText();
  Assert.assertEquals("title is different", actualText, total_price);
  sauceDemo.finish.click();});



