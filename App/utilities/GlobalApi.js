
import axios from "axios";
// Define the base URL for the Google Maps API
const BASE_URL = "https://maps.googleapis.com/maps/api";
// Define the API key for the Google Maps API
const API_KEY = "AIzaSyCYmVWirR1Tz3ENUdW1OmaZRd0nJ1acVeI";

// Function to get nearby places (hospitals) based on latitude and longitude
const nearByPlace = (lat, lng) =>
  axios.get(
     // Construct the URL for the nearby search API endpoint
    `${BASE_URL}/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=hospital&key=${API_KEY}`
  );

  // Function to get distance and duration between two locations
const getDistanceAndDuration = (originLat, originLng, destinationLat, destinationLng) =>
  axios.get(
    `${BASE_URL}/distancematrix/json?origins=${originLat},${originLng}&destinations=${destinationLat},${destinationLng}&key=${API_KEY}`
  );

export default { nearByPlace, getDistanceAndDuration };
