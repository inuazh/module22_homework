// создаем экземпляр WebSocket
const socket = new WebSocket('wss://echo-ws-service.herokuapp.com');

// получаем ссылки на элементы чата
const chatBody = document.querySelector('.chat-body');
const chatInput = document.querySelector('.chat-input');
const messageInput = chatInput.querySelector('input[type="text"]');
const sendButton = chatInput.querySelector('#send-btn');

// обработчик клика по кнопке отправки сообщения
sendButton.addEventListener('click', () => {
    // получаем текст сообщения из поля ввода
    const message = messageInput.value;
    // отправляем сообщение через WebSocket
    socket.send(message);
    // очищаем поле ввода
    messageInput.value = '';
    const sentMessageElement = document.createElement('div');
    sentMessageElement.classList.add('answer-message');
    sentMessageElement.textContent = message;
    chatBody.appendChild(sentMessageElement);
});

// обработчик получения сообщения через WebSocket
socket.addEventListener('message', (event) => {
    // получаем текст сообщения
    const message = event.data;
    // создаем новый элемент для сообщения и добавляем его в тело чата/ таймаут для задерки в 1 с
    setTimeout(() => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('sent-message');
        messageElement.textContent = message;
        chatBody.appendChild(messageElement);
      }, 1000);
      

});