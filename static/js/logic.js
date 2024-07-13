
// Store our API endpoint as queryUrl
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl).then(function(earthquakeData) {
    //Send data.features object to the createFeatures function.
    console.log(earthquakeData);
    createFeatures(earthquakeData.features);
});

function createMap(earthquakes) {
    // Create the base layers
        let street =  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 5,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })
        // Create map
        var myMap = L.map("map", {
            center: [44.58, -103.46],
            zoom: 5,
            layers: [street, earthquakes]
        });
    
        // Create a control
        // Pass in baseMaps and overlayMaps
        // Add the control to the map
        L.control.layers(baseMaps, overlayMaps, {
            collapsed: false
        }).addTo(myMap); 
        
        let legend = L.control({position: 'bottomright'});
    
        legend.onAdd = function (myMap) {
    
            let div = L.DomUtil.create('div', 'info legend'),
                grades = [-10, 10, 30, 60, 90],
                labels = [],
                legendInfo = "<h5>Magnitude</h5>";
    
            for (let i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    '<i style="background:' + markerColor(grades[i] + 1) + '"></i> ' +
                    grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
            }    
    
            return div;
    
            };
    
            // Add legend to map
            legend.addTo(myMap);
    }



// Create markers whose size increases with magnitude and color with depth
function createMarker(feature, latlng) {
    return L.circleMarker(latlng, {
        radius: markerSize(feature.properties.mag),
        fillColor: markerColor(feature.geometry.coordinates[2]),
        color:"#000",
        weight: 0.5,
        opacity: 0.5,
        fillOpacity: 1
    });
}

