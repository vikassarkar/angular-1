require.config({
    waitSeconds: 20,
    baseUrl: '',

    paths: {
        'angular': 'https://code.angularjs.org/1.4.3/angular',
        'angularAMD': 'https://cdn.jsdelivr.net/angular.amd/0.2.1/angularAMD.min',
        'angular-ui-router': '//rawgit.com/angular-ui/ui-router/0.2.15/release/angular-ui-router',
        
        'homeController':'scripts/homeController',
        'aboutController':'scripts/aboutController',
        'contactController':'scripts/contactController',
        'app':'app'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angular-ui-router': ['angular'],
        'angularAMD': ['angular']
    },
    deps: ['app']
});