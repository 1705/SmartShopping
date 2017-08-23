angular.module('eshopping', ['ngRoute', 'cart', 'Checkout'])
.config(['$routeProvider','$qProvider', function($routeProvider, $qProvider){
	$routeProvider.otherwise({
		redirectTo: '/cart'
	})
	 $qProvider.errorOnUnhandledRejections(false);
}])