app.controller('controller', function($scope, $log){
    $scope.students = [];
    $scope.name = '';
    $scope.dob = '';
    $scope.gender = '';
    $scope.studied = '';
    $log.log(students)
    $scope.add = function(){
        $scope.students.push({"name": $scope.name, "dob": $scope.dob,
        "gender": $scope.gender, "learned": $scope.studied});
        alert('Successfully saved!')
    };
    $scope.reset = function(){
        $scope.name = '';
        $scope.dob = '';
        $scope.gender = '';
        $scope.studied = '';
    };

});