const APELink = `https://api.bigdatacloud.net/data/reverse-geocode-client`;
const apiKey  = 'f49da6184d17e928327752946fb0ee6d';
let lat = 0;
let lon = 0;

export {lat, lon, searchLocation};

        
// Get and display the map
function getMap(latitude, longitude){

    // Get map layers
    let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18, attribution: '[insert correct attribution here!]' });

    let humanitarian = L.tileLayer('https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors</a> <a href="https://www.hotosm.org/" target="_blank">Tiles courtesy of Humanitarian OpenStreetMap Team</a>'
    });

    let esri = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.jpg", {
    maxZoom: 19, attribution: 'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'});




    // Get Weather liers
    let clouds = L.OWM.clouds({showLegend: false, opacity: 0.5, appId: apiKey});
    // let rain = L.OWM.rain({appId: apiKey});
    let raincls = L.OWM.rainClassic({appId: apiKey});
    let temp = L.OWM.temperature({appId: apiKey});
    let wind = L.OWM.wind({appId: apiKey});
    let city = L.OWM.current({intervall: 15, lang: 'en'});

    let map = L.map('map', { center: new L.latLng(latitude, longitude), zoom: 14, layers: [osm] });
    // Collect the Map liers and set inside an object called baseMaps
    let baseMaps = {"OSM Standard": osm,
    "OSM Humanitarian": humanitarian,
    "OSM Esri": esri};

    // Collect the Weather liers and set inside an object called baseMaps
    let overlayMaps = { "Clouds": clouds,
    "rain": raincls,
    "temp": temp,
    "wind": wind,
    "Cities": city };

    let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

};

//  Get the user geolocation automatically `but it's not the exact location`
fetch(APELink)
        .then(response=> response.json())
        .then(data=>{
            lat = data.latitude;
            lon = data.longitude;
            console.log(lat);
            console.log(lon);

        
            getMap(lat, lon);
        })
        .catch(error=> console.log(error));


        
/**
 *Get the coordinate from the input
    */
const mapContainer = document.querySelector('.map-container');
const mapContainerChild = mapContainer.lastElementChild;
const mapDiv     = document.querySelector("#map");
let inputValue   = document.querySelector('#search-bar');



function searchLocation(x, y){
        
        const newMapDiv  = document.createElement('div');
        newMapDiv.setAttribute('id', "map");
        newMapDiv.setAttribute('class', "map1");
        
        const mapDiv1  = document.createElement('div');
        mapDiv1.setAttribute('id', "map");
        // let newContent = null;

        
        if(!mapContainer.lastElementChild.classList.contains('map1')){
            console.log("it's not");
            
            // remove the prevues div
            mapContainer.lastElementChild.remove();
            
            // add new one
            mapContainer.appendChild(newMapDiv);

            // get and display map
            getMap(x, y);

            // clear the input field
            inputValue.value = "";
        }else{
            console.log("it's contain");

            // remove the prevues div
            mapContainer.lastElementChild.remove();

            // add new one
            mapContainer.appendChild(mapDiv1);

            // get and display map

            getMap(x, y);

            // clear the input field
            inputValue.value= "";
        }
        

};
