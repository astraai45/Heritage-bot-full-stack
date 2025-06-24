import React, { useState, useRef } from "react";
import { Play, AlertCircle, Mic, StopCircle, Languages } from "lucide-react";
import { motion } from "framer-motion";

const AudioRecording = () => {
  const [file, setFile] = useState<Blob | null>(null);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Function to start the recording
  const startRecording = async () => {
    try {
      setError(""); // Reset error message
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl); // Set the audio URL to play
        setFile(audioBlob); // Set the audio file to send to backend
        audioChunksRef.current = [];
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      setError("Failed to access microphone. Please check permissions.");
      console.error("Error starting recording:", err);
    }
  };

  // Function to stop the recording
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
    setIsRecording(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      setError("Please record or select an audio file to upload.");
      return;
    }

    setIsLoading(true);
    setError("");
    setResponse("");

    try {
      const formData = new FormData();
      formData.append("audio", file);
      formData.append("language", selectedLanguage === "English" ? "en" : "ta");

      const response = await fetch("http://localhost:5000/processAudio", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to process audio");
      }

      const data = await response.json();
      setResponse(data.response);

      if (data.audio_url) {
        const audioResponseUrl = `http://localhost:5000${data.audio_url}`;
        const audio = new Audio(audioResponseUrl);
        audio.play();
      }
    } catch (err) {
      setError("Failed to process your recording. Please try again.");
      console.error("Error processing audio:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=2000')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for low brightness effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      ></div>

      {/* Centering content */}
      <div
        className="flex justify-center items-center h-full relative z-10"
        style={{ flexDirection: "column", textAlign: "center" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 mt-16 w-full max-w-md"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Voice Interaction
          </h1>

          {/* Language Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Languages className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Select Language</span>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setSelectedLanguage("English")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedLanguage === "English"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setSelectedLanguage("Tamil")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedLanguage === "Tamil"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Tamil
              </button>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Selected: {selectedLanguage}
            </div>
          </div>

          {/* Recording Controls */}
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              {!isRecording ? (
                <button
                  onClick={startRecording}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors w-full flex items-center justify-center"
                >
                  <Mic className="h-5 w-5 mr-2" />
                  Start Recording
                </button>
              ) : (
                <button
                  onClick={stopRecording}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors w-full flex items-center justify-center"
                >
                  <StopCircle className="h-5 w-5 mr-2" />
                  Stop Recording
                </button>
              )}

              {audioUrl && !isRecording && (
                <div className="mt-4 w-full">
                  <audio controls src={audioUrl} className="w-full" />
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={!file || isLoading}
                className={`px-6 py-3 rounded-lg transition-colors w-full flex items-center justify-center ${
                  !file || isLoading
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                }`}
              >
                {isLoading ? (
                  "Processing..."
                ) : (
                  <>
                    <Play className="h-5 w-5 mr-2" />
                    Upload and Process Audio
                  </>
                )}
              </button>
            </div>

            {error && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                <AlertCircle className="h-5 w-5" />
                <p>{error}</p>
              </div>
            )}

            {response && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Response
                </h3>
                <p className="text-gray-700">{response}</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AudioRecording;