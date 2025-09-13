// Correctly select elements by ID
const speakBtn = document.getElementById('speakBtn');
const clearBtn = document.getElementById('clearBtn');
const messageBox = document.getElementById('messageBox');
const toInput = document.getElementById('toInput');
// SpeechRecognition setup
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';

// Button event listeners
speakBtn.onclick = () => {
  recognition.start();
  speakBtn.textContent = "Listening now...";
};

recognition.onresult = (event) => {
  // Get the transcript text
  messageBox.value = event.results[0][0].transcript;
};

recognition.onend = () => {
  speakBtn.textContent = '🎤 Speak';
};

clearBtn.onclick = () => {
  messageBox.value = '';
};
document.getElementById('Hindi-btn').onclick = () => {
  const message = messageBox.value;
  if (!message) {
    alert('Please speak a message first!');
  }
  else{
    // Simple hardcoded translation for demonstration
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'hi-IN';
    
    recognition.onresult = (event) => {
      toInput.value = event.results[0][0].transcript;
    };
    recognition.start();
    recognition.onend = () => {
      speakBtn.textContent = '🎤';
    };

  }
}