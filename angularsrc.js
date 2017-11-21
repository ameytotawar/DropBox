var dropApp = angular.module("dropApp",[]);

dropApp.controller('mainctrl', function($scope) {
    $scope.logbut = true;
    $scope.login = function() {
        $scope.logbut = false;
        $scope.template = {
            name: 'login.html',
            url: 'views/login.html'
        };
    };

    //dropApp.controller('logintrl', function($scope) {
        $scope.loginsignup = function() {
            $scope.template = {
                name: 'signup.html',
                url: 'views/signup.html'
            };
        };
    
    //});
    
});

dropApp.controller('homectrl', function($scope) {
    $scope.orderByField = 'name';
    $scope.reverseSort = false;
    
    $scope.data = {
      rows: [{
        name: 'John',
        modified: 'Doe',
        members: 30
      },{
        name: 'Frank',
        modified: 'Burns',
        members: 54
      },{
        name: 'Sue',
        modified: 'Banter',
        members: 21
      }]
    };
  });


