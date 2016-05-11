angular.module('Eggly', [])
.controller('MainController', function($scope){
    $scope.movieCategories = [
        {'id': 1, 'category': 'horror'},
        {'id': 2, 'category': 'animation'},
        {'id': 3, 'category': 'thriller'},
        {'id': 4, 'category': 'action'},
        {'id': 5, 'category': 'comedy'},
        {'id': 6, 'category': 'romance'}
    ];
    $scope.movies = [
        {'category':'horror', 'movie': 'Resident Evil', 'url': 'http://www.imdb.com/title/tt0120804/?ref_=fn_al_tt_1',
        'raiting': 6.7},
        {'category':'action', 'movie': 'Terminator', 'url': 'http://www.imdb.com/title/tt0088247/?ref_=fn_al_tt_1',
        'raiting': 8.1},
        {'category':'romance', 'movie': 'Sweet November', 'url': 'http://www.imdb.com/title/tt0230838/?ref_=fn_al_tt_1',
        'raiting': 6.7},
        {'category':'comedy', 'movie': 'Mask', 'url': 'http://www.imdb.com/title/tt0110475/?ref_=fn_al_tt_1',
        'raiting': 6.9},
        {'category':'animation', 'movie': 'Up', 'url': 'http://www.imdb.com/title/tt1049413/?ref_=fn_al_tt_1',
        'raiting': 8.3},
        {'category':'thriller', 'movie': 'Shutter Island', 'url': 'http://www.imdb.com/title/tt1130884/?ref_=fn_al_tt_1',
        'raiting': 8.1},
        {'category':'horror', 'movie': 'The Real Conjouring', 'url': 'http://www.imdb.com/title/tt4480938/?ref_=fn_al_tt_1',
        'raiting': 8.1},
        {'category':'action', 'movie': 'Predator', 'url': 'http://www.imdb.com/title/tt0093773/?ref_=fn_al_tt_1',
        'raiting': 7.8},
        {'category':'romance', 'movie': 'The Notebook', 'url': 'http://www.imdb.com/title/tt0332280/?ref_=fn_al_tt_1',
        'raiting': 7.9},
        {'category':'comedy', 'movie': 'TED', 'url': 'http://www.imdb.com/title/tt1637725/?ref_=fn_al_tt_1',
        'raiting': 7.0},
        {'category':'animation', 'movie': 'Mickey Mouse', 'url': 'http://www.imdb.com/title/tt2768802/?ref_=fn_al_tt_4',
        'raiting': 8.2},
        {'category':'thriller', 'movie': 'Seven', 'url': 'http://www.imdb.com/title/tt0114369/?ref_=fn_al_tt_1',
        'raiting': 8.6}
    ];
    $scope.currentCategory = null;
    $scope.showValue = false;
    $scope.setCurrentCategory = function (category){
        $scope.currentCategory = category;
        $scope.showValue = true;
    $scope.getMovies = function(category){
        var retMovies = []
        for (var i=0; i<movies.length; i++){
            if (movies[i]['category'] == category.category){
                    retMovies.push(movies[i])
               }
        }
        return retMovies
    };
    };

});