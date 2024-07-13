
//store url
const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson';

// get request
d3.json(url).then(function(earthquakeData){
    console.log(earthquakeData);
    createFeatures(earthquakeData.features)
});


// map
var myMap = L.map("map", {
    center: [44.58, -103.46],
    zoom: 5, 
});

// background tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 5,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap)

// create markers
function createMarker(feature, latlng) {
    return L.circlemarker(latlng, {
        radius: markersize(feature.properties.mag),
        fillColor: markerColor(feature.geometry.coordinates[2]),
        color:"#000",
        weight: 0.5,
        opacity: 0.5,
        fillOpacity: 1
    })
}
