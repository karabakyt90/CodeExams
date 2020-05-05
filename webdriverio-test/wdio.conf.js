const path = require('path');

exports.config = {
    
    runner: 'https://www.saucedemo.com/',

    specs: [
        '/features/*.feature',
    ],

    exclude: [],
    maxInstances: 10,
    capabilities: [{ 
        maxInstances: 5,
        browserName: 'chrome',    
    }],
    logLevel: 'trace',
    outputDir: path.join(__dirname, '/logs'),
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        backtrace: false,
        requireModule: ['@babel/register'],
        failAmbiguousDefinitions: true,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        name: [],
        snippets: true,
        source: true,
        profile: [],
        require: [

            './**/*.js'
        ],
        snippetSyntax: undefined,
        strict: true,
        tagExpression: 'not @Pending',
        tagsInTitle: false,
        timeout: 20000,
    },

    
};
