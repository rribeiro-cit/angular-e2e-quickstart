import { browser, by, element } from 'protractor';
var fs = require('fs');

function writeScreenShot(data, filename) {
  var stream = fs.createWriteStream(filename);
  stream.write(new Buffer(data, 'base64'));
  stream.end();
}

export class SettingsPage {

  private btnLogin = element(by.xpath('//md-card-actions/button'));
  private btnNext = 'identifierNext'
  private username = 'identifierId'
  private password = '//*[@id="password"]/div[1]/div/div[1]/input'
  private btnNextPsswd = 'passwordNext'

  navigateTo() {
    return browser.get('/');
  }

  clickLogin() {
    browser.sleep(2000);
    return this.btnLogin.click().then(() => {
      browser.sleep(1000).then( () => {
       this.selectPopup();
      })
    });
  }

  clickNext() {
    return browser.driver.findElement(by.id(this.btnNext)).click();
  }

  clickNextPsswd() {
    return browser.driver.findElement(by.id(this.btnNextPsswd)).click();
  }

  async fillUsername(name: string) {
    browser.sleep(1000);
    await browser.driver.findElement(by.id(this.username)).sendKeys(name);
    await this.clickNext();
      // .then(() => {
      //     browser.takeScreenshot().then((pic) => {
      //       writeScreenShot(pic, 'popup.png');
      //     })
      // })
  }

  async fillPassword(pswd: string) {
    browser.sleep(1000);
    await browser.driver.findElement(by.xpath(this.password)).sendKeys(pswd);
    await this.clickNextPsswd();
    return this.returnToWindow();
  }

  getAllWindows() {
    return browser.getAllWindowHandles()
  }

  selectPopup() {
    return this.getAllWindows().then((ids) => {
      return browser.switchTo().window(ids[1])
    })
  }

  returnToWindow() {
    return this.getAllWindows().then((ids) => {
      return browser.switchTo().window(ids[0])
    })
  }

}