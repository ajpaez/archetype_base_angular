import { ArchetypePage } from './app.po';

describe('archetype App', function() {
  let page: ArchetypePage;

  beforeEach(() => {
    page = new ArchetypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
