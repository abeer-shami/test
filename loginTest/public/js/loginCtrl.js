
loginApp.controller('loginCtrl',['$scope','$http',($scope,$http,$window) => {

    $scope.login= () =>
    {
        $http.post('/api/login', {email:$scope.email , password:$scope.password}).then(r => {
            $scope.user = r.data;
        }, e => {
            $scope.errorMessage = e.data.message;
        });
    };
    $scope.say = () => {
      window.alert('Yessss');

  };

}]);
