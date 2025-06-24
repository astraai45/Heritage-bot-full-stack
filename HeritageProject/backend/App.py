import os
import subprocess
import pygame
from flask import Flask, request, jsonify
from flask_cors import CORS
import speech_recognition as sr
from googletrans import Translator
from pydub import AudioSegment
from gtts import gTTS


app = Flask(__name__)
CORS(app)
translator = Translator()
pygame.mixer.init()

def convert_audio_to_wav(input_file_path):
    try:
        audio = AudioSegment.from_file(input_file_path)
        wav_path = 'converted_audio.wav'
        audio.export(wav_path, format='wav')
        return wav_path
    except Exception as e:
        print(f"Error converting audio to WAV: {e}")
        return None

def get_ollama_response(question: str) -> str:
    try:
        print(f"Sending question to TinyLlama: {question}")
        command = ['ollama', 'run', 'tinyllama:latest', question]
        result = subprocess.run(command, capture_output=True, text=True, check=True, encoding='utf-8')
        response = result.stdout.strip()
        print(f"Ollama response: {response}")
        return response
    except subprocess.CalledProcessError as e:
        print(f"Error interacting with Ollama: {e}")
        return None

def text_to_speech(text, lang='te'):
    try:
        tts = gTTS(text=text, lang=lang)
        mp3_path = "response_audio.mp3"
        wav_path = "response_audio.wav"

        # Remove old files if they exist
        if os.path.exists(mp3_path):
            os.remove(mp3_path)
        if os.path.exists(wav_path):
            os.remove(wav_path)

        tts.save(mp3_path)

        # Convert MP3 to WAV using pydub
        audio = AudioSegment.from_mp3(mp3_path)
        audio.export(wav_path, format="wav")

        return wav_path
    except Exception as e:
        print(f"Error generating speech: {e}")
        return None




def play_audio(audio_path):
    try:
        pygame.mixer.init()
        pygame.mixer.music.load(audio_path)
        pygame.mixer.music.play()
        
        while pygame.mixer.music.get_busy():
            pygame.time.delay(100)  # Small delay to allow playback
    except Exception as e:
        print(f"Error playing audio: {e}")

def translate_text(text, src_lang='en', dest_lang='te'):
    try:
        translated = translator.translate(text, src=src_lang, dest=dest_lang)
        return translated.text
    except Exception as e:
        print(f"Translation error: {e}")
        return None

@app.route('/processAudio', methods=['POST'])
def process_audio():
    try:
        audio_file = request.files['audio']
        language = request.form.get('language', 'en')  # Default to English if not provided
        uploaded_audio_path = 'uploaded_audio'
        audio_file.save(uploaded_audio_path)

        wav_audio_path = convert_audio_to_wav(uploaded_audio_path)
        if not wav_audio_path:
            return jsonify({'error': 'Unable to convert audio to WAV format.'}), 400

        recognizer = sr.Recognizer()
        with sr.AudioFile(wav_audio_path) as source:
            audio = recognizer.record(source)

        try:
            recognized_text = recognizer.recognize_google(audio, language=f'{language}-IN')
            print(f"Recognized text ({language}): {recognized_text}")
        except sr.UnknownValueError:
            return jsonify({'error': 'Could not understand the audio'}), 400
        except sr.RequestError:
            return jsonify({'error': 'Speech recognition service is unavailable'}), 400

        english_text = recognized_text
        if language != 'en':
            english_text = translate_text(recognized_text, src_lang=language, dest_lang='en')
            if not english_text:
                return jsonify({'error': f'Translation of {language} to English failed'}), 500
            print(f"Translated to English: {english_text}")

        # Get Ollama response for the translated English question
        ollama_response = get_ollama_response(english_text)
        if not ollama_response:
            return jsonify({'error': 'Failed to get response from Ollama'}), 500
        print(f"Ollama response: {ollama_response}")

        final_response = ollama_response
        if language != 'en':
            translated_response = translate_text(ollama_response, src_lang='en', dest_lang=language)
            if not translated_response:
                return jsonify({'error': f'Translation of response to {language} failed'}), 500
            final_response = translated_response
            print(f"Translated Ollama response to {language}: {translated_response}")

        speech_file = text_to_speech(final_response, lang=language)
        if not speech_file:
            return jsonify({'error': 'Failed to generate speech'}), 500

        play_audio(speech_file)

        return jsonify({'response': final_response}), 200

    except Exception as e:
        print(f"Error in /processAudio: {str(e)}")
        return jsonify({'error': str(e)}), 500
@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "").strip()

    if not user_message:
        return jsonify({"reply": "Please enter a message."})

    bot_reply = get_ollama_response(user_message)

    return jsonify({"reply": bot_reply})   




if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)








##################

# import os
# import subprocess
# import pygame
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import speech_recognition as sr
# from googletrans import Translator
# from pydub import AudioSegment
# from gtts import gTTS
# import asyncio

# app = Flask(__name__)
# CORS(app)
# translator = Translator()
# pygame.mixer.init()

# def convert_audio_to_wav(input_file_path):
#     try:
#         audio = AudioSegment.from_file(input_file_path)
#         wav_path = 'converted_audio.wav'
#         audio.export(wav_path, format='wav')
#         return wav_path
#     except Exception as e:
#         print(f"Error converting audio to WAV: {e}")
#         return None

# def get_ollama_response(question: str) -> str:
#     try:
#         print(f"Sending question to mistral: {question}")
#         command = ['ollama', 'run', 'mistral:latest', question]
#         result = subprocess.run(command, capture_output=True, text=True, check=True, encoding='utf-8')
#         response = result.stdout.strip()
#         print(f"Ollama response: {response}")
#         return response
#     except subprocess.CalledProcessError as e:
#         print(f"Error interacting with Ollama: {e}")
#         return None

# def text_to_speech(text, lang='ta'):
#     try:
#         tts = gTTS(text=text, lang=lang)
#         mp3_path = "response_audio.mp3"
#         wav_path = "response_audio.wav"

#         # Remove old files if they exist
#         if os.path.exists(mp3_path):
#             os.remove(mp3_path)
#         if os.path.exists(wav_path):
#             os.remove(wav_path)

#         tts.save(mp3_path)

#         # Convert MP3 to WAV using pydub
#         audio = AudioSegment.from_mp3(mp3_path)
#         audio.export(wav_path, format="wav")

#         return wav_path
#     except Exception as e:
#         print(f"Error generating speech: {e}")
#         return None

# def play_audio(audio_path):
#     try:
#         pygame.mixer.init()
#         pygame.mixer.music.load(audio_path)
#         pygame.mixer.music.play()
        
#         while pygame.mixer.music.get_busy():
#             pygame.time.delay(100)  # Small delay to allow playback
#     except Exception as e:
#         print(f"Error playing audio: {e}")

# # Make translate_text function async
# async def translate_text(text, src_lang='en', dest_lang='ta'):
#     try:
#         # Await the translation to ensure it completes before returning the result
#         translated = await translator.translate(text, src=src_lang, dest=dest_lang)
#         return translated.text
#     except Exception as e:
#         print(f"Translation error: {e}")
#         return None

# @app.route('/processAudio', methods=['POST'])
# async def process_audio():
#     try:
#         audio_file = request.files['audio']
#         language = request.form.get('language', 'en')  # Default to English if not provided
#         uploaded_audio_path = 'uploaded_audio'
#         audio_file.save(uploaded_audio_path)

#         wav_audio_path = convert_audio_to_wav(uploaded_audio_path)
#         if not wav_audio_path:
#             return jsonify({'error': 'Unable to convert audio to WAV format.'}), 400

#         recognizer = sr.Recognizer()
#         with sr.AudioFile(wav_audio_path) as source:
#             audio = recognizer.record(source)

#         try:
#             # Use the selected language for recognition
#             recognized_text = recognizer.recognize_google(audio, language=f'{language}-IN')
#             print(f"Recognized text ({language}): {recognized_text}")
#         except sr.UnknownValueError:
#             return jsonify({'error': 'Could not understand the audio'}), 400
#         except sr.RequestError:
#             return jsonify({'error': 'Speech recognition service is unavailable'}), 400

#         # Translate the recognized text to English if it's not already English
#         english_text = recognized_text
#         if language != 'en':
#             english_text = await translate_text(recognized_text, src_lang=language, dest_lang='en')
#             if not english_text:
#                 return jsonify({'error': f'Translation of {language} to English failed'}), 500
#             print(f"Translated to English: {english_text}")

#         # Get Ollama response for the translated English question
#         ollama_response = get_ollama_response(english_text)
#         if not ollama_response:
#             return jsonify({'error': 'Failed to get response from Ollama'}), 500
#         print(f"Ollama response: {ollama_response}")

#         # Translate the Ollama response from English to the original language if needed
#         final_response = ollama_response
#         if language != 'en':
#             translated_response = await translate_text(ollama_response, src_lang='en', dest_lang=language)
#             if not translated_response:
#                 return jsonify({'error': f'Translation of response to {language} failed'}), 500
#             final_response = translated_response
#             print(f"Translated Ollama response to {language}: {translated_response}")

#         # Convert the response to speech in the target language and play it
#         speech_file = text_to_speech(final_response, lang=language)
#         if not speech_file:
#             return jsonify({'error': 'Failed to generate speech'}), 500

#         play_audio(speech_file)

#         return jsonify({'response': final_response}), 200

#     except Exception as e:
#         print(f"Error in /processAudio: {str(e)}")
#         return jsonify({'error': str(e)}), 500

# @app.route("/chat", methods=["POST"])
# def chat():
#     data = request.get_json()
#     user_message = data.get("message", "").strip()

#     if not user_message:
#         return jsonify({"reply": "Please enter a message."})

#     bot_reply = get_ollama_response(user_message)

#     return jsonify({"reply": bot_reply})   

# if __name__ == '__main__':
#     app.run(debug=True, host='0.0.0.0', port=5000)
