# Quick overview

In this file you can see and get to know the API's and how did I used them 

# Table of contents
- [Big Data Cloud](#Big-Data-Cloud)
    - [Way I did use it](#Way-I-did-use-it^)
    - [My prosess](#My-prosess^)
    - [Installation](#Installation^)

- [Nominatim](#Nominatim)
    - [Way I did use it](#Way-I-did-use-it^^)
    - [My prosess](#My-prosess^^)
    - [Installation](#Installation^^)

- [OpenWeatherMap for Leaflet based maps](#OpenWeatherMap-for-Leaflet-based-maps)
    - [Way I did use it](#Way-I-did-use-it^^^)
    - [My prosess](#My-prosess^^^)
    - [Installation](#Installation^^^)


## Big Data Cloud

### Way I did use it^
I did use the `Big Data Cloud` API to obtain the user's location. By leveraging this API, the web app can retrieve the nearest location based on available data. It is important to note that the API does not provide the exact user location due to legal restrictions and privacy concerns. Instead, it returns the closest available location as a means to provide weather forecasts to the user without requiring them to manually search for their current location. This approach ensures compliance with privacy regulations while still offering the convenience of personalized weather forecasts.

### My prosess^
In the project, the functionality for retrieving coordinates (`latitude` and `longitude`) from the server and displaying a map is, I have implemented it in a separate JavaScript file. This file utilizes the `fetch()` method to retrieve the coordinates from the server. The retrieved coordinates are then passed as parameters to the `getMap()` function. This function takes `Latitude` and `Longitude` as arguments and sets them as the values for the map coordinates in the `map` variable.

Once the coordinates are set, the map is displayed within the designated `map` div using the `layerControl` variable. This allows for the visualization of the weather data obtained from the OpenWeather API. By following this process, the application successfully retrieves and integrates the necessary data to generate and display the weather map.

### Installation^
**To obtain the URI for the Big Data Cloud API, please follow these steps:**

1. Visit the Big Data Cloud website by clicking on this [link](https://www.bigdatacloud.com/).
2. Navigate to the relevant section or page that provides access to the API.
3. Locate the URI or endpoint that you need for your specific use case. It is typically provided along with the API documentation or in the API console.
4. Copy the URI, ensuring that you capture the complete URL.

Once you have obtained the URI, you can use it in your `fetch()` call to make a GET request to the API. The syntax for the `fetch()` call would be similar to the following:

```javascript
fetch(URI)
  .then(response => response.json())
  .then(data => {
    // Process the retrieved data
  })
  .catch(error => {
    // Handle any errors
  });
```

Replace `URI` with the actual URI you obtained from the Big Data Cloud website. This will allow you to fetch data from the API and perform further processing based on the response.

## Nominatim

### Way I did use it^^
I did use it, because user when is going to type the location for getting the forecast, it's going to be in string format but it should be as latitude and longitude formate 'float'.

### My prosess^^
Sure! Here's a scaled-down version of the description of how you used the Nominatim API for geocoding:

In my weather application, I utilized the Nominatim API provided by OpenStreetMap for geocoding. When a user entered a location as a string, I made a GET request to the Nominatim API using the `fetch()` method.

Here's an example of how I constructed the API request URL:

```javascript
const locationString = "Your location string"; // Replace with the actual location string

const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationString)}&format=json`;
```

I encoded the location string using `encodeURIComponent()` to handle special characters properly. The API response was in JSON format, which made it easy to work with.

Once I received the response, I checked if there were any results returned. If results were found, I extracted the latitude and longitude values from the first result in the response data:

```javascript
if (data.length > 0) {
  const latitude = parseFloat(data[0].lat);
  const longitude = parseFloat(data[0].lon);

  // Use latitude and longitude for further processing
}
```

I then used these latitude and longitude values for various purposes, such as displaying the location on a map or fetching weather data specific to that location.

Note that this is a simplified explanation of how I utilized the Nominatim API for geocoding in my weather application. The actual implementation might involve additional error handling, data validation, and integration with other APIs or functionalities.

### Installation^^
To use the Nominatim API for geocoding in your project, follow these steps:

1. Obtain an API key: The Nominatim API is a free service, and you don't need an API key to access it. However, if you plan to use it extensively or for commercial purposes, it's a good practice to review the usage policy and terms of service provided by OpenStreetMap.

2. Construct the API request URL: The Nominatim API follows a RESTful design, and you can make GET requests to the API endpoint. The base URL for the API is `https://nominatim.openstreetmap.org/search`. To geocode a location, append the query parameter `q` with the location string you want to geocode. Here's an example:

   ```plaintext
   GET https://nominatim.openstreetmap.org/search?q=New+York&format=json
   ```

   In this example, the location string is "New York," and the format parameter is set to JSON to receive the response in JSON format.

3. Send the API request: Use a library like `fetch()` or a framework's built-in HTTP client to send the API request from your JavaScript code. Here's an example using `fetch()`:

   ```javascript
   const locationString = "Your location string"; // Replace with the actual location string

   const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationString)}&format=json`;

   fetch(geocodeUrl)
     .then(response => response.json())
     .then(data => {
       // Process the geocoding data
     })
     .catch(error => {
       // Handle any errors that occur during the API request
     });
   ```

   Replace `"location string"` with the actual location (search bar value) string you want to geocode. The response from the API will be in JSON format.

4. Process the geocoding data: Once you receive the response from the Nominatim API, you can process the geocoding data according to the project requirements. Typically, the response will contain information such as latitude, longitude, address details, and other relevant data about the geocoded location.

   ```javascript
   .then(data => {
        //check if the link on the data it's bigger then 0 if does then extract the latitude and longitude, because if doesn't it's going to an problem
        if (data.length > 0) {
            // Extract the Latitude and Longitude from the response
            const { lat, lon } = data[0];
            
            // import the Lat and Lon variables from mps file
            Lat = `${lat}`;
            Lon = `${lon}`;
        
            // getMap(Lat, Lon);
            searchLocation(Lat, Lon);
        }

   })
   ```

   In this example, we extract the latitude and longitude values from the lat and lon from the first response in the result

Remember to handle any errors that may occur during the API request, such as network issues or invalid responses.

By following these steps, you can integrate the Nominatim API into your project and leverage its geocoding capabilities to convert location strings into latitude and longitude coordinates.

## OpenWeatherMap for Leaflet based maps

### Way I did use it^^^
I did use it, to get the radar map and display it in side the map div.

### My prosess^^^

### Installation^^^