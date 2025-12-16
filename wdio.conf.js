exports.config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        platformName: "Android",
        platformVersion: "11", // Update as per your Android version
        deviceName: "Explore", // Your device name
        app: "C:\\Users\\nagadurga.k\\Downloads\\ApproveHub-UAT_REL-V1.0.0.apk", // Path to your APK file
        appPackage: "com.piersoft.approvehub", // APK package name
        appActivity: "com.piersoft.approvehub.MainActivity", // Main activity of your app
        automationName: "UiAutomator2", // Android automation engine
    }],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};
