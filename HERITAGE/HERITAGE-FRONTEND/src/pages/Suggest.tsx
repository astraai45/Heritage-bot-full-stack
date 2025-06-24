import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const places = [
  "Brihadeeswarar Temple",
  "Meenakshi Amman Temple",
  "Shore Temple",
  "Fort St. George",
  "Rameswaram Temple",
  "Kanchipuram Temples",
  "Thanjavur Palace and Museum",
  "Arjuna's Penance",
  "Virupaksha Cave",
  "The Rockfort Temple",
  "Padmanabhapuram Palace",
  "Thirumalai Nayakar Mahal",
  "Kodaikanal Lake",
  "Poompuhar",
  "Darasuram Temple",
  "Jambukeswarar Temple",
  "Kumbakonam Temples",
  "Nilgiri Mountain Railway",
  "Alagar Kovil",
  "Chidambaram Nataraja Temple",
  "Srirangam Ranganathaswamy Temple",
  "Kanchipuram Varadaraja Perumal Temple",
  "Madurai Meenakshi Temple",
  "Dakshina Chitra",
  "Valluvar Kottam",
  "DakshinaChitra Heritage Center",
  "Sittannavasal Cave",
  "Kanyakumari Temple",
  "Mysore Palace",
  "Nagore Dargah",
  "Gangaikonda Cholapuram",
  "Thanjavur Maratha Palace",
  "Vivekananda Rock Memorial",
  "Coonoor",
  "Kothandaramaswamy Temple",
  "Srirangapatna",
  "Kailasanathar Temple",
  "Vellore Fort",
  "Basilica of Our Lady of Good Health",
  "Bharathiyar Park",
  "Chidambaram Temple",
  "Nellaiappar Temple",
  "Sundareswarar Temple",
  "Uvari Church",
  "Muttom Beach",
  "The Tidel Park",
  "Ariyalur",
  "Vandavasi",
  "Kolli Hills",
  "Pondicherry",
  "Kottur",
  "Thiruparankundram Temple",
  "Kaveripakkam",
  "Thiruvannamalai",
  "Vellimalai",
  "Udhagamandalam (Ooty)",
  "Annamalai Wildlife Sanctuary",
  "Tiruchirapalli Rock Fort",
  "Ramanathaswamy Temple",
  "Kanchipuram",
  "Vivekananda Memorial Hall",
  "Annamalaiyar Temple",
  "Kumbakonam",
  "Meghamalai",
  "Tiruvarur",
  "Tirunelveli",
  "Sundaravarada Perumal Temple",
  "Kanchipuram Silk Weaving Industry",
  "Ramanathapuram",
  "Madhurai Thirumalai Nayakar Mahal",
  "Kanyakumari Beach",
  "The Great Living Chola Temples",
  "Thiruchendur Murugan Temple",
  "Sathyamangalam Wildlife Sanctuary",
  "Gangaikonda Cholapuram Temple",
  "Dhanushkodi",
  "Vivekananda Memorial",
  "Tiruvallur",
  "Vedaranyam",
  "Azhagarkovil",
  "Pudukkottai",
  "Mannargudi",
  "Kudumiyanmalai",
  "Keelaperumpallam",
  "Sittanavasal",
  "Vailankanni",
  "Agasthyakoodam",
  "Pichavaram",
  "Tharangambadi",
  "Karaikal",
];
const Dropdown: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter places based on search input
  const filteredPlaces = places.filter((place) =>
    place.toLowerCase().includes(search.toLowerCase())
  );

  // Handle selection
  const handleSelect = (place: string) => {
    setSelected(place);
    setIsOpen(false);
    setSearch("");
  };

  // Send request to Flask backend
  const fetchRecommendation = async () => {
    if (!selected) return;
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/recommend",
        { place: selected },
        { headers: { "Content-Type": "application/json" } }
      );
      setRecommendations(response.data.recommendation || []);
    } catch (error: any) {
      console.error(
        "Error fetching recommendation",
        error.response?.data || error
      );
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.abhibus.com/blog/wp-content/uploads/2023/06/Arunachalam-Temple-Complete-Guide-How-to-Reach-Timings.jpg')",
        filter: "brightness(75%)",
      }}
    >
      {/* Dropdown */}
      <div className="relative w-80 mx-auto" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-lg shadow-md flex justify-between items-center"
        >
          {selected || "Select a place"}
          <span className="text-gray-500">▼</span>
        </button>

        {isOpen && (
          <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-y-auto border">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border-b focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
              {filteredPlaces.length > 0 ? (
                filteredPlaces.map((place, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSelect(place)}
                  >
                    {place}
                  </li>
                ))
              ) : (
                <li className="p-2 text-gray-500">No results found</li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Recommend Button */}
      <button
        onClick={fetchRecommendation}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700"
      >
        Recommend Places
      </button>

      {/* Recommendations Section */}
      {recommendations.length > 0 && (
        <div className="mt-6 w-120 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Recommended Places
          </h3>

          {/* Display recommendations as a list */}
          <ul className="list-disc list-inside text-gray-700">
            {recommendations.map((place, index) => (
              <li key={index} className="p-2">
                {place}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
