angular.module('myApp', ['ngSanitize'])
    .controller('MyCtrl', [
    '$scope',
    '$location',
    function($scope,$location){
    $scope.posts = [];


  	$scope.create = function() {

  //URL
  var url = $location.absUrl().split('?')[0]
	var dir = url.substring(0, url.lastIndexOf('/'));
    $scope.posts.push({title:$scope.title,href:dir});
    $scope.titleDisplay = $scope.title;
    var temp = template;
    temp = temp.replace("#Name",$scope.name);
    temp = temp.replace("#aboutMe",$scope.aboutMe);
    temp = temp.replace("#email",$scope.email);
    temp = temp.replace("#phoneNumber",$scope.phoneNumber);
    temp = temp.replace("#aboutMe",$scope.aboutMe);

    temp = temp.replace("natureboy.jpg",$scope.pic1);
    temp = temp.replace("girl_mountain.jpg",$scope.pic2);
    temp = temp.replace("boy.jpg",$scope.pic3);
    temp = temp.replace("man_bench.jpg",$scope.pic4);
    temp = temp.replace("girl.jpg",$scope.pic5);
    temp = temp.replace("girl_train.jpg",$scope.pic6);

    temp = temp.replace("#info",$scope.info);



    $scope.page = temp;
//

  	//files
  
}



    }
    ]);