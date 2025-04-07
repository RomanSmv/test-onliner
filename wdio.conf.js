exports.config = {
    runner: 'local',
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/step-definitions/**/*.ts'],
        backtrace: true,
        requireModule: ['ts-node/register'],
        timeout: 30000,
    },
    specs: [
        './features/**/*.feature'
    ],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--disable-gpu', '--window-size=1920,1080']
        }
    }],
    services: ['chromedriver'],
    baseUrl: 'https://www.onliner.by',
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    frameworkOptions: {
        require: [
            '@cucumber/pretty-formatter'
        ]
    }
};
