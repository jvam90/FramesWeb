angular.module("primeiraApp").component("contentHeader",{
	bindings:{
		name: "@",//é uma string que não muda
		small: "@"
	},
	template: `
		<section class="content-header">
			<h1>{{$ctrl.name}}<small>{{$ctrl.small}}</small></h1>
		</section>
		`	
})


/*A partir do angular 1.5, eu posso definir componentes*/