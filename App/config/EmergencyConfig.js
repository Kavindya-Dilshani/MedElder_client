import image10 from "../assets/images/image10.png";
import image11 from "../assets/images/image11.png";
import image12 from "../assets/images/image12.png";
import image16 from "../assets/images/image16.png";
import image14 from "../assets/images/image14.png";
import image15 from "../assets/images/image15.png";
import image17 from "../assets/images/image17.png";
import image18 from "../assets/images/image18.jpg";
import image19 from "../assets/images/image19.jpeg";
import image20 from "../assets/images/image20.jpeg";

const emergencyList = [
  {
    id: 1,
    EmergencyCategoryTitle: "Heart attack",
    image: image10,
    route: "EmergencyEvents",
    details: {
      heading: "Heart Attack",
      image: image17,
      steps: [
        "Recognize the symptoms",
        "Call Emergency services",
        "Take Aspirin (if appropriate)",
        "Take Nitroglycerin (if prescribed)",
        "Sit down & stay clam.",
        "Stay Alert for signs of Worsening",
      ],
    },
  },

  {
    id: 2,
    EmergencyCategoryTitle: "Strokes",
    image: image11,
    route: "EmergencyEvents",
    details: {
      heading: "Strokes",
      image: image17,
      steps: [
        "Call emergency services",
        "Record the time symptoms started",
        "Remain Calm and Focused",
        "Check breathing and unconsciousness",
        "Avoid giving food or drink",
        "Prepare for medical responders",
      ],
    },
  },

  {
    id: 3,
    EmergencyCategoryTitle: "Allergic",
    image: image12,
    route: "EmergencyEvents",
    details: {
      heading: "Allergic",
      image: image17,
      steps: [
        "Administer Epinephrine as per the instructions",
        "Call Emergency Services",
        "Stay Calm and Monitor Symptoms",
        "Avoid Additional Allergens",
        "Administer a Second Dose (if Necessary)",
      ],
    },
  },
  {
    id: 4,
    EmergencyCategoryTitle: "Choking",
    image: image15,
    route: "EmergencyEvents",
    details: {
      heading: "Choking",
      image: image17,
      steps: [
        "Assess the situation",
        "Perform Self-Administered Heimlich Maneuver",
        "Call emergency services",
        "Continue attempts to clear airway.",
        "Seek medical help",
        "Monitor and reassure",
      ],
    },
  },
  {
    id: 5,
    EmergencyCategoryTitle: "Bleeding",
    image: image16,
    route: "EmergencyEvents",
    details: {
      heading: "Bleeding",
      image: image17,
      steps: [
        "Assess the situation",
        "Apply direct pressure",
        "Elevate the wound (if possible)",
        "Secure the dressing",
        "Call emergency services",
        "Avoid moving excessively",
      ],
    },
  },
  {
    id: 6,
    EmergencyCategoryTitle: "Gas Leaks",
    image: image14,
    route: "EmergencyEvents",
    details: {
      heading: "Gas Leaks",
      image: image17,
      steps: [
        "Evacuate the area",
        "Do not light matches or use flames",
        "Open windows and doors",
        "Turn off the gas supply (if safe)",
        "Call emergency services",
        "Do not re-enter until safe",
      ],
    },
  },
];

export default EmergencyConfig = { emergencyList };
