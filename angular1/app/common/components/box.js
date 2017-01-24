angular.module("primeiraApp").component("valueBox", {
    bindings: {
        grid: '@',
        colorClass: '@',
        value: '@',
        title: '@',
        icon: '@'
    },
    controller: [
        "gridSystem",
        function(gridSystem){//como foi criada a factory das classes, ela vai pra o template
            this.$onInit = function(){
                this.gridClasses = gridSystem.toCSSClasses(this.grid);
            }
        }
    ],
    template:`
        <div class="{{$ctrl.gridClasses}}">
            <div class="small-box {{$ctrl.colorClass}}">
                <div class="inner">
                    <h3>{{$ctrl.value}}</h3>
                    <p>{{$ctrl.title}}.</p>
                </div>
                <div class="icon">
                    <i class="{{$ctrl.icon}}"></i>
                </div>
            </div>
        </div>
    `
});