import image10 from "../assets/images/image10.png";
import image11 from "../assets/images/image11.png";
import image12 from "../assets/images/image12.png";
import image16 from "../assets/images/image16.png";
import image14 from "../assets/images/image14.png";
import image15 from "../assets/images/image15.png";

const emergencyList = [
  {
    EmergencyCategoryTitle: "Heart attack",
    image: image10,
    path: "Heart attack",
  },
  { EmergencyCategoryTitle: "Strokes", image: image11, path: "Strokes" },
  { EmergencyCategoryTitle: "Allergic", image: image12, path: "Allergic" },
  { EmergencyCategoryTitle: "Choking", image: image15, path: "Choking" },
  { EmergencyCategoryTitle: "Bleeding", image: image16, path: "Bleeding" },
  { EmergencyCategoryTitle: "Gas Leaks", image: image14, path: "Gas Leaks" },
];

export default EmergencyConfig = { emergencyList };
