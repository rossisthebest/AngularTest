(function () {
	'use strict'

	var app = angular.module('webxApp', []);
	app.controller('WebXController', WebXController);
	
	function WebXController($scope) {
		//debugger;
		$scope.a1 = "ross";
		
		$scope.calculate = function (p) {
			console.log(p);
			//return p / 10;
			//$scope.result = p / 10;
			//this.policies
			p.taxvalue = (p.premium / 100) * p.tax;
		}
		
		$scope post = function () {
			var data = this.policies;
			$http.post('/Get.aspx', data, config).then(
			function() {
				console.log("posted");
			}, 
			function () {
				console.warn("failed");
			});
		}
		
		this.policies = 
			[
				{
					"id": 1,
					"policyholder": 'fai',
					"dob": '1991-01-01',
					"address": 'london',
					"postcode": 'ec2m 7qh',
					"mobile": 11111,
					"premium": 50,
					"taxvalue": 0
				},
				{
					"id": 2,
					"policyholder": 'sean',
					"dob": '1992-02-02',
					"address": 'wickford',
					"postcode": 'ss11 7ad',
					"mobile": 22222,
					"premium": 75,
					"taxvalue": 0
				},
				{
					"id": 3,
					"policyholder": 'matt',
					"dob": '1993-03-03',
					"address": 'southend',
					"postcode": 'ss2 1xy',
					"mobile": 33333,
					"premium": 30.5,
					"taxvalue": 0
				}
			];
			
		//console.dir(this.policies);
	}
})();