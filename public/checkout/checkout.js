angular.module('Checkout', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when( '/checkout', {
		templateUrl: 'public/checkout/checkout.html',
		Controller: 'CheckoutCtrl'
	});
}])

.controller('CheckoutCtrl', ['$scope', 'CommonProp', function($scope, CommonProp){
	$scope.selectedItems = CommonProp.getItems();	
	$scope.checkoutTotal = CommonProp.getTotal();	
}])