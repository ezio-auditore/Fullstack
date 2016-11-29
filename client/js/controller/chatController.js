myApp.controller('chatController',['$scope','Socket',function($scope,Socket){
    Socket.connect();
    console.log("User Connected");
    
    $scope.$on('$locationChangeStart',function(event){
        Socket.disconnect();
        console.log("User disconnected");
    })
}])