const messageInput = document.getElementById('message');
const submit = document.getElementById('submit');
const deliveredText = document.getElementById('messageDelivered')

function messageDetails() { 
    if(messageInput.value === '') {
        deliveredText.innerHTML = '<p style="color:red;">Please fill the input</p>'
    }else {
        deliveredText.innerHTML = messageInput.value;
        messageInput.value = "";
    }
}

submit.addEventListener('click', function(e) {
    e.preventDefault();

    messageDetails()

})


window.addEventListener('keydown', function(e) {
    if(e.key == "Enter"){
        messageDetails()
    }
})