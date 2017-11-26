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

dropApp.controller('homectrl', function($scope, $http) {
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

    $scope.uploadbtn = function() {
        console.log('upbtn');
        document.getElementById('fileid').click();
        console.log('clicked');
        $('#fileid').change(function() {
            console.log('processUpload');
            var fd = new FormData();
            fd.append('a',"123");
            //fd.append('file', document.getElementById('fileid').files[0]);
            var data = $.param({
                a:'123'
            });
            console.log(fd);
            var res = $http.post('/upload', data).then(function(){
                //sucess
                console.log('success');
            }, function(){
                //error
                console.log('error');
            });
            console.log('submitted');
        });
    };

  });


