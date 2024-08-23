//Index site for testing practice: https://www.selenium.dev/selenium/web/index.html


//Import modules

// import { Builder, Browser } from 'selenium-webdriver';


//Include Webdriver in code


const { Builder, By, until, message, Browser } = require('selenium-webdriver');

async function setupDriver() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
     //Access  the URL
     await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

     //Assert Title
     let title = await driver.getTitle();
     
     //Set Implicit Await (explicit await can be configured later)
     await driver.manage().setTimeouts({implicit: 500});
     
     //Find Element and Click Button
     let textBox = await driver.findElement(By.name('my-text')).sendKeys('Selenium');
     let pwd = await driver.findElement(By.name('my-password')).sendKeys('Test@123');
     let textArea = await driver.findElement(By.name('my-textarea')).sendKeys('Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordCounter will help to make sure its word count reaches a specific requirement or stays within a certain limit.') 

     //Perform Submit action
    let submit = await driver.findElement(By.xpath('/html/body/main/div/form/div/div[2]/button')).click()

  } finally {

    //End the session after wait
    await driver.manage().setTimeouts({implicit: 5000});
    await driver.quit();
  }
}

// Call the async function
setupDriver().catch(console.error);