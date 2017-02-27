app.config(['$routeProvider',function($routeProvider) {

	$routeProvider
		.when('/',{
			templateUrl : 'views/cilayout.html',
			controller : 'loginController'

			
 		})
		.when('/mainpage',{
			templateUrl : 'views/mainpage.html',
			controller : 'mainController'
		})
		.when('/register',{
			templateUrl : 'views/register.html',
			controller : 'mainController'
		})
		.otherwise({
			redirectTo : '/'
			
		})
}]);


