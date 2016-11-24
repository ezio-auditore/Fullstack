/**
 * Created by tonyStark on 11/23/2016.
 */
myApp.factory('Api',['$resource',function($resource){
    return {
        Customer : $resource('/api/customers/:id',{id : '@id'})
    }
}])
