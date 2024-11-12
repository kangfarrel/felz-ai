function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbox');

    if (userInput.value.trim() === "") return;

    // Tampilkan pesan pengguna
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = userInput.value;
    chatbox.appendChild(userMessage);

    // Simulasi balasan AI
    const aiMessage = document.createElement('div');
    aiMessage.className = 'message ai';
    aiMessage.textContent = "AI: " + generateResponse(userInput.value);
    chatbox.appendChild(aiMessage);

    // Scroll ke bawah
    chatbox.scrollTop = chatbox.scrollHeight;

    // Kosongkan input
    userInput.value = '';
}

function generateResponse(input) {
    // Simulasi logika respons AI
    return "Terima kasih atas pesan Anda: " + input; // Ganti dengan logika AI yang lebih kompleks
}