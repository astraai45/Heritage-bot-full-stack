import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

const ChatInterface: React.FC = () => {
  const [locations, setLocations] = useState<any>({});
  const [selectedCity, setSelectedCity] = useState<any>("");
  const [pdfs, setPdfs] = useState<any[]>([]);
  const [selectedPdf, setSelectedPdf] = useState<any>("");
  const [userQuestion, setUserQuestion] = useState<any>("");
  const [chatHistory, setChatHistory] = useState<any[]>([]);

  // Fetch locations and PDF files from the Flask API
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/getLocations_v2"
        );
        setLocations(response.data); // Set the locations data
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };
    fetchLocations();
  }, []);

  // Handle city change
  const handleCityChange = (event: React.ChangeEvent<any>) => {
    const city = event.target.value;
    setSelectedCity(city);
    setPdfs(locations[city] || []); // Update PDFs based on selected city
    setSelectedPdf(""); // Reset PDF selection
  };

  // Handle PDF change
  const handlePdfChange = (event: React.ChangeEvent<any>) => {
    setSelectedPdf(event.target.value);
  };

  // Handle user question input change
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserQuestion(event.target.value);
  };

  // Send the question to the Flask API for response
  const handleAskQuestion = async () => {
    if (userQuestion.trim() === "" || !selectedPdf) return;

    // Add the user question to chat history
    const newChatHistory = [...chatHistory, { sender: "user", message: userQuestion }];
    setChatHistory(newChatHistory);

    try {
        // Construct the full PDF path
        const fullPdfPath = `Locations/${selectedCity}/${selectedPdf}`;
        
        const response = await axios.post("http://127.0.0.1:5000/chat", {
            question: userQuestion,
            pdf: fullPdfPath, // Send full path to the PDF
        });

        setChatHistory([
            ...newChatHistory,
            { sender: "bot", message: response.data.answer || "No answer found." },
        ]);

    } catch (error) {
        console.error("Error asking question:", error);
        setChatHistory([
            ...newChatHistory,
            {
                sender: "bot",
                message: "Sorry, something went wrong while getting the response.",
            },
        ]);
    }

    setUserQuestion(""); // Clear the input after sending
};

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center p-12"
      style={{
        backgroundImage:
          "url('https://s7ap1.scene7.com/is/image/incredibleindia/1-meenakshi-amman-temple-madurai-tamil-nadu-attr-hero?qlt=82&ts=1726654442664')",
      }}
    >
      <div className="space-y-6">
        {/* City Dropdown */}
        <div>
          <label className="block text-lg font-medium text-white">
            Select a City
          </label>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="mt-2 block w-full p-2 border rounded-lg bg-white text-black"
          >
            <option value="">-- Select a City --</option>
            {Object.keys(locations).map((city: any) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* PDF Dropdown */}
        <div>
          <label className="block text-lg font-medium text-white">
            Select a PDF
          </label>
          <select
            disabled={!selectedCity} // Disable if no city is selected
            value={selectedPdf}
            onChange={handlePdfChange}
            className="mt-2 block w-full p-2 border rounded-lg bg-white text-black"
          >
            <option value="">-- Select a PDF --</option>
            {pdfs.map((pdf: any, index: any) => (
              <option key={index} value={pdf}>
                {pdf}
              </option>
            ))}
          </select>
        </div>

        {/* Chat Interface */}
        <div className="mt-4 bg-gray-100 p-4 rounded-lg h-96 overflow-auto">
          <div className="space-y-4">
            {chatHistory.map((chat: any, index: any) => (
              <div
                key={index}
                className={`flex ${
                  chat.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg ${
                    chat.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  {chat.message}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Question Input */}
        <div className="mt-4 flex">
          <input
            type="text"
            value={userQuestion}
            onChange={handleQuestionChange}
            className="mt-2 block w-full p-2 border rounded-lg bg-white text-black"
            placeholder="Ask a question"
          />
          <button
            onClick={handleAskQuestion}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
