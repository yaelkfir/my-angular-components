import { MyAngularComponentsPage } from './app.po';

describe('my-angular-components App', () => {
  let page: MyAngularComponentsPage;

  beforeEach(() => {
    page = new MyAngularComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
