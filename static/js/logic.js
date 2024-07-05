
//store url
const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson';

// Create a Leaflet map object.
var myMap = L.map("map", {
    center: [44.58, -103.46],
    zoom: 5, 
});

// Add a Leaflet tile layer.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 5,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap)


