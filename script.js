angular.module('InstagramApp', [])

.controller('MyController', function($scope, $http, $sce) {
	$scope.searchInstagram = function(tag) {
      	var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent";

		$http({
			method: 'JSONP',
			url: url,
			params: {
              callback: 'JSON_CALLBACK',
              client_id: '48fb6fd85c754109b1c1e4ccc6e3aca0',
              count: 24
			}
		})
		.success(function(response) {
          	//console.log(response);
			$scope.results = response.data;
		})
		.error(function() {
			alert('error');
		});
	};
});