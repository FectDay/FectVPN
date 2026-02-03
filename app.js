const tg = Telegram.WebApp;
tg.expand();

document.getElementById("send").onclick = () => {
    const data = {
        name: document.getElementById("name").value,
        country: document.getElementById("country").value,
        device: document.getElementById("device").value,
        purpose: document.getElementById("purpose").value,
        lang: tg.initDataUnsafe.user.language_code || "en"
    };

    tg.sendData(JSON.stringify(data));
};
