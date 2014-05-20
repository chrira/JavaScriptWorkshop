var MyCtrl = function ($scope) {
    $scope.ratings = [];

    $scope.addRating = function(){
        $scope.ratings.push({name: $scope.name, rating: $scope.rating, entered: new Date()});
    }

};
