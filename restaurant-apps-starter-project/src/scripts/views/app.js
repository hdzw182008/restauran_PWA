import routes from '../routes/routes';
import urlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ hamburger, nav, main }){
    this._hamburger = hamburger;
    this._nav = nav;
    this._main = main;

    this._initialAppShell();
  }

  _initialAppShell(){
    DrawerInitiator.init({
      hamburger: this._hamburger,
      nav: this._nav,
      main: this._main,
    });
  }

  async renderPage() {
    const url = urlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._main.innerHTML = await page.render();
    await page.afterRender();
  }
};

export default App;