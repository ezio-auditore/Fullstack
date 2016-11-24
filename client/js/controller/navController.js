/**
 * Created by tonyStark on 11/22/2016.
 */
myApp.controller('navController',['$location','$scope',function($scope,$location){
    $scope.isActive = function(destination){
        return destination === $location.path();
    }
}]);