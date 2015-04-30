'use strict';

import HomeCtrl from './home.controller';

function homeRoute($stateProvider) {
  $stateProvider.state('main.home', {
    url: '/',
    templateUrl: 'app/views/home/home.view.html',
    controller: HomeCtrl,
    controllerAs: 'HomeCtrl',
    title: 'home'
  });
}

export default homeRoute;
