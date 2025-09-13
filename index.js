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
  else {
    // Use Google Translate API to translate English to Hindi
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=${encodeURIComponent(message)}`)
      .then(res => res.json())
      .then(data => {
        if (data && data[0] && data[0][0] && data[0][0][0]) {
          toInput.value = data[0][0][0];
        } else {
          toInput.value = 'Translation error';
        }
      })
      .catch(() => {
        toInput.value = 'Translation error';
      });
  }
}