myApp.controller('slidingMenuController', function($scope){
   $scope.slidingMenu.on('postclose', function(){ $scope.slidingMenu.setSwipeable(false); });
   $scope.slidingMenu.on('postopen', function(){ $scope.slidingMenu.setSwipeable(true); });
});