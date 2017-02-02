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

        var password ='';
        $scope.isAdmin = false;

        refresh();


        $scope.addPost = function() {
          if($scope.post==''){ return false;}

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
            });
        };

        $scope.remove = function(id) {
            console.log(id);
            $http.get('/publisher/remove/?id='+id+'&pass='+password).success(function(response) {
                refresh();
            })
        }

        $http.get("/publisher/stats").success(function(response) {
          $scope.stats = response;
        });    


     $scope.getAdmin = function() {
    var userPass = prompt("Enter admin password:");
    $http.post('/publisher/checkAdminPassword', {pass: userPass}).success(function(res) {
      if (!res.result) {
        alert("Oops, password is wrong!");
      } else {
        password = userPass;
        $scope.isAdmin = true;
        var elements = document.getElementsByClassName("glyphicon-remove");
        for (var i =0; i<elements.length;i++) {
          elements[i].style.display = 'block';
        }
        refresh();
    
      }
    });
   };
};

})();

