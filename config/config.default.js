'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534218426257_6085';

  // add your config here
  config.middleware = [];
  config.yly = {
    base: 'https://open-api.10ss.net',
    authorize: '/oauth/authorize',
    accessToken: '/oauth/oauth',
    refreshToken: '/oauth/oauth',
    addMachineAuth: '/printer/addprinter',
    delMachineAuth: '/printer/deleteprinter',
    menuCreate: '/printmenu/addprintmenu',
    shutdownRestart: '/printer/shutdownrestart',
    printIndex: '/print/index',
    voice: '/printer/setsound',
    printInfo: '/printer/printinfo',
    version: '/printer/getversion',
    cancelAllPrint: '/printer/cancelall',
    cancelOnePrint: '/printer/cancelone',
    setLogo: '/printer/seticon',
    removeLogo: '/printer/deleteicon',
    order: '/printer/getorder',
    btnPrint: '/printer/btnprint',
  };
  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: 'auth',
      db: 0,
    },
  };

  return config;
};
