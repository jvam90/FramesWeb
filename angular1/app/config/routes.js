angular.module('primeiraApp').config([
	'$stateProvider',
	'$urlRouterProvider',
	($stateProvider, $urlRouterProvider) => {
		$stateProvider.state('dashboard', {
			url: "/dashboard",
			templateUrl: "dashboard/dashboard.html"
		})
		.state('billingCycles', {
			url: "/billingCycles",
			templateUrl: "billingCycle/tabs.html"
		});
		$urlRouterProvider.otherwise('/dashboard');
	}	
]);


/*
	Para trabalhar com rotas no angular, preciso do angular ui router que vai fazer a troca de estados.
	Estados são o que nós definimos. Acima, o estado dashboard, vai chamar a url para /dashboard e vai carregar o template 
	onde tiver definido por ui-view
*/