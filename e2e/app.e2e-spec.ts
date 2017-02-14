import { SnackbarCliPage } from './app.po';

describe('snackbar-cli App', function() {
  let page: SnackbarCliPage;

  beforeEach(() => {
    page = new SnackbarCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
