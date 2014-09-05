var app = angular.module('controllers', []);


app.controller('LoadCtrl', function ($scope,$http) {
	
	
	$scope.clickOnItem= false;
		
	var url = "http://104.131.209.134/redis?redisid=en_US:finance:tab:menu&redisdo=GET&callback=JSON_CALLBACK";
	
	$http.jsonp(url).success(function(data){
		
		 $scope.rss=data;
		
	});
	
	url = "http://104.131.209.134/redis?redisid=en_US:finance:news:mostread&redisdo=ZREVRANGE&callback=JSON_CALLBACK";
	$http.jsonp(url).success(function(data){
		
		 $scope.items=data;
		
	});
	
	$scope.selectItem = function(item) {
	
		$scope.clickOnItem=true;
		$scope.selectedItem= item;
		
	}
	
	
	$scope.selectRss = function(rs) {
		
		console.log('Dropdown is now: '+rs.Tab);
		$scope.status.isopen = !$scope.status.isopen;
		
		$scope.left_menus = rs;
				
		
	}
	
	$scope.selectMenu = function(clickmenu) {
		
		console.log('menu_link: '+clickmenu.Redisid);
		
		$scope.clickOnItem=false;
		
		
		url = "http://104.131.209.134/redis?redisid="+clickmenu.Redisid+"&redisdo=ZREVRANGE&callback=JSON_CALLBACK";
		$http.jsonp(url).success(function(data){
			
			 $scope.items=data;
			
		});	
		
		
		
		
	}
		
	$scope.status = {
	  isopen: false
	};
	
	
	
	
}).directive('ads', function() {
    return {
        restrict: 'A',
        templateUrl: 'templates/ads.html',
        controller: function(){
            (adsbygoogle = window.adsbygoogle || []).push({});
        }
    };
}).directive('rightsideads', function() {
    return {
        restrict: 'A',
        templateUrl: 'templates/rightsideads.html',
        controller: function(){
            (adsbygoogle = window.adsbygoogle || []).push({});
        }
    };
});




