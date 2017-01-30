(function(){
    angular.module("primeiraApp").factory("msgs", [
        'toastr',
        MsgsFactory
    ]);

    function MsgsFactory(toastr){
        function addMsg(mensagem, titulo, metodo){
            if(mensagem instanceof Array){
                mensagem.forEach(msg => toastr[metodo](msg, titulo));
            }else{
                toastr[metodo](mensagem);
            }
        }

        function addSucesso(mensagem){
            addMsg(mensagem, "Sucesso", "success");
        }

        function addErro(mensagem){
            addMsg(mensagem, "Erro", "error");
        }

        return {addSucesso, addErro};
    }
})();