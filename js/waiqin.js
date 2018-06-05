/*计算两点间的距离*/
function distance(point1, gpsPoint) {

}

/*根据两点间的距离进行排序*/
function sortByDistance(points) {

}

/*计算多点之间的距离并排序*/
function sort(points, gpsPoint) {
	for(int i = 0 , size = points.length; i < size; i++) {
		plus.maps.Map().calculateDistance(gpsPoint, points[i], function(event) {
			var distance = event.distance; // 转换后的距离值
			alert("Distance:" + distance);
		}, function(e) {
			alert("Failed:" + JSON.stringify(e));
		});
	}
}