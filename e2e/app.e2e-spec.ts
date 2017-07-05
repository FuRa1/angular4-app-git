import { Angular4AppGitPage } from './app.po';

describe('angular4-app-git App', () => {
  let page: Angular4AppGitPage;

  beforeEach(() => {
    page = new Angular4AppGitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
