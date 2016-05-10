app.controller('myCtrl', function($scope) {
            $scope.tableHeaders = [{'slNo': 'slNO', 'name':'Name', 'age':'Age', 'gender':'Gender', 'action': 'Action'}]
            $scope.details = []
            $scope.add = function(){
                $scope.details.push({'name': $scope.name, 'age': $scope.age, 'gender': $scope.gender})
            };
            $scope.remove = function(index){
                $scope.details.splice(index, 1)
            };