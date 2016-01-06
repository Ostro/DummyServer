'use strict';

angular.module('dummyServerApp.auth', [
  'dummyServerApp.constants',
  'dummyServerApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
