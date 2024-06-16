const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('Conectado al servidor WebSocket');
};

ws.onmessage = (event) => {
    console.log('Mensaje recibido del servidor:', event.data);
    const chat = document.getElementById('chat');
    const message = document.createElement('div');
    message.textContent = event.data;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
};

ws.onclose = () => {
    console.log('Desconectado del servidor WebSocket');
};

function sendMessage() {
    const input = document.getElementById('message');
    const message = input.value;
    console.log('Enviando mensaje:', message);
    ws.send(message);
    input.value = '';
}
