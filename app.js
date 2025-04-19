// app.js
const express = require("express");
const app = express();
const port = 3000;

// Array kutipan absurd
const kutipan = [
  "Jangan pernah menyerah, kecuali ada diskon besar di toko online",
  "Kesuksesan itu seperti mie instan, cepat tapi tidak sehat",
  "Hidup itu seperti sepeda, kal]au berhenti ya jatuh sih",
  "Jika kamu tidak bisa menjadi bintang, jadilah router WiFi, semua mencarimu",
  "Tidur siang itu tidak malas, itu menghemat energi",
  "Kalau tidak bisa membawa pulang piala, bawa pulang menu restoran saja",
  "Saya tidak malas, saya sedang menghemat tenaga",
  "Tersesat bukan berarti hilang, hanya saja GPS-nya error",
  "Teman sejati adalah yang meminjamkan charger tanpa diminta",
];

// Array emoji acak
const emojis = [
  "🤦‍♂️",
  "🐒",
  "🌮",
  "🤯",
  "🥳",
  "🦄",
  "🦥",
  "🍕",
  "🛌",
  "🚀",
  "🦖",
  "⏰",
  "🧠",
  "🌈",
  "🤡",
  "🧟‍♂️",
  "🧙‍♂️",
  "🦸‍♀️",
];

// Siapkan templat HTML
const createMemePage = (quote, emoji) => `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meme Motivasi Absurd</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&family=Patrick+Hand&display=swap');

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background: radial-gradient(circle at top left, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1);
    background-size: 400% 400%;
    animation: backgroundMove 15s ease infinite;
    font-family: 'Patrick Hand', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    color: #fff;
  }

  @keyframes backgroundMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .meme-container {
    background: #fff;
    color: #2d3436;
    padding: 35px;
    border-radius: 25px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    max-width: 600px;
    text-align: center;
    transform: rotate(-1.5deg);
    transition: all 0.3s ease;
    animation: floaty 4s ease-in-out infinite;
  }

  .meme-container:hover {
    transform: rotate(1deg) scale(1.03);
  }

  @keyframes floaty {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  .quote {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    font-family: 'Comic Neue', cursive;
    text-shadow: 2px 2px #ffeaa7;
  }

  .emoji {
    font-size: 90px;
    animation: bounce 2s infinite;
    display: inline-block;
    margin-bottom: 15px;
    filter: drop-shadow(0px 5px 5px rgba(0,0,0,0.3));
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  button {
    margin-top: 30px;
    padding: 15px 32px;
    background-color: #6c5ce7;
    color: white;
    border: none;
    border-radius: 40px;
    font-size: 18px;
    cursor: pointer;
    font-family: 'Comic Neue', cursive;
    box-shadow: 0 6px 15px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    position: relative;
    z-index: 10;
  }

  button:hover {
    background-color: #a29bfe;
    transform: scale(1.1);
  }

  .profile-box {
    margin-top: 25px;
    background-color: rgba(255, 255, 255, 0.15);
    border: 2px dashed #ffeaa7;
    border-radius: 15px;
    padding: 15px 25px;
    backdrop-filter: blur(5px);
    font-size: 18px;
    color: #fff;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    animation: fadeIn 3s ease-in;
  }

  .profile-box .nama {
    font-weight: bold;
    font-size: 22px;
    color: #ffeaa7;
    text-shadow: 1px 1px #000;
  }

  .profile-box .kelas {
    margin-top: 5px;
    color: #dfe6e9;
    font-style: italic;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>


</head>
<body>
  <div class="meme-container">
    <div class="quote">"${quote}"</div>
    <div class="emoji">${emoji}</div>
  </div>
  <div class="nama"> eca </div>
  <div class="kelas"> Kelad X !!</div>
  <button onclick="window.location.reload()">Meme Baru!</button>
</body>
</html>
`;

// Route untuk halaman utama
app.get("/", (req, res) => {
  const randomQuote = kutipan[Math.floor(Math.random() * kutipan.length)];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  res.send(createMemePage(randomQuote, randomEmoji));
});

// Mulai server
app.listen(port, () => {
  console.log(`Aplikasi meme absurd berjalan di http://localhost:${port}`);
});
