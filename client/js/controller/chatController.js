myApp.controller('chatController',['$scope','Socket',function($scope,Socket){
    Socket.connect();
    
    $scope.$on('$locationChangeStart',function(event){
        Socket.disconnect();
    })
}])