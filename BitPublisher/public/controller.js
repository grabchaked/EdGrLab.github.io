(function() {

    angular
        .module("publisher")
        .controller('MainCtrl', MainCtrl);

    function MainCtrl($scope, $http) {
        var refresh = function() {
            $http.get('/publisher').success(function(response) {

                $scope.posts = response;
                $scope.post = {};
            });

        };

        refresh();


        $scope.addPost = function() {

            console.log($scope.post);
            $http.post('/publisher', $scope.post).success(function(response) {
                console.log(response);
                refresh();
            });
        };

        $scope.like = function(id) {
          console.log(id);
          $http.get('/publisher/like/'+id._id).success(function(response) {
                refresh();
            })
        }

        $scope.remove = function(id) {
            console.log(id);
            $http.delete('/publisher/'+id).success(function(response) {
                refresh();
            })
        }

        $http.get("/publisher/stats").success(function(response) {
          $scope.stats = response;
        });    
    };

})();



  /*
  $scope.posts = [
  {title: 'post 1', upvotes: 5, created:'8:47AM Jan 26, 2017'},
  {title: 'post 2', upvotes: 2, created:'8:47AM Jan 26, 2017'},
  {title: 'post 3', upvotes: 15, created:'8:47AM Jan 26, 2017'},
  {title: 'post 4', upvotes: 9, created:'8:47AM Jan 26, 2017'},
  {title: 'post 5', upvotes: 4, created:'8:47AM Jan 26, 2017'}
];
*
$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') {
   return alert('Fill the title!'); }

  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0,
    created: $scope.created = Date.now(),
    
  });
  $scope.title = '';
  $scope.link = '';

};
$scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
  };

*/

