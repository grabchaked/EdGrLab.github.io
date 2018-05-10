(function() {

    var app = angular.module('test-task', []);

    app.controller("mainCtrl", function($scope) {
        $scope.appName = 'DIARY APP';
        $scope.title = 'Comment with no sence';


        $scope.savedItem = localStorage.getItem('items');

        $scope.savedMsg = localStorage.getItem('comments');

        $scope.items = (localStorage.getItem('items') !== null) ?
            JSON.parse($scope.savedItem) : ["First item with custom name", "Second item is active"];

        $scope.comments = (localStorage.getItem('comments') !== null) ?
            JSON.parse($scope.savedMsg) : ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip'];

        localStorage.setItem('items', JSON.stringify($scope.items));
        localStorage.setItem('comments', JSON.stringify($scope.comments));

        $scope.addItem = function() {
            if (!$scope.item) { return alert('Fill the form!'); }

            $scope.items.push($scope.item);
            $scope.item = '';
            localStorage.setItem('items', JSON.stringify($scope.items));
        };


        $scope.removeItem = function(item) {

            $scope.items.splice(item, 1);
            localStorage.setItem('items', JSON.stringify($scope.items));
        }

        $scope.sendMsg = function($event) {
            var keyCode = $event.which || $event.keyCode;
            //if (keyCode === 17 && keyCode === 13 ) { doesn`t work and idk why, so I decided send a comment when Enter is pressed 
            if (keyCode === 13) {
                $scope.comments.push($scope.msg);
                $scope.msg = '';
                localStorage.setItem('comments', JSON.stringify($scope.comments));
            }
        }


    });


})();