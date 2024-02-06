exports.config = {
    runner: 'local',
    specs: [
        './test/**/*.js' 
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome'
   // }, {
   //     browserName: 'firefox'
    //}, {
   //     browserName: 'MicrosoftEdge'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['chromedriver']
      ],
    framework: 'mocha',
    reporters: ['spec','json','video'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
