angular.module('myApp', [])
    .controller('MyCtrl', [
    '$scope',
    '$location',
    function($scope,$location){
    $scope.posts = [];

  	$scope.create = function() {
  	var url = $location.absUrl().split('?')[0]
	var dir = url.substring(0, url.lastIndexOf('/'));
    $scope.posts.push({title:$scope.title,href:dir});
    
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var s = fso.CreateTextFile("~:\\test.txt", true);
    s.writeline("HI");
    s.writeline("Bye");
    s.writeline("-----------------------------");
    s.Close();



    $scope.title='';

  	};



    }
    ]);