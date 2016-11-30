myApp.controller('chatController',['$scope',function($scope){
    Socket.connect();
    console.log("User Connected");
    
    $scope.$on('$locationChangeStart',function(event){
        Socket.disconnect();
        console.log("User disconnected");
    })
}])