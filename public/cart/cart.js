angular.module('cart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when( '/cart', {
		templateUrl: 'public/cart/cart.html',
		Controller: 'CartCtrl'
	});
}])

.controller('CartCtrl', ['$scope', '$http', 'CommonProp', function($scope, $http, CommonProp){
	$scope.shopData = CommonProp.getItems();
	if(!$scope.shopData){
		$http.get('public/list.json').then(function(response){
			$scope.shopData = response.data;
		});
	}
	$scope.total = function(){
		var t=0;
		for(var k  in $scope.shopData){
			t+= parseInt($scope.shopData[k].selected);
		}
		CommonProp.setTotal(t);
		return CommonProp.getTotal();
		// return t;
	}
	$scope.$watch('shopData', function(){
		CommonProp.setItems($scope.shopData);
	})
}])

.directive('checkList', function(){
	return {
		resrtict: 'E',
		scope: {
			option: '=',
			name: '=',
			selected: '='
		},
		template: function(elem, attr) {
			return '<div class="panel-body">\
						<div class="radio" ng-repeat="i in option">\
							<label><input type="radio" name="{{name}}" ng-value="{{i.price}}" ng-model="$parent.selected">{{i.size}},{{i.price}}</label>\
						</div>\
					</div>'
		}
	};
})

.service('CommonProp', function(){
	var items = '';
	var Total = 0;

	return{
		getItems: function(){
			return items;
		},
		setItems: function(value){
			items = value;
		},
		getTotal: function(){
			return Total;
		},
		setTotal: function(value){
			Total = value;
		},
	}
})