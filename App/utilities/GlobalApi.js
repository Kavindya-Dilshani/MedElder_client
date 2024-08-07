import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY = "AIzaSyCYmVWirR1Tz3ENUdW1OmaZRd0nJ1acVeI";

const nearByPlace = (lat, lng) =>
  axios.get(
    `${BASE_URL}/nearbysearch/json?location=${lat},${lng}&radius=1500&type=hospital&key=${API_KEY}`
  );

export default { nearByPlace };
