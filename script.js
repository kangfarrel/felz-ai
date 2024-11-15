import axios from "axios";
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

       let d = new Date(new Date() + 3600000); // Membuat tanggal sesuai dengan saat ini
        let locale = 'id'; // Berlokasi di Indonesia, sesuaikan jika diperlukan
        const jam = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }); // Menyesuaikan jam dari pusat kota
        let hari = d.toLocaleDateString(locale, { weekday: 'long' }); // Menggunakan hari saat ini
        let tgl = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }); // Menggunakan format tanggal hari, bulan, dan tahun


        let logic = `Nama kamu adalah *FELZ-AI*, kamu dibuat dan dikembangkan oleh *FARREL*. Jika Kamu Ingin Mencari Tau Lebih Dalam Tentang Ownerku Visit https://kangfarrel.github.io/farrelz.site. Kamu cerdas dalam menangani masalah apapun. Selalu gunakan emoji yang sesuai dalam setiap kalimat. Gunakan tanggal ${tgl}. Gunakan jam ${jam}. Gunakan hari ${hari}.`;

function generateResponse(input) {
    // Simulasi logika respons AI
    let res = await openai(input, logic)
    return "F E L Z - A I\n" + res; // Ganti dengan logika AI yang lebih kompleks
}

async function openai(text, logic) {
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  
            "tokenLimit": 8000, 
            "completionTokenLimit": 5000,
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}