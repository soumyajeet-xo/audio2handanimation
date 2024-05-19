# audio2handanimation

### Convert Audio to Hand Sign Animation for Deaf People

Welcome to **audio2handanimation**! This application facilitates the conversion of audio input into hand sign animations, making communication more accessible for deaf individuals.

## How It Works

### 1. Flask Server
The application operates on a Flask server which python based.

### 2. Audio to Text Conversion
The audio input is transcribed to text using OpenAI's Whisper model. Whisper provides high-accuracy speech recognition, ensuring precise text conversion.

### 3. Text Modification
To enhance the accuracy and relevance of the transcribed text, we utilize the Levenshtein algorithm. This algorithm calculates the similarity ratio between the transcribed text and our custom JSON corpus. The corpus contains an extensive key-value pair dataset of words and their respective hand sign coordinates, generated using Google's Mediapipe model.

### 4. Hand Sign Mapping
The model maps hand joints from ASL (American Sign Language) videos fed into it, ultimately storing them as key-value pairs (words and coordinates) in a JSON file. This data is later used for animation rendering.

### 5. Word Replacement
The system modifies the transcribed text to find and replace words with their closest matches in the corpus. This ensures that the words used for animation are pre-existing in the dataset, improving the efficiency and accuracy of the hand sign animations.

### 6. Animation Rendering
The final step involves rendering the hand sign animations using Three.js, a powerful JavaScript library for 3D graphics. Three.js enables the creation of realistic and smooth animations, providing an intuitive and engaging visual representation of the hand signs.

## Technologies Used
- **Flask**: For the backend server.
- **OpenAI Whisper**: For high-accuracy speech-to-text conversion.
- **Levenshtein Algorithm**: For text similarity comparison.
- **Google's Mediapipe**: For generating hand sign coordinates.
- **Three.js**: For rendering 3D animations.


![audio2animation](https://github.com/soumyajeet-xo/audio2handanimation/assets/66509457/173f5c3e-be81-438c-8217-c9a467e07e9d)

## Contribution
We welcome contributions from the community! If you have any suggestions, bug reports, or feature requests, please create an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact
For any queries or support, feel free to reach out to us at mail@soumstack.com

---

Thank you for using audio2handanimation! Together, we can bridge communication gaps and make the world more inclusive.






