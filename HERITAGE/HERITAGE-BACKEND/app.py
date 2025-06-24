# import os
# import pyttsx3
# from flask import Flask, request, jsonify, send_file
# from flask_cors import CORS
# import speech_recognition as sr
# import subprocess
# from pydub import AudioSegment
# from io import BytesIO
# from PyPDF2 import PdfReader
# import pickle
# import joblib
# import numpy as np
# import pandas as pd
# from sklearn.metrics import pairwise_distances
# import os
# import xgboost as xgb
# from sklearn.preprocessing import LabelEncoder

# # Load Data
# df = pd.read_csv("C:\\React\\Heritage\\backend\\output.csv")
# df = df.drop_duplicates(subset=["Place Name"], keep="first")

# # Encode categorical data
# encoder = LabelEncoder()
# df["Type Encoded"] = encoder.fit_transform(df["Type"])
# df["Location Encoded"] = encoder.fit_transform(df["Location"])
# df["Time Encoded"] = encoder.fit_transform(df["Best Time to Visit"])

# # Feature matrix
# X = df[["Type Encoded", "Location Encoded", "Time Encoded"]]
# y = np.arange(len(df))  

# # Train XGBoost Model
# xgb_model = xgb.XGBClassifier(n_estimators=100, max_depth=5, learning_rate=0.1, random_state=42)
# xgb_model.fit(X, y)

# # Initialize Flask app and CORS
# app = Flask(__name__)
# CORS(app)

# # Initialize pyttsx3 (text-to-speech) engine
# engine = pyttsx3.init()


# def recommend_place(place_name, df, model, n_recommendations=5):
#     if place_name not in df["Place Name"].values:
#         return []

#     idx = df[df["Place Name"] == place_name].index[0]
#     place_features = X.iloc[idx].values.reshape(1, -1)

#     distances = pairwise_distances(X, place_features, metric='euclidean').flatten()
#     nearest_indices = np.argsort(distances)[1:]  

#     recommended_places = df.iloc[nearest_indices][["Place Name", "Type", "Location"]]
#     recommended_places = recommended_places.drop_duplicates(subset=["Place Name"]).head(n_recommendations)

#     return recommended_places["Place Name"].tolist()

# @app.route('/recommend', methods=['POST'])
# def recommend():
#     data = request.get_json()
#     if not data or 'place' not in data:
#         return jsonify({"error": "Invalid request"}), 400
    
#     place = data['place']
#     recommended_places = recommend_place(place, df, xgb_model)

#     return jsonify({"recommendation": recommended_places})

# # Function to convert audio file to WAV format (if needed)
# def convert_audio_to_wav(input_file_path):
#     try:
#         # Load the uploaded audio file
#         audio = AudioSegment.from_file(input_file_path)
        
#         # Export the audio file to WAV format
#         wav_path = 'converted_audio.wav'
#         audio.export(wav_path, format='wav')
        
#         return wav_path
#     except Exception as e:
#         print(f"Error converting audio to WAV: {e}")
#         return None

# # Function to interact with Ollama (using TinyLlama or any other model) based on a question and PDF text
# def get_model_response_from_pdf(question: str, pdf_text: str) -> str:
#     try:
#         # Combine the question with the extracted text from the PDF
#         context = f"PDF Text: {pdf_text}\nQuestion: {question}"

#         print(f"Sending context to TinyLlama: {context}")

#         # Run the Ollama command with the correct syntax
#         command = ['ollama', 'run', 'tinyllama:latest', context]
        
#         # Run the subprocess to get the response from Ollama
#         result = subprocess.run(command, capture_output=True, text=True, check=True, encoding='utf-8')
        
#         # Capture the response from stdout
#         response = result.stdout.strip()
#         print(f"Ollama response: {response}")
#         return response
#     except subprocess.CalledProcessError as e:
#         # Print the error message if the command fails
#         print(f"Error interacting with Ollama: {e}")
#         print(f"stderr: {e.stderr}")  # More detailed error output from stderr
#         return None
#     except Exception as e:
#         print(f"Exception occurred: {e}")
#         return None

# # Function to interact with Ollama based only on the question (without PDF)
# def get_model_response_from_question(question: str) -> str:
#     try:
#         print(f"Sending question to TinyLlama: {question}")
        
#         # Run the Ollama command with the correct syntax
#         command = ['ollama', 'run', 'tinyllama:latest', question]
        
#         # Run the subprocess to get the response from Ollama
#         result = subprocess.run(command, capture_output=True, text=True, check=True, encoding='utf-8')
        
#         # Capture the response from stdout
#         response = result.stdout.strip()
#         print(f"Ollama response: {response}")
#         return response
#     except subprocess.CalledProcessError as e:
#         # Print the error message if the command fails
#         print(f"Error interacting with Ollama: {e}")
#         print(f"stderr: {e.stderr}")  # More detailed error output from stderr
#         return None
#     except Exception as e:
#         print(f"Exception occurred: {e}")
#         return None

# # Function to extract text from a PDF
# def extract_text_from_pdf(pdf_path: str) -> str:
#     try:
#         # Initialize the PdfReader and extract text from the PDF
#         reader = PdfReader(pdf_path)
#         text = ""
#         for page in reader.pages:
#             text += page.extract_text()
        
#         return text
#     except Exception as e:
#         print(f"Error extracting text from PDF: {e}")
#         return None


# def extract_text_from_pdf(pdf_path: str) -> str:
#     try:
#         # Ensure the PDF file exists before attempting to read it
#         if not os.path.exists(pdf_path):
#             print(f"Error: The file '{pdf_path}' does not exist.")
#             return None
        
#         # Initialize the PdfReader and extract text from the PDF
#         reader = PdfReader(pdf_path)
#         text = ""
#         for page in reader.pages:
#             text += page.extract_text()
        
#         return text
#     except Exception as e:
#         print(f"Error extracting text from PDF: {e}")
#         return None

# # API to handle chat requests
# @app.route('/chat', methods=['POST'])
# def chat():
#     data = request.get_json()
#     print("Received data:", data)  # Log the received data

#     try:
#         question = data.get('question')
#         pdf = data.get('pdf')  # Assuming 'pdf' is a file or filename

#         # Validate the question and pdf
#         if not question or not pdf:
#             return jsonify({'error': 'Question or PDF is missing.'}), 400

#         # Define the path to the directory where the PDFs are stored
#         locations_dir = 'C:\\React\\Heritage\\backend\\Locations'

#         # Build the full path for the PDF (assuming the PDF is located in a subfolder)
#         pdf_path = None
#         for city_name in os.listdir(locations_dir):
#             city_path = os.path.join(locations_dir, city_name)
#             if os.path.isdir(city_path):  # Only consider directories
#                 pdfs = [f for f in os.listdir(city_path) if f.endswith('.pdf')]
#                 if pdf in pdfs:
#                     pdf_path = os.path.join(city_path, pdf)
#                     break

#         # If the PDF path is not found
#         if not pdf_path:
#             return jsonify({'error': f"PDF '{pdf}' not found in any of the subfolders."}), 404

#         # Extract text from the PDF
#         pdf_text = extract_text_from_pdf(pdf_path)
#         if not pdf_text:
#             return jsonify({'error': 'Failed to extract text from PDF.'}), 500
        
#         # Send the question and PDF text to TinyLlama (via Ollama) to get a response
#         response_text = get_model_response_from_pdf(question, pdf_text)

#         if not response_text:
#             return jsonify({'error': 'Failed to get a response from TinyLlama'}), 500

#         # Return the response text
#         return jsonify({'answer': response_text})

#     except Exception as e:
#         print(f"Error in /chat route: {str(e)}")
#         return jsonify({'error': f"Server error: {str(e)}"}), 500
# # Endpoint to process the audio file
# @app.route('/processAudio', methods=['POST'])
# def process_audio():
#     try:
#         audio_file = request.files['audio']
#         language = request.form.get('language', 'en')  # Default to English if not provided
        
#         # Map language codes to Google's language codes
#         language_map = {
#             'en': 'en-IN',  # English
#             'ta': 'ta-IN'   # Tamil
#         }
        
#         # Validate language
#         if language not in language_map:
#             return jsonify({'error': 'Unsupported language'}), 400

#         uploaded_audio_path = 'uploaded_audio'
#         audio_file.save(uploaded_audio_path)

#         wav_audio_path = convert_audio_to_wav(uploaded_audio_path)
#         if not wav_audio_path:
#             return jsonify({'error': 'Unable to convert audio to WAV format.'}), 400

#         recognizer = sr.Recognizer()
#         with sr.AudioFile(wav_audio_path) as source:
#             audio = recognizer.record(source)

#         try:
#             # Use the mapped language code for recognition
#             recognized_text = recognizer.recognize_google(audio, language=language_map[language])
#             print(f"Recognized text ({language}): {recognized_text}")
#         except sr.UnknownValueError:
#             return jsonify({'error': 'Could not understand the audio'}), 400
#         except sr.RequestError:
#             return jsonify({'error': 'Speech recognition service is unavailable'}), 400

#         english_text = recognized_text
#         if language != 'en':
#             # Translate to English for processing by Ollama
#             english_text = translate_text(recognized_text, src_lang=language, dest_lang='en')
#             if not english_text:
#                 return jsonify({'error': f'Translation of {language} to English failed'}), 500
#             print(f"Translated to English: {english_text}")

#         # Get Ollama response for the translated English question
#         ollama_response = get_ollama_response(english_text)
#         if not ollama_response:
#             return jsonify({'error': 'Failed to get response from Ollama'}), 500
#         print(f"Ollama response: {ollama_response}")

#         final_response = ollama_response
#         if language != 'en':
#             # Translate response back to original language
#             translated_response = translate_text(ollama_response, src_lang='en', dest_lang=language)
#             if not translated_response:
#                 return jsonify({'error': f'Translation of response to {language} failed'}), 500
#             final_response = translated_response
#             print(f"Translated Ollama response to {language}: {translated_response}")

#         # Generate speech in the target language
#         speech_file = text_to_speech(final_response, lang=language)
#         if not speech_file:
#             return jsonify({'error': 'Failed to generate speech'}), 500

#         play_audio(speech_file)

#         return jsonify({
#             'response': final_response,
#             'audio_url': '/response_audio.wav'  # Or whatever path you want to expose
#         }), 200

#     except Exception as e:
#         print(f"Error in /processAudio: {str(e)}")
#         return jsonify({'error': str(e)}), 500
# # Serve the audio file for playback
# @app.route('/static/<filename>')
# def serve_audio(filename):
#     return send_file(os.path.join('static', filename), mimetype='audio/mp3')


# def text_to_speech(text, lang='en'):
#     try:
#         # Map our language codes to gTTS language codes
#         tts_lang_map = {
#             'en': 'en',  # English
#             'ta': 'ta'    # Tamil
#         }
        
#         if lang not in tts_lang_map:
#             raise ValueError(f"Unsupported language code: {lang}")
            
#         tts = gTTS(text=text, lang=tts_lang_map[lang])
#         mp3_path = "response_audio.mp3"
#         wav_path = "response_audio.wav"

#         # Remove old files if they exist
#         for path in [mp3_path, wav_path]:
#             if os.path.exists(path):
#                 os.remove(path)

#         tts.save(mp3_path)

#         # Convert MP3 to WAV using pydub
#         audio = AudioSegment.from_mp3(mp3_path)
#         audio.export(wav_path, format="wav")

#         return wav_path
#     except Exception as e:
#         print(f"Error generating speech: {e}")
#         return None



# # Endpoint to get available locations and PDFs
# @app.route('/getLocations_v2', methods=['GET'])
# def get_locations_v2():
#     try:
#         locations_dir = 'C:\\React\\Heritage\\backend\\Locations'
#         cities = {}
#         for city_name in os.listdir(locations_dir):
#             city_path = os.path.join(locations_dir, city_name)
#             if os.path.isdir(city_path):  # Only consider directories
#                 pdfs = [f for f in os.listdir(city_path) if f.endswith('.pdf')]
#                 cities[city_name] = pdfs
        
#         # Print out the cities for debugging
#         print("Cities:", cities)

#         # Return the cities and their PDFs as a JSON response
#         return jsonify(cities), 200  # Ensure this returns JSON
#     except Exception as e:
#         print(f"Error fetching locations: {e}")
#         return jsonify({'error': str(e)}), 500


    
# if __name__ == '__main__':
#     # Ensure the static directory exists for saving audio files
#     if not os.path.exists('static'):
#         os.makedirs('static')
    
#     # Run the Flask app
#     app.run(debug=True, host='0.0.0.0', port=5000)



import os
import subprocess
import pygame
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import speech_recognition as sr
from googletrans import Translator
from pydub import AudioSegment
from gtts import gTTS
import numpy as np
import pandas as pd
from sklearn.metrics import pairwise_distances
import xgboost as xgb
from sklearn.preprocessing import LabelEncoder
from PyPDF2 import PdfReader

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize components
translator = Translator()
pygame.mixer.init()

# Load and prepare recommendation data
df = pd.read_csv(r"/Users/madhavpujitha/Downloads/HERITAGE/HERITAGE-BACKEND/output.csv")
df = df.drop_duplicates(subset=["Place Name"], keep="first")

# Encode categorical data
encoder = LabelEncoder()
df["Type Encoded"] = encoder.fit_transform(df["Type"])
df["Location Encoded"] = encoder.fit_transform(df["Location"])
df["Time Encoded"] = encoder.fit_transform(df["Best Time to Visit"])

# Feature matrix
X = df[["Type Encoded", "Location Encoded", "Time Encoded"]]
y = np.arange(len(df))

# Train XGBoost Model
xgb_model = xgb.XGBClassifier(n_estimators=100, max_depth=5, learning_rate=0.1, random_state=42)
xgb_model.fit(X, y)

# Ensure necessary directories exist
os.makedirs('temp_audio', exist_ok=True)
os.makedirs('static', exist_ok=True)

def recommend_place(place_name, df, model, n_recommendations=5):
    """Recommend similar places based on input place."""
    if place_name not in df["Place Name"].values:
        return []

    idx = df[df["Place Name"] == place_name].index[0]
    place_features = X.iloc[idx].values.reshape(1, -1)

    distances = pairwise_distances(X, place_features, metric='euclidean').flatten()
    nearest_indices = np.argsort(distances)[1:]  

    recommended_places = df.iloc[nearest_indices][["Place Name", "Type", "Location"]]
    recommended_places = recommended_places.drop_duplicates(subset=["Place Name"]).head(n_recommendations)

    return recommended_places["Place Name"].tolist()

def convert_audio_to_wav(input_file_path):
    """Convert any audio file to WAV format."""
    try:
        audio = AudioSegment.from_file(input_file_path)
        wav_path = 'temp_audio/converted_audio.wav'
        audio.export(wav_path, format='wav')
        return wav_path
    except Exception as e:
        print(f"Error converting audio to WAV: {e}")
        return None

def get_ollama_response(question: str) -> str:
    """Get response from Ollama's TinyLlama model."""
    try:
        print(f"Sending question to TinyLlama: {question}")
        command = ['ollama', 'run', 'tinyllama:latest', question]
        result = subprocess.run(
            command, 
            capture_output=True, 
            text=True, 
            check=True, 
            encoding='utf-8'
        )
        response = result.stdout.strip()
        print(f"Ollama response: {response}")
        return response
    except subprocess.CalledProcessError as e:
        print(f"Error interacting with Ollama: {e}")
        print(f"Error details: {e.stderr}")
        return None

def text_to_speech(text, lang='en'):
    """Convert text to speech and save as WAV file."""
    try:
        # Language code mapping
        lang_map = {
            'en': 'en',    # English
            'te': 'te',    # Telugu
            'ta': 'ta',    # Tamil
            'hi': 'hi'     # Hindi
        }
        
        if lang not in lang_map:
            print(f"Unsupported language: {lang}")
            return None
            
        tts = gTTS(text=text, lang=lang_map[lang])
        mp3_path = "temp_audio/response.mp3"
        wav_path = "temp_audio/response.wav"

        # Remove old files if they exist
        for path in [mp3_path, wav_path]:
            if os.path.exists(path):
                os.remove(path)

        tts.save(mp3_path)
        
        # Convert MP3 to WAV
        audio = AudioSegment.from_mp3(mp3_path)
        audio.export(wav_path, format="wav")
        
        return wav_path
    except Exception as e:
        print(f"Error generating speech: {e}")
        return None

def play_audio(audio_path):
    """Play audio file using pygame."""
    try:
        pygame.mixer.init()
        pygame.mixer.music.load(audio_path)
        pygame.mixer.music.play()
        
        # Wait for playback to finish
        while pygame.mixer.music.get_busy():
            pygame.time.delay(100)
    except Exception as e:
        print(f"Error playing audio: {e}")

def translate_text(text, src_lang='en', dest_lang='en'):
    """Translate text between languages."""
    try:
        translated = translator.translate(text, src=src_lang, dest=dest_lang)
        return translated.text
    except Exception as e:
        print(f"Translation error: {e}")
        return None

def extract_text_from_pdf(pdf_path: str) -> str:
    """Extract text content from PDF file."""
    try:
        if not os.path.exists(pdf_path):
            print(f"Error: The file '{pdf_path}' does not exist.")
            return None
        
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text()
        return text
    except Exception as e:
        print(f"Error extracting text from PDF: {e}")
        return None

@app.route('/recommend', methods=['POST'])
def recommend():
    """Endpoint for place recommendations."""
    data = request.get_json()
    if not data or 'place' not in data:
        return jsonify({"error": "Invalid request"}), 400
    
    place = data['place']
    recommended_places = recommend_place(place, df, xgb_model)
    return jsonify({"recommendation": recommended_places})

@app.route('/processAudio', methods=['POST'])
def process_audio():
    try:
        # Check if audio file is present
        if 'audio' not in request.files:
            return jsonify({'error': 'No audio file provided'}), 400
            
        audio_file = request.files['audio']
        language = request.form.get('language', 'en')  # Default to English
        
        # Validate language
        if language not in ['en', 'te', 'ta', 'hi']:
            return jsonify({'error': 'Unsupported language'}), 400

        # Save uploaded file
        uploaded_path = 'temp_audio/uploaded_audio'
        audio_file.save(uploaded_path)
        
        # Convert to WAV if needed
        wav_path = convert_audio_to_wav(uploaded_path)
        if not wav_path:
            return jsonify({'error': 'Audio conversion failed'}), 400

        # Recognize speech
        recognizer = sr.Recognizer()
        with sr.AudioFile(wav_path) as source:
            audio = recognizer.record(source)
            
        try:
            # Language codes for Google Speech Recognition
            sr_lang_map = {
                'en': 'en-IN',
                'te': 'te-IN',
                'ta': 'ta-IN',
                'hi': 'hi-IN'
            }
            recognized_text = recognizer.recognize_google(
                audio, 
                language=sr_lang_map[language]
            )
            print(f"Recognized text ({language}): {recognized_text}")
        except sr.UnknownValueError:
            return jsonify({'error': 'Could not understand the audio'}), 400
        except sr.RequestError:
            return jsonify({'error': 'Speech recognition service unavailable'}), 500

        # Translate to English if needed for processing
        english_text = recognized_text
        if language != 'en':
            english_text = translate_text(recognized_text, src_lang=language, dest_lang='en')
            if not english_text:
                return jsonify({'error': 'Translation to English failed'}), 500
            print(f"Translated to English: {english_text}")

        # Get AI response
        ollama_response = get_ollama_response(english_text)
        if not ollama_response:
            return jsonify({'error': 'Failed to get AI response'}), 500
        print(f"Ollama response: {ollama_response}")

        # Translate response back if needed
        final_response = ollama_response
        if language != 'en':
            translated_response = translate_text(ollama_response, src_lang='en', dest_lang=language)
            if not translated_response:
                return jsonify({'error': 'Translation to target language failed'}), 500
            final_response = translated_response
            print(f"Translated response to {language}: {translated_response}")

        # Generate speech
        speech_file = text_to_speech(final_response, lang=language)
        if not speech_file:
            return jsonify({'error': 'Speech generation failed'}), 500

        # Prepare response with both text and audio URL
        response_data = {
            'response': final_response,
            'audio_url': f"http://{request.host}/get_audio"
        }

        return jsonify(response_data), 200

    except Exception as e:
        print(f"Error in /processAudio: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500
@app.route('/get_audio', methods=['GET'])
def get_audio():
    """Endpoint to serve the generated audio response."""
    try:
        wav_path = "temp_audio/response.wav"
        if not os.path.exists(wav_path):
            return jsonify({'error': 'Audio not found'}), 404
            
        return send_file(wav_path, mimetype='audio/wav')
    except Exception as e:
        print(f"Error serving audio: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route("/chat", methods=["POST"])
def chat():
    """PDF-based question answering endpoint with automatic PDF content extraction."""
    try:
        data = request.get_json()
        if not data or 'question' not in data or 'pdf' not in data:
            return jsonify({"error": "Invalid request"}), 400
            
        question = data.get("question", "").strip()
        pdf_path = data.get("pdf", "").strip()
        
        if not question:
            return jsonify({"error": "Empty question"}), 400
        if not pdf_path:
            return jsonify({"error": "No PDF selected"}), 400

        # 1. Verify PDF exists and extract text
        if not os.path.exists(pdf_path):
            return jsonify({"error": "PDF file not found"}), 404
            
        pdf_text = extract_text_from_pdf(pdf_path)
        if not pdf_text:
            return jsonify({"error": "Could not extract text from PDF"}), 400

        # 2. Create the prompt with the PDF content
        prompt = f"""
        Answer the following question based ONLY on the content below. 
        If the answer isn't in the content, say "I couldn't find that information."

        CONTENT:
        {pdf_text[:10000]}  # First 10,000 characters for context

        QUESTION: {question}
        ANSWER:
        """

        # 3. Get response from LLM
        answer = get_ollama_response(prompt)
        
        if not answer:
            return jsonify({"error": "Failed to get AI response"}), 500

        return jsonify({"answer": answer}), 200

    except Exception as e:
        print(f"Error in /chat: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500
    
@app.route('/getLocations_v2', methods=['GET'])
def get_locations_v2():
    """Endpoint to get available locations and PDFs."""
    try:
        locations_dir = '//Users//madhavpujitha//Downloads//HERITAGE//HERITAGE-BACKEND//Locations'
        cities = {}
        for city_name in os.listdir(locations_dir):
            city_path = os.path.join(locations_dir, city_name)
            if os.path.isdir(city_path):  # Only consider directories
                pdfs = [f for f in os.listdir(city_path) if f.endswith('.pdf')]
                cities[city_name] = pdfs
        
        return jsonify(cities), 200
    except Exception as e:
        print(f"Error fetching locations: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)










