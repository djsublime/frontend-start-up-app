(function() {
    'use strict';

    angular.module('templateApp', ['ui.router'])

    .run(['$rootScope', function run($rootScope) {

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

            $rootScope.pageTitle = 'Home';
            $rootScope.pageClass = 'home-selector';
            $rootScope.pageContainer = 'container';

            if (angular.isDefined(toState.data.pageTitle)) {

                $rootScope.pageTitle = toState.data.pageTitle;

            }
            if (angular.isDefined(toState.data.pageClass)) {

                $rootScope.pageClass = toState.data.pageClass;

            }
            if (angular.isDefined(toState.data.pageContainer)) {

                $rootScope.pageContainer = toState.data.pageContainer;

            }

        });

    }])

    .config(function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                data: {
                    pageTitle: 'Home',
                    pageClass: 'home-selector',
                    pageContainer: 'container',
                },
                views: {
                    "header": {
                        templateUrl: 'app/views/partials/header.tpl.html'
                    },
                    "banner": {
                        templateUrl: 'app/views/pages/home/banner.tpl.html'
                    },
                    "main": {
                        //templateUrl: 'app/views/pages/home/main.tpl.html'
                    },
                    "info": {
                        //templateUrl: 'app/views/pages/home/info.tpl.html'
                    },
                    "footer": {
                        templateUrl: 'app/views/partials/footer.tpl.html'
                    },
                    "modal": {

                    },
                    "tpl-menu": {
                        templateUrl: 'app/views/partials/tpl-menu.tpl.html'
                    }
                }
            })
            .state('about', {
                url: '/about',
                data: {
                    pageTitle: 'About',
                    pageClass: 'about-selector',
                    pageContainer: 'container-fluid',
                },
                views: {
                    "header": {
                        templateUrl: 'app/views/partials/header.tpl.html'
                    },
                    "banner": {

                    },
                    "main": {
                        templateUrl: 'app/views/dummy.tpl.html'
                    },
                    "info": {
                        
                    },
                    "footer": {
                        templateUrl: 'app/views/partials/footer.tpl.html'
                    },
                    "modal": {

                    }
                }
            })
            .state('contact', {
                url: '/contact',
                data: {
                    pageTitle: 'Contact',
                    pageClass: 'contact-selector',
                    pageContainer: 'container',
                },
                views: {
                    "header": {
                        templateUrl: 'app/views/partials/header.tpl.html'
                    },
                    "banner": {

                    },
                    "main": {
                        templateUrl: 'app/views/dummy.tpl.html'
                    },
                    "info": {
                        
                    },
                    "footer": {
                        templateUrl: 'app/views/partials/footer.tpl.html'
                    },
                    "modal": {

                    }
                }
            });
    })

    .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope'];

    function AppCtrl($scope) {

        var vm = this;

        console.log('AppCtrl controller - started');

        vm.funLogin = function(){

            angular.element($('.player-unauth')).hide();
            angular.element($('.player-auth')).show();
            angular.element($('.player-username')).text('Signed in as ' + angular.element($('input[name="username"]')).val());

        };

        vm.funLogout = function(){

            angular.element($('.player-unauth')).show();
            angular.element($('.player-auth')).hide();

        };


    }

})();
