(function () {
  'use strict';

  var app = angular.module("GithubBrowser", [])

  // global config goes here

  app.value('LocalStorage', localStorage);

  app.filter('before', function () {
    return function (value, before) {
      if (value) {
        return before + value;
      }
    }
  })

  app.filter('percentage', function () {
    return function (value) {
      var num = (angular.isNumber(value)) ? value : 0;
      return num + "%";
    }
  })

})();
