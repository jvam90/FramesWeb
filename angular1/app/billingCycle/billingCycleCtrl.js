(function(){
    angular.module("primeiraApp").controller("BillingCycleCtrl", [
        "$http",
        "msgs",
        "tabs",
        BillingCycleCtrl
    ]);

    function BillingCycleCtrl($http, msgs, tabs){
        const vm = this;
        const url = "http://localhost:3003/api/billingCycles/";

        vm.getResumo = function(){

          vm.totalCredito = 0;
          vm.totalDebito = 0;
          vm.totalConsolidado = 0;

          if(vm.ciclo){
            vm.ciclo.creditos.forEach(function(credito){
              vm.totalCredito += !credito.valor || isNaN(credito.valor) ? 0 : parseFloat(credito.valor);
            });
            vm.ciclo.debitos.forEach(function(debito){
              vm.totalDebito += !debito.valor || isNaN(debito.valor) ? 0 : parseFloat(debito.valor);
            });
            vm.totalConsolidado = vm.totalCredito - vm.totalDebito;
          }
        }

        vm.refresh = function(){
            $http.get(url).then(function(resposta){
                vm.ciclo = {creditos:[{}], debitos:[{}]};
                vm.ciclos = resposta.data;
                tabs.show(vm, {tabList: true, tabCreate: true});
                vm.getResumo();
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

        vm.delete = function(ciclo){
          $http.delete(url + ciclo._id).then(function(resposta){
            vm.refresh();
            msgs.addSucesso("Ciclo excluído com sucesso.");
          }).catch(function(resposta){
              msgs.addErro(resposta.data.erros);
          });
        }

        vm.update = function(ciclo){
          $http.put(url + ciclo._id, ciclo).then(function(resposta){
            vm.refresh();
            msgs.addSucesso("Ciclo atualizado com sucesso.");
          }).catch(function(resposta){
              msgs.addErro(resposta.data.erros);
          });
        }

        vm.mostrarTabUpdate = function(ciclo){
          vm.ciclo = ciclo;
          tabs.show(vm, {tabUpdate: true});
          vm.getResumo();
        }

        vm.mostrarTabDelete = function(ciclo){
          vm.ciclo = ciclo;
          tabs.show(vm, {tabDelete: true});
          vm.getResumo();
        }

        vm.adicionarCredito = function(indice){
          vm.ciclo.creditos.splice(indice + 1, 0, {});
        }

        vm.clonarCredito = function(indice, {nome, valor}){
          vm.ciclo.creditos.splice(indice + 1, 0, {nome, valor});
          vm.getResumo();
        }

        vm.excluirCredito = function(indice){
          if(vm.ciclo.creditos.length > 1){
            vm.ciclo.creditos.splice(indice, 1);
            vm.getResumo();
          }
        }

        vm.adicionarDebito = function(indice){
          vm.ciclo.debitos.splice(indice + 1, 0, {});
        }

        vm.clonarDebito = function(indice, {nome, valor, status}){
          vm.ciclo.debitos.splice(indice + 1, 0, {nome, valor, status});
          vm.getResumo();
        }

        vm.excluirDebito = function(indice){
          if(vm.ciclo.debitos.length > 1){
            vm.ciclo.debitos.splice(indice, 1);
            vm.getResumo();
          }
        }

        vm.refresh();
    }
})();
