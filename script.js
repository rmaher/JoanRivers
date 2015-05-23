angular.module('InstagramApp', [])

.controller('MyController', function($scope, $http, $sce) {
	$scope.embedUrl = "https://api.instagram.com";

	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	};

	$scope.searchInstagram = function(tag) {
		$scope.tag = tag;

		var url = "https://api.instagram.com/v1/tags/{tag}/media/recent";
		var request = {
			callback: 'JSON_CALLBACK',
			client_id: '48fb6fd85c754109b1c1e4ccc6e3aca0',
			count: 20
		};

		$http({
			method: 'JSONP',
			url: url,
			params: request
		})
		.success(function(data) {
			$scope.results = data;
		})
		.error(function() {
			alert('error');
		});
	};
});