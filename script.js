function toggleChat() {
    const chat = document.getElementById('chat-iframe');
    if (chat.style.display === 'none' || chat.style.display === '') {
        chat.style.display = 'block';
    } else {
        chat.style.display = 'none';
    }
}
