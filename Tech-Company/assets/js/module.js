const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

// Show/hidden box chat
$('.conservation__close').onclick =()=>{
    $('.box__chat-conservation').style.display = 'none';
}
$('.box__chat').onclick =()=>{
    $('.box__chat-conservation').style.display = 'block';
}

// Send messages
const messagesBox = [
    {
        author: 'admin',
        message: 'Xin chào quý khách'
    }
];
// Render html
function render(){
    let htmls = "";
    messagesBox.map((messageStack)=>{
        if(messageStack.author === 'admin'){
            htmls+=`<div class="conservation__messages-admin"><span>${messageStack.message}</span></div>`;
        }else if(messageStack.author === 'user'){
            htmls+=`<div class="conservation__messages-user"><span>${messageStack.message}</span></div>`;
        }
    }).join("");
    $('.conservation__messages').innerHTML = htmls;
}
render();
// Catch event typing message and send
function send(){
    let messageText = $('.conservation__typing-input').value;
    if(messageText){
        messagesBox.push({
            author: 'user',
            message: messageText,
        });
        render();
        $('.conservation__typing-input').value = "";
    }
    else{
        alert('Vui lòng nhập tin nhắn trước khi gửi');
    }
}
$('#typing__behavior-send').onclick =()=>{
    send();
};
$('.conservation__typing-input').addEventListener("keypress", (event)=>{
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        send();
    }
});