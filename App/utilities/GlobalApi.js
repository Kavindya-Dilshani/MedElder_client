
import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api";
const API_KEY = "AIzaSyCYmVWirR1Tz3ENUdW1OmaZRd0nJ1acVeI";

const nearByPlace = (lat, lng) =>
  axios.get(
    `${BASE_URL}/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=hospital&key=${API_KEY}`
  );

const getDistanceAndDuration = (originLat, originLng, destinationLat, destinationLng) =>
  axios.get(
    `${BASE_URL}/distancematrix/json?origins=${originLat},${originLng}&destinations=${destinationLat},${destinationLng}&key=${API_KEY}`
  );

export default { nearByPlace, getDistanceAndDuration };
