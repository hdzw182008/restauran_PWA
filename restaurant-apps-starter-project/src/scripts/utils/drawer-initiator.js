const DrawerInitiator = {
  init({ hamburger, nav, main }){
    hamburger.addEventListener('click', (event) => {
      this._toggleDrawer(event, nav);
    });

    main.addEventListener('click', (event) => {
      this._closeDrawer(event, nav);
    });
  },

  _toggleDrawer(event, nav) {
    nav.setAttribute('id', 'drawer');
    event.stopPropagation();
  },

  _closeDrawer(event, nav) {
    event.stopPropagation();
    nav.removeAttribute('id');
  }
};

export default DrawerInitiator;