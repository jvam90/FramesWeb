(function() {
    angular.module("primeiraApp").component("customInput", {
        bindings: {
            id:"@",
            label:"@",
            grid:"@",
            placeholder:"@",
            type:"@",
            model:"=",
            readonly: "<"
        },
        controller: [
            'gridSystem',
            function(gridSystem){
                this.$onInit = function(){
                    this.gridClasses = gridSystem.toCSSClasses(this.grid);
                }
            }
        ],
        template: `
        <div class="{{$ctrl.gridClasses}}">
            <div class="form-group">
                <label for="{{$ctrl.id}}">{{$ctrl.label}}:</label>
                <input ng-model="$ctrl.model" ng-readonly="$ctrl.readonly" class="form-control" id="{{$ctrl.id}}" placeholder="{{$ctrl.placeholder}}" type="{{$ctrl.type}}">
            </div>
        </div>
        `
    });
})();
