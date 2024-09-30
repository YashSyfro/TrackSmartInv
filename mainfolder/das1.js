// Global Search Functionality
const openSearch = document.getElementById('open-search');
const searchOverlay = document.getElementById('search-overlay');
const closeSearch = document.getElementById('close-search');

openSearch.addEventListener('click', () => {
    searchOverlay.style.display = 'flex';
    document.getElementById('search-input').focus();
});

closeSearch.addEventListener('click', () => {
    searchOverlay.style.display = 'none';
});

// Close search overlay when clicking outside the search box
window.addEventListener('click', (e) => {
    if (e.target == searchOverlay) {
        searchOverlay.style.display = 'none';
    }
});

// AI Chatbot Functionality
const openChatbot = document.getElementById('open-chatbot');
const chatbotPopup = document.getElementById('chatbot-popup');
const closeChatbot = document.getElementById('close-chatbot');

openChatbot.addEventListener('click', () => {
    chatbotPopup.style.display = 'flex';
});

closeChatbot.addEventListener('click', () => {
    chatbotPopup.style.display = 'none';
});

// Close chatbot popup when clicking outside the chatbot window
window.addEventListener('click', (e) => {
    if (e.target == chatbotPopup) {
        chatbotPopup.style.display = 'none';
    }
});

// Date Picker Interaction
document.getElementById('schedule-date').addEventListener('change', function () {
    alert('Schedule for: ' + this.value);
});
