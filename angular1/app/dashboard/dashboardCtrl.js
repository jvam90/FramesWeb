(function(){
    angular.module("primeiraApp").controller("dashboardCtrl", [
    "$http",
    dashboardCtrl    
    ]);

    function dashboardCtrl($http){
        const vm = this;
        this.getResumo = function(){
            const url = "http://localhost:3003/api/billingSummary";
            $http.get(url).then(function(resposta){                
                vm.credito = resposta.data.credito;
                vm.debito = resposta.data.debito;
                vm.total = vm.credito - vm.debito;
            });
        }
        this.getResumo();
    }
})();

