//  Element variables
const searchInput  = document.querySelector('#search-bar');
const searchIcon   = document.querySelector('.search-icon');
let searchInputV = null;

// Set the value Of the Lat and Long as Lat and Lon
import{searchLocation} from './map.js';

// Custom variables
let Lat  = 0;
let Lon = 0;

// Make a request to the geocoding service for getting the user location
function convertValue(){
    // Initialize the input value `location`
    searchInputV = searchInput.value;
    let locationString = searchInputV;
    
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationString)}`)
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            // Extract the Latitude and Longitude from the response
        const { lat, lon } = data[0];
            
            // import the Lat and Lon variables from mps file
        Lat = `${lat}`;
        Lon = `${lon}`;
        
        // getMap(Lat, Lon);
        searchLocation(Lat, Lon);
        // Log the coordinates
        console.log(Lat);
        console.log(Lon);
        console.log(data);
        } else {
        console.log('Location not found');
        }
    })
    .catch(error => {
        console.log('Error:', error);
    });
}

searchIcon.addEventListener('click', convertValue);
    