window.initMap = function () {
	const map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 37.5400456, lng: 126.9921017 },
		zoom: 5,
		zoomControl: false,
		scaleControl: false,
		mapTypeControl: false,
	});

	const location = [
		{ label: "A", name: "제주도", lat: 33.4200, lng: 126.50667 },
		{ label: "B", name: "다낭", lat: 16.0544068, lng: 108.2021667 },
		{ label: "C", name: "도쿄", lat: 35.6894875, lng: 139.6917064 },
		{ label: "D", name: "오사카", lat: 34.6936, lng: 135.5023441 },
		{ label: "E", name: "후쿠오카", lat: 33.5903547, lng: 130.4017155 },
		{ label: "F", name: "삿포로", lat: 43.0620958, lng: 141.3543763 },
		{ label: "G", name: "하노이", lat: 21.0090571, lng: 105.8607507 },
		{ label: "H", name: "호치민", lat: 10.8230989, lng: 106.6296638 },
		{ label: "I", name: "방콕", lat: 13.7522, lng: 100.4941345 },
		{ label: "J", name: "비엔티안", lat: 17.96312, lng: 102.615025 },
		{ label: "K", name: "타이베이", lat: 25.0671234, lng: 121.611452 },
		{ label: "L", name: "홍콩", lat: 22.396428, lng: 114.109497 },
		{ label: "M", name: "마카오", lat: 22.198745, lng: 113.543873 },
		{ label: "N", name: "괌", lat: 13.444304, lng: 144.793731 },
		{ label: "O", name: "세부", lat: 10.607936, lng: 123.8857747 },
	];

	const bounds = new google.maps.LatLngBounds();
	const infoWindow = new google.maps.InfoWindow();

	location.forEach(({ label, name, lat, lng }) => {
		const marker = new google.maps.Marker({
			position: { lat, lng },
			label,
			map,
			title: `${label}. ${name}`,
			optimized: false,
			animation: google.maps.Animation.DROP,
		});
		bounds.extend(marker.position);
		marker.addListener("click", () => {
			infoWindow.close();
			infoWindow.setContent(marker.getTitle());
			infoWindow.open(marker.getMap(), marker);
			map.panTo(marker.position);
			updateInfo(marker);
		});
	});
	map.fitBounds(bounds);
};

function updateInfo(marker) {
	var markerData = {
		title: `${marker.title}`,
		description: `${marker.label}`,
		// 추가적인 필드들을 포함할 수 있습니다.
	};

	// 업데이트된 정보를 마커 정보 업데이트 영역에 출력
	var markerInfoElement = document.getElementById("marker-info");
	markerInfoElement.innerHTML = `
    <h2>${markerData.title}</h2>
    <p>${markerData.description}</p>
    `;
}