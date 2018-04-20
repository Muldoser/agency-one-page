import {
  browser,
  by,
  element,
  ElementFinder,
  promise,
  protractor
} from 'protractor';

export class AppPage {
  navigateTo (): promise.Promise<any> {
    return browser.get('/');
  }

  getParagraphText (): promise.Promise<string> {
    return element(by.css('app-root h1')).getText();
  }
}
