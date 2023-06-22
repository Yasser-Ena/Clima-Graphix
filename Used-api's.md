# Quick overview

In this file you can see and get to know the API's and how did I used them 

# Table of contents
- [Big data cloud](#Big-data-cloud)
    - [Way I did use it](#Way-I-did-use-it)
    - [My prosess](#My-prosess)
    - [Installation](#Installation)

- [Nominatim](#Nominatim)
    - [Way I did use it](#Way-I-did-use-it)
    - [My prosess](#My-prosess)
    - [Installation](#Installation)

- [OpenWeatherMap for Leaflet based maps](#OpenWeatherMap-for-Leaflet-based-maps)
    - [Way I did use it](#Way-I-did-use-it)
    - [My prosess](#My-prosess)
    - [Installation](#Installation)


## Big data cloud

### Way I did use it
    I did use the `Big Data Cloud` API to obtain the user's location. By leveraging this API, the web app can retrieve the nearest location based on available data. It is important to note that the API does not provide the exact user location due to legal restrictions and privacy concerns. Instead, it returns the closest available location as a means to provide weather forecasts to the user without requiring them to manually search for their current location. This approach ensures compliance with privacy regulations while still offering the convenience of personalized weather forecasts.

### My prosess
    In the project, the functionality for retrieving coordinates (`latitude` and `longitude`) from the server and displaying a map is, I have implemented it in a separate JavaScript file. This file utilizes the `fetch()` method to retrieve the coordinates from the server. The retrieved coordinates are then passed as parameters to the `getMap()` function. This function takes `Latitude` and `Longitude` as arguments and sets them as the values for the map coordinates in the `map` variable.

    Once the coordinates are set, the map is displayed within the designated `map` div using the `layerControl` variable. This allows for the visualization of the weather data obtained from the OpenWeather API. By following this process, the application successfully retrieves and integrates the necessary data to generate and display the weather map.

### Installation

## Nominatim

### Way I did use it
    I did use it, because user when is going to type the location for getting the forecast, it's going to be in string format 

### My prosess

### Installation

## OpenWeatherMap for Leaflet based maps

### Way I did use it

### My prosess

### Installation