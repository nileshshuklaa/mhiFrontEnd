import { MhiCodePage } from './app.po';

describe('mhi-code App', () => {
  let page: MhiCodePage;

  beforeEach(() => {
    page = new MhiCodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
