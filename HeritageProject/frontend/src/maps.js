import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap"; // Import Bootstrap Modal from react-bootstrap
import { Link } from "react-router-dom";
const locations = [
  {
    name: "Brihadeeswarar Temple",
    lat: 10.7821,
    lng: 79.1316,
    description:
      "A UNESCO World Heritage site built by Raja Raja Chola I in the 11th century, this temple is an architectural marvel. It features a massive vimana (tower) rising over 66 meters, intricate frescoes, and a huge Nandi statue carved from a single rock.",
    category: "Temple",
  },
  {
    name: "Meenakshi Amman Temple",
    lat: 9.9195,
    lng: 78.1199,
    description:
      "Located in Madurai, this historic temple is famous for its towering gopurams adorned with thousands of colorful sculptures. Dedicated to Goddess Meenakshi and Lord Sundareswarar, the temple complex is a major pilgrimage and cultural site.",
    category: "Temple",
  },
  {
    name: "Shore Temple",
    lat: 12.6228,
    lng: 80.1926,
    description:
      "Standing on the shores of Mahabalipuram, this 8th-century Pallava-era temple is one of the oldest structural stone temples in India. It features exquisite carvings depicting scenes from Hindu mythology and is part of the UNESCO-listed Group of Monuments at Mahabalipuram.",
    category: "Temple",
  },
  {
    name: "Gangaikonda Cholapuram",
    lat: 11.1999,
    lng: 79.4823,
    description:
      "Built by Rajendra Chola I to commemorate his victorious expedition to the Ganges, this temple is an architectural gem of the Chola dynasty. The temple is known for its grand sculptures, detailed inscriptions, and impressive sanctum tower.",
    category: "Temple",
  },
  {
    name: "Airavatesvara Temple",
    lat: 11.0125,
    lng: 79.3841,
    description:
      "A fine example of Chola architecture, this temple in Darasuram is dedicated to Lord Shiva. It is known for its beautifully sculpted pillars, a musical staircase, and a unique vimana adorned with intricate carvings.",
    category: "Temple",
  },
  {
    name: "Thanjavur Maratha Palace",
    lat: 10.7867,
    lng: 79.1378,
    description:
      "Once the residence of the Maratha rulers of Thanjavur, this grand palace complex houses a royal museum, Saraswathi Mahal Library, and an ancient art gallery showcasing Chola bronzes and historical manuscripts.",
    category: "Palace",
  },
  {
    name: "Vivekananda Rock Memorial",
    lat: 8.0787,
    lng: 77.5516,
    description:
      "Situated on a small rocky island off Kanyakumari, this memorial honors Swami Vivekananda’s spiritual enlightenment. It offers breathtaking views of the confluence of the Bay of Bengal, Arabian Sea, and Indian Ocean.",
    category: "Memorial",
  },
  {
    name: "Fort St. George",
    lat: 13.0803,
    lng: 80.2877,
    description:
      "Built in 1644 by the British, this is the first English fortress in India. It now houses the Tamil Nadu Legislative Assembly and a museum with colonial artifacts, weapons, and portraits of British rulers.",
    category: "Fort",
  },
  {
    name: "Vattakottai Fort",
    lat: 8.1277,
    lng: 77.5431,
    description:
      "A scenic coastal fort built during the Travancore rule, offering panoramic sea views. The fort’s black granite walls and its strategic location near Kanyakumari make it a fascinating historic site.",
    category: "Fort",
  },
  {
    name: "Danish Fort",
    lat: 11.0488,
    lng: 79.8572,
    description:
      "Also known as Fort Dansborg, this 17th-century Danish fort in Tharangambadi (Tranquebar) was a major trading post. It now serves as a museum showcasing artifacts from the colonial era.",
    category: "Fort",
  },
  {
    name: "Pazhamudircholai",
    lat: 10.0089,
    lng: 78.1805,
    description:
      "One of the six sacred abodes of Lord Murugan, this temple is located atop a lush green hill near Madurai. It is known for its serene surroundings and association with Tamil literature and devotion.",
    category: "Temple",
  },
  {
    name: "Ramanathaswamy Temple",
    lat: 9.2886,
    lng: 79.3174,
    description:
      "Situated on Rameswaram island, this temple is one of the holiest pilgrimage sites in India. It features a 1,200-meter-long pillared corridor, the longest of its kind in the world, and is associated with the Ramayana.",
    category: "Temple",
  },
  {
    name: "Mahabalipuram Cave Temples",
    lat: 12.6175,
    lng: 80.1928,
    description:
      "A group of rock-cut temples and monolithic sculptures built by the Pallavas in the 7th century. These caves depict mythological scenes, including the famous ‘Descent of the Ganges’ relief.",
    category: "Cave Temple",
  },
  {
    name: "Sittanavasal Cave",
    lat: 10.4522,
    lng: 78.5978,
    description:
      "A Jain cave temple known for its exquisite frescoes dating back to the 7th century. The paintings depict scenes of lotus ponds, Jain monks, and royal patrons in vibrant colors.",
    category: "Cave Temple",
  },
  {
    name: "Kalakkad Mundanthurai Tiger Reserve",
    lat: 8.6275,
    lng: 77.3828,
    description:
      "A biodiversity hotspot in the Western Ghats, home to tigers, leopards, and endemic flora and fauna. The reserve is a mix of tropical forests and grasslands, attracting nature enthusiasts and wildlife photographers.",
    category: "Wildlife Sanctuary",
  },
  {
    name: "Gingee Fort",
    lat: 12.2541,
    lng: 79.4164,
    description:
      "Dubbed the 'Troy of the East', this massive hill fort consists of three citadels and is one of the most impregnable forts in South India. It offers breathtaking views and a rich history of battles.",
    category: "Fort",
  },
  {
    name: "Poompuhar",
    lat: 11.1385,
    lng: 79.8496,
    description:
      "An ancient port city that was once the flourishing capital of the Chola dynasty. It is believed to be partially submerged due to erosion and holds immense archaeological significance.",
    category: "Historical Site",
  },
  {
    name: "Thirumalai Nayakkar Mahal",
    lat: 9.9191,
    lng: 78.1194,
    description:
      "Built in the 17th century by King Thirumalai Nayak, this Indo-Saracenic palace is known for its grand pillars, massive courtyard, and beautiful stucco work. It was once one of the most magnificent palaces in South India.",
    category: "Palace",
  },
  {
    name: "Kanchi Kailasanathar Temple",
    lat: 12.8476,
    lng: 79.7001,
    description:
      "The oldest temple in Kanchipuram, built by the Pallava dynasty in the 8th century. It features intricate sandstone carvings and is dedicated to Lord Shiva.",
    category: "Temple",
  },
  {
    name: "Srivilliputhur Andal Temple",
    lat: 9.5127,
    lng: 77.6332,
    description:
      "This temple is famous for its 192-foot-tall gopuram, one of the tallest in Tamil Nadu. It is associated with Andal, a revered Tamil poet-saint, and is a major Vaishnavite pilgrimage center.",
    category: "Temple",
  },
];

const TamilNaduMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null); // State to manage selected location for modal
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  // Custom Marker Icon
  const markerIcon = new L.Icon({
    iconUrl: "https://www.svgrepo.com/show/38705/location-pin.svg", // Custom pin icon
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Position the anchor at the bottom center of the icon
    popupAnchor: [0, -32], // Position of the popup relative to the icon
  });

  // Function to handle marker click
  const handleMarkerClick = (loc) => {
    setSelectedLocation(loc); // Set selected location
    setShowModal(true); // Show modal
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedLocation(null); // Reset selected location
  };

  return (
    <div style={{ height: "100vh" }}>
      {/* MapContainer for Tamil Nadu */}
      <MapContainer
        center={[11.1271, 78.6569]}
        zoom={7}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Adding markers with custom icons */}
        {locations.map((loc, index) => (
          <Marker
            key={index}
            position={[loc.lat, loc.lng]}
            icon={markerIcon}
            eventHandlers={{
              click: () => handleMarkerClick(loc), // Show modal when a marker is clicked
            }}
          />
        ))}
      </MapContainer>

      {/* Modal to display location details */}
      {selectedLocation && (
        <Modal show={showModal} onHide={closeModal} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedLocation.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p>
                <strong>Category:</strong> {selectedLocation.category}
              </p>
              <p>
                <strong>Latitude:</strong> {selectedLocation.lat}
              </p>
              <p>
                <strong>Longitude:</strong> {selectedLocation.lng}
              </p>
              <p>
                <strong>Description:</strong> {selectedLocation.description}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/chat" type="button" className="btn btn-primary">
              Know More
            </Link>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default TamilNaduMap;
