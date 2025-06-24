import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Alert, Dropdown } from "react-bootstrap";
import axios from "axios";
import "./RecorderApp.css"; // For custom CSS

const RecorderApp = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioURL, setAudioURL] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default language
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const languages = [
    { name: "English", code: "en" },
    { name: "Tamil", code: "ta" },
  ];

  // Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "audio/webm",
      });
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        setAudioBlob(audioBlob);
        setAudioURL(URL.createObjectURL(audioBlob));
        audioChunksRef.current = [];
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
      setResponse("Recording started...");
      setError("");
    } catch (error) {
      setError("Error accessing microphone: " + error.message);
      setResponse("");
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setResponse("Recording stopped.");
      setError("");
    }
  };

  // Function to speak out the response
  const speakResponse = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US"; // Set language (e.g., English)
      utterance.rate = 1; // Speed of speech
      utterance.pitch = 1; // Pitch of speech
      window.speechSynthesis.speak(utterance);
    } else {
      setError("Speech synthesis is not supported in this browser.");
    }
  };

  // Send audio to backend
  const sendAudio = async () => {
    if (!audioBlob) {
      setError("Please record audio first!");
      return;
    }

    setIsLoading(true);
    setError("");
    setResponse("");

    try {
      const formData = new FormData();
      formData.append("audio", audioBlob, "recording.webm");
      // Add the selected language to the form data
      const selectedLangObj = languages.find(
        (lang) => lang.name === selectedLanguage
      );
      formData.append("language", selectedLangObj.code);

      const response = await axios.post(
        "http://127.0.0.1:5000/processAudio",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResponse(`Response: ${response.data.response}`);
      // Speak out the response
      speakResponse(response.data.response);
    } catch (error) {
      setError(
        `Error sending audio: ${error.response?.data?.error || error.message}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container fluid className="vh-100 d-flex flex-column p-0 recorder-app">
      {/* Background Image with Dark Overlay */}
      <div className="background-image"></div>
      <div className="dark-overlay"></div>

      {/* Header */}
      <Row className="header p-3">
        <Col>
          <h3 className="text-center mb-0 text-light">Audio Recorder</h3>
        </Col>
      </Row>

      {/* Main Content */}
      <Row className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Col xs={12} className="text-center">
          {/* Error Display */}
          {error && (
            <Alert variant="danger" className="error-box">
              {error}
            </Alert>
          )}

          {/* Language Selection Dropdown */}
          <Dropdown className="mb-3">
            <Dropdown.Toggle variant="info" id="dropdown-language">
              {selectedLanguage}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {languages.map((lang) => (
                <Dropdown.Item
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.name)}
                >
                  {lang.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* Record Button */}
          <Button
            variant={isRecording ? "danger" : "outline-danger"}
            onClick={isRecording ? stopRecording : startRecording}
            className="control-button"
          >
            {isRecording ? "Stop Recording" : "Start Recording"}
          </Button>
          <br />

          {/* Playback Button */}
          {audioURL && (
            <Button
              variant="outline-success"
              onClick={() => new Audio(audioURL).play()}
              className="control-button mt-3"
            >
              Play Recording
            </Button>
          )}
        </Col>
      </Row>

      {/* Send Button (Fixed at Bottom) */}
      <Row className="fixed-bottom p-3 bg-dark">
        <Col>
          <Button
            variant="primary"
            onClick={sendAudio}
            className="w-100 send-button"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Send"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default RecorderApp;
