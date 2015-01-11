'use strict';

/**
 * @ngdoc controller
 * @name AboutCtrl
 * @description
 * Controller of the myApp
 */
(function() {

  angular
    .module('myApp')
    .controller('AboutCtrl', AboutCtrl);

  function AboutCtrl() {
    var vm = this;

    /**
    * @description
    * A list of awesome things.
    * @type string[]
    * @memberof AboutCtrl
    */ 
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }

}());
