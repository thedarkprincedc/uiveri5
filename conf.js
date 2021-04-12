exports.config = {
    profile: "integration",
    baseUrl: "https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html",  
    // specs: "./tests/*.spec.js",
    reporters: [{
        name: './reporter/junitReporter',
        reportName: 'target/report/myReport.xml',
        prefix: 'mySuitePrefix',
        postfix: 'mySuitePostfix'
    }]
}
