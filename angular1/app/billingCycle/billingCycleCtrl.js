(function(){
    angular.module("primeiraApp").controller("BillingCycleCtrl", [
        "$http",
        "msgs",
        BillingCycleCtrl
    ]);

    function BillingCycleCtrl($http, msgs){
        const vm = this;
        const url = "http://localhost:3003/api/billingCycles";            

        vm.refresh = function(){
            $http.get(url).then(function(resposta){
                vm.ciclo = {};                
                vm.ciclos = resposta.data;
            });  
        }

        vm.create = function(){            
            $http.post(url, vm.ciclo).then(function(resposta){
                vm.refresh();
                msgs.addSucesso("Operação realizada com sucesso.");
            }).catch(function(resposta){                
                msgs.addErro(resposta.data.erros);
            });
        };

        vm.refresh();
    }
})();