function initMap(){
    const Nelum kuluna = {lat: 6.927114100207588, lng: 79.85833839734991};
    const Camp = {lat: 6.930373068022079, lng: 79.8561496713404};, 
    map = new google.maps.Map(document.getElementById('map'),{

        center: uni,
        zoom: 15,
        mapId: 'd6d1205e9187fda7'
    });

    new google.maps.Marker({
        position: nelum,
        map,
        title: "Nelum Kuluna"

    });
    new google.maps.Marker({
        position: Camp,
        map,
        title: "Camp"

    });
    
    const MyRouteCoordinates = [
        { lat: 6.796059858230645, lng: 79.90082888636698 },
        { lat: 6.793667946401544, lng: 79.90072062428649 },
        { lat: 6.793282731024652, lng: 79.90078377716678 },
        { lat: 6.7913118568276944, lng: 79.90125291284883 },
      ];
    const MyPath = new google.maps.Polyline({
        path: MyRouteCoordinates,
        geodesic: true,
        strokeColor: "#9B5094",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      MyPath.setMap(map);

}
