exports.config = {
    profile: "integration",
    baseUrl: "https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html", 
    specs: "./tests/*.spec.js",
    reporters: [{
        name: './reporter/junitReporter',
        reportName: 'target/report/myReport.xml',
        prefix: 'mySuitePrefix',
        postfix: 'mySuitePostfix'
    }],
    browsers: [{
        browserName: 'chrome',
            capabilities: {
            chromeOptions: {
                  args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-setuid-sandbox']
                }
            }
        }
    ],
    //useClassicalWaitForUI5: true
    // timeouts: {
    //     getPageTimeout: '10000',
    //     allScriptsTimeout: '11000',
    //     defaultTimeoutInterval: '30000'
    //   }
    // auth: {
    //     'sapcloud-form': {
    //         name: './authenticator/formAuthenticator',
    //         userFieldSelector: '<CSS selector of user input field>',
    //         passFieldSelector: '<CSS selector of password input field>',
    //         user: '${params.user}',
    //         pass: '${params.password}'
    //       }
    // }
}