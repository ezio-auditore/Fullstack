/**
 * Created by tonyStark on 11/23/2016.
 */
myApp.controller('customerApiController',['$scope','Api',function($scope,Api){
    $scope.form = {};
    $scope.customers =[];
    $scope.maxSize = 5;
    $scope.currentPage = 1;
    $scope.addDatabase = function(){
        Api.Customer.save({},$scope.form,function(data){
            $scope.customers.unshift(data);
        });

    }
    Api.Customer.query({},function(data){
        $scope.customers=data.reverse();
    });

    $scope.delete = function(index){
      bootbox.confirm("Are you sure you want to delete this customer?",function(answer){
        if(answer==true)
        Api.Customer.delete({id:$scope.customers[index]._id},function(data){
            $scope.customers.splice(index,1);
        });
      });

    }
    $scope.reset = function(){
      bootbox.confirm("Are you sure you want to reset you form?",function(answer){
        if(answer==true){
          $scope.form=null;
        }
      })
    }

}]);
