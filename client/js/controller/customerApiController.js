/**
 * Created by tonyStark on 11/23/2016.
 */
myApp.controller('customerApiController',['$scope','Api',function($scope,Api){
    $scope.form = {};
    $scope.customers =[];
    $scope.addDatabase = function(){
        Api.Customer.save({},$scope.form,function(data){
            $scope.customers.push(data);
        });

    }
    Api.Customer.query({},function(data){
        $scope.customers=data;
    });

    $scope.delete = function(index){
        Api.Customer.delete({id:$scope.customers[index]._id},function(data){
            $scope.customers.splice(index,1);
        });
    }
}]);
